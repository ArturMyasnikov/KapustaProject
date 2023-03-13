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
	},
});

export const { logIn, logOut, refreshToken } = userSlice.actions;
