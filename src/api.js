const BASE_URL = 'https://kapusta-backend.goit.global';
const TOKEN = localStorage.getItem('token');

export function registerUser(user) {
	return fetch(`${BASE_URL}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(user),
	}).then(response => response.json());
}

export function loginUser(data) {
	return fetch(`${BASE_URL}/auth/login`, {
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

export function logOutUser() {
	return fetch(`${BASE_URL}/auth/logout`, {
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

export function refreshUser() {
	return fetch(`${BASE_URL}/auth/refresh`, {
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

export function fetchExpensesCategories() {
	return fetch(`${BASE_URL}/transaction/expense-categories`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export function fetchIncomeCategories() {
	return fetch(`${BASE_URL}/transaction/income-categories`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export function getExpenses() {
	return fetch(`${BASE_URL}/transaction/expense`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export function getIncome() {
	return fetch(`${BASE_URL}/transaction/income`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
	}).then(response => {
		return response.json();
	});
}

export function postTransactionExpense(data) {
	return fetch(`${BASE_URL}/transaction/expense`, {
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

export function postTransactionIncome(data) {
	return fetch(`${BASE_URL}/transaction/income`, {
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

export function deleteTransaction(id) {
	return fetch(`${BASE_URL}/transaction/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then(response => console.log(response))
		.catch(error => console.log(error));
}
