import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authSlice';
import s from './header.module.css';
import { refreshUser } from '../../api';
import { refreshToken } from '../../redux/authSlice';
import { useEffect } from 'react';

export default function UserMenu() {
	const dispatch = useDispatch();
	const nav = useNavigate();
	const login = useSelector(state => state.user.login.userData.email);
	// const state = useSelector(state => state.user.login.userData.transactions);
	// console.log(state);

	const logOutUser = () => {
		dispatch(logOut());
		nav('/', { replace: true });
	};

	const onRefreshToken = async () => {
		if (!login) {
			// we need check this condition for right refresh process
			const newAuthData = await refreshUser();
			// console.log('newAuthData', newAuthData);

			localStorage.setItem('token', newAuthData.newAccessToken);
			localStorage.setItem('refreshToken', newAuthData.newRefreshToken);
			localStorage.setItem('sid', newAuthData.newSid);
			dispatch(refreshToken(newAuthData));
		}
	};
	// console.log('onRefreshToken1', onRefreshToken());
	useEffect(() => {
		// console.log('onRefreshToken2', onRefreshToken());
		onRefreshToken(); // we need call it only once for current user sid
	}, []);

	return (
		<div className={s.nav}>
			<div className={s.userNameIcon}>{login?.slice(0, 1).toUpperCase()}</div>
			<span className={s.userName}>{login?.slice(0, login.indexOf('@'))}</span>
			<div className={s.outline}></div>
			<button type="button" onClick={logOutUser} className={s.logOut}>
				Exit
			</button>
			{/*<button type="button" onClick={onRefreshToken} className={s.logOut}>*/}
			{/*	refresh*/}
			{/*</button>*/}
			{/* save this comment for refresh testing*/}
		</div>
	);
}
