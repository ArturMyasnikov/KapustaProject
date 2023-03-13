import { axiosApi } from './axois-config';

export async function registerUser(user) {
	return await axiosApi.post('/auth/register', { user });
}

export async function loginUser(data) {
	return await axiosApi.post('/auth/login', data);
}

export async function logOutUser() {
	const response = await axiosApi.post('/auth/logout');
	localStorage.setItem('token', '');
	localStorage.setItem('refreshToken', '');
	localStorage.setItem('sid', '');

	return response;
}

export async function fetchExpensesCategories() {
	return await axiosApi.get('/transaction/expense-categories');
}

export async function fetchIncomeCategories() {
	return await axiosApi.get('/transaction/income-categories');
}

export async function getExpenses() {
	return await axiosApi.get('/transaction/expense');
}

export async function getIncome() {
	return await axiosApi.get('/transaction/income');
}

export async function postTransactionExpense(data) {
	return await axiosApi.post('/transaction/expense', data);
}

export async function postTransactionIncome(data) {
	return await axiosApi.post('/transaction/income', {
		...data,
		amount: Number(data.amount),
	});
}

export async function deleteTransaction(id) {
	return await axiosApi.delete(`/transaction/${id}`);
}

export async function fetchPeriodData(date = '01') {
	return await axiosApi.get(`/transaction/period-data?date=2023-${date}`);
}

export async function getUser() {
	return await axiosApi.get('/user')
}
