import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/authSlice';
import s from './header.module.css';

export default function UserMenu() {
	const dispatch = useDispatch();
	const login = useSelector(state => state.user.login.userData.email);
	console.log(login);
	return (
		<div className={s.nav}>
			<div className={s.userNameIcon}>U</div>
			<span className={s.userName}>{login}</span>
			<div className={s.outline}></div>
			<button
				type="button"
				onClick={() => dispatch(logOut())}
				className={s.logOut}
			>
				Exit
			</button>
		</div>
	);
}
