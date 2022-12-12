import Logo from './Logo';
import s from './header.module.css';

export default function Header() {
	return (
		<header className={s.header}>
			<Logo />
		</header>
	);
}
