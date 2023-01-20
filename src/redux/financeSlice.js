const initialState = {
	transactions: [],
	isLoading: false,
	error: null,
};

export const deleteReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DELETE_TRANSACTION_START':
			return {
				...state,
				isLoading: true,
			};
		case 'DELETE_TRANSACTION_SUCCESS':
			return {
				...state,
				transactions: state.transactions.filter(
					transaction => transaction._id !== action.payload
				),
				isLoading: false,
			};
		case 'DELETE_TRANSACTION_FAILURE':
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
