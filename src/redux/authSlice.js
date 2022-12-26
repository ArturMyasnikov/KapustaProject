import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        isLoggedIn: false,
    },
    reducers: {
        logIn(state, action) {
            state.login = action.payload;
        },
        logOut(state, action) {
            state.login = '';
        },
    },
});
