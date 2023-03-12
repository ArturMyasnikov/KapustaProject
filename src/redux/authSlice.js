import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		login: '',
		isLoggedIn: false,
		balance: null,
		id: null,
	},
	reducers: {
		logIn(state, action) {
			state.login = action.payload;
			state.isLoggedIn = true;
		},
		logOut(state) {
			state.login = '';
			state.isLoggedIn = false;
		},
		// refreshToken(state, action) {
		// 	state.login = {
		// 		...state.login,
		// 		accessToken: action.payload.newAccessToken,
		// 		refreshToken: action.payload.newRefreshToken,
		// 		sid: action.payload.newSid,
		// 	}
		// }
	},
});

export const { logIn, logOut, refreshToken } = userSlice.actions;
