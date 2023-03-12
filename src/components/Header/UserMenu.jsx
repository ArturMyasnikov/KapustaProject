import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authSlice';
import s from './header.module.css';

export default function UserMenu() {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const login = useSelector(state => state.user.login.userData.email);

	const logOutUser = () => {
		dispatch(logOut());
		nav('/', { replace: true });
	};

	return (
		<div className={s.nav}>
			<div className={s.userNameIcon}>{login?.slice(0, 1).toUpperCase()}</div>
			<span className={s.userName}>{login?.slice(0, login.indexOf('@'))}</span>
			<div className={s.outline}></div>
			<button type="button" onClick={logOutUser} className={s.logOut}>
				Exit
			</button>
		</div>
	);
}
