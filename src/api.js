const BASE_URL = 'https://kapusta-backend.goit.global';
const TOKEN = localStorage.getItem('token');

export async function registerUser(user) {
	return await fetch(`${BASE_URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	}).then(response => response.json());
}

export async function loginUser(data) {
	return await fetch(`${BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify(data),
	}).then(response => {
		return response.json();
	});
}

export async function logOutUser() {
	return await fetch(`${BASE_URL}/auth/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(response => {
		if (response) {
			localStorage.setItem('token', '');
		}
		return response.json();
	});
}

export async function refreshUser() {
	return await fetch(`${BASE_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(response => {
		if (response) {
			localStorage.setItem('token', '');
		}
		return response.json();
	});
}

export async function fetchExpensesCategories() {
	return await fetch(`${BASE_URL}/transaction/expense-categories`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export async function fetchIncomeCategories() {
	return await fetch(`${BASE_URL}/transaction/income-categories`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export async function getExpenses() {
	return await fetch(`${BASE_URL}/transaction/expense`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export async function getIncome() {
	return await fetch(`${BASE_URL}/transaction/income`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export async function postTransactionExpense(data) {
	return await fetch(`${BASE_URL}/transaction/expense`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify(data),
	}).then(response => {
		return response.json();
	});
}

export async function postTransactionIncome(data) {
	console.log('data', data);
	return await fetch(`${BASE_URL}/transaction/income`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify({
			...data,
			amount: Number(data.amount),
		}),
	})
		.then(response => {
			console.log(response);
			return response.json();
		})
		.catch(error => console.log('postTransactionIncomeError', error));
}

export function deleteTransaction(id) {
	return fetch(`${BASE_URL}/transaction/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	})
		.then(response => {
			console.log(response);
			return response.json();
		})
		.catch(error => console.log(error));
}

export async function fetchPeriodData(date = '01') {
	return await fetch(`${BASE_URL}/transaction/period-data?date=2023-${date}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		console.log(response);
		return response.json();
	});
}
