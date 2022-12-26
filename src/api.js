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
        },
        body: JSON.stringify(data),
    }).then(response => {
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
