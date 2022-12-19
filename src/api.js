const BASE_URL = 'https://kapusta-backend.goit.global';

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
