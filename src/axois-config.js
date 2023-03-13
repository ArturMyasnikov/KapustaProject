import axios from "axios";
import jwtDecode from "jwt-decode";

export const axiosApi = axios.create({
    baseURL: 'https://kapusta-backend.goit.global',
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
    },
});

let isRefreshRequest = true;

axiosApi.interceptors.request.use(async (config) => {
    const isOpenApi = checkIsOpenApi(config.url);

    if (isOpenApi) {
        return config;
    }

    let jwtToken = config?.headers['Authorization'];

    if (!jwtToken) {
        jwtToken = localStorage.getItem('token')
    }

    const isJwtValid = await validateJwt(jwtToken, config);

    if (isJwtValid?.newAccessToken) {
        axiosApi.defaults.headers['Authorization'] = `Bearer ${isJwtValid?.newAccessToken}`;
        config.headers['Authorization'] = `Bearer ${isJwtValid?.newAccessToken}`;

        return config;
    }

    return config;
})

axiosApi.interceptors.response.use(response => response.data);

const refreshToken = async () => {
    const sid = localStorage.getItem('sid')
    const refreshToken = localStorage.getItem('refreshToken')

    return axiosApi.post('/auth/refresh', { sid }, {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        }
    });
}

const validateJwt = async (jwt, config) => {
    if (jwt) {
        const decodedJwt = await jwtDecode(jwt);
        const timeNowSeconds = Math.round(new Date().getTime() / 1000);

        if (decodedJwt.exp < timeNowSeconds) {
            let result

            if (isRefreshRequest) {
                isRefreshRequest = false;

                result = await refreshToken(config);

                localStorage.setItem('token', result.newAccessToken);
                localStorage.setItem('refreshToken', result.newRefreshToken);
                localStorage.setItem('sid', result.newSid);

                isRefreshRequest = true;
            }

            return result;
        }

        return true;
    }

    return null;
};

const checkIsOpenApi = (url) => {
    return url.startsWith('/auth/refresh') || url.startsWith('/auth/login');
};
