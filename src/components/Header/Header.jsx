import Logo from './Logo';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';
import s from './header.module.css';

export default function Header() {
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);

	return (
		<header className={s.header}>
			<Logo />
			{isLoggedIn && <UserMenu />}
		</header>
	);
}
