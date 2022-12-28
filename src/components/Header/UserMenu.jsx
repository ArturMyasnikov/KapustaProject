import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authSlice';
import s from './header.module.css';

export default function UserMenu() {
	const dispatch = useDispatch();
	const nav = useNavigate();

	const logOutUser = () => {
		dispatch(logOut());
		nav('/');
	};
	const login = useSelector(state => state.user.login.userData.email);
	console.log(login);
	return (
		<div className={s.nav}>
			<div className={s.userNameIcon}>U</div>
			<span className={s.userName}>{login}</span>
			<div className={s.outline}></div>
			<button type="button" onClick={logOutUser} className={s.logOut}>
				Exit
			</button>
		</div>
	);
}
