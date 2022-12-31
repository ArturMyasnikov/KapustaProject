import Logo from './Logo';
import { useSelector } from 'react-redux';
import s from './header.module.css';
import UserMenu from './UserMenu';

export default function Header() {
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);

	return (
		<header className={s.header}>
			<Logo />
			{isLoggedIn && <UserMenu />}
		</header>
	);
}
