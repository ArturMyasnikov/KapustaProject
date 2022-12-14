import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import ErrorMassage from './ErrorMassage';
import { registerUser, loginUser } from '../../api';
import s from './mainPageModal.module.css';

const defaultValues = { email: '', password: '' };

export default function MainPageModal() {
	const [user, setUser] = useState(defaultValues);
	const [error, setError] = useState(false);

	const handleChange = event => {
		const { name, value } = event.target;

		setUser(prevState => ({ ...prevState, [name]: value }));
	};

	const onLogin = async () => {
		console.log(user);
		if (!user.email) {
			setError(true);
		} else {
			const loggedUser = await loginUser(user);
			console.log(loggedUser);
		}
		// setUser(defaultValues);
	};

	const onRegister = async () => {
		await registerUser(user);
	};

	return (
		<div className={s.modalContainer}>
			<div className={s.modal}>
				<p className={s.googleText}>You can log in with your Google Account:</p>
				<button type="button" className={s.googleBtn}>
					<FcGoogle size={18} />
					<span className={s.googleBtnText}>Google</span>
				</button>
				<p className={s.loginText}>
					Or log in using an email and password, after registering:
				</p>
				<form className={s.form}>
					<label className={s.label}>
						Email :
						<input
							className={s.input}
							onChange={handleChange}
							type="email"
							name="email"
							placeholder="your@email.com"
							pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
							title="This is a required field"
							required
						/>
						{error && <ErrorMassage error={error} />}
					</label>
					<label className={s.label}>
						Password :
						<input
							className={s.input}
							onChange={handleChange}
							type="password"
							name="password"
							placeholder="password"
							required
						/>
						{error && <ErrorMassage />}
					</label>
					<div className={s.btnWrapper}>
						<button type="button" className={s.modalBtn} onClick={onLogin}>
							Log In
						</button>
						<button type="button" className={s.modalBtn} onClick={onRegister}>
							Registration
						</button>
					</div>
				</form>
			</div>
			<div className={s.footerIcon}></div>
		</div>
	);
}
