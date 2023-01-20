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

export const { logIn, logOut } = userSlice.actions;

// const initialState = {
//   transactions: [],
//   isLoading: false,
//   error: null,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'DELETE_TRANSACTION_START':
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case 'DELETE_TRANSACTION_SUCCESS':
//       return {
//         ...state,
//         transactions: state.transactions.filter(
//           (transaction) => transaction._id !== action.payload
//         ),
//         isLoading: false,
//       };
//     case 'DELETE_TRANSACTION_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };
