import Header from '../Header/Header';
import MainPageModal from '../MainPageModal/MainPageModal';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './mainPage.module.css';

export default function MainPage() {
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);

	if (isLoggedIn) {
		<Navigate to="balance" />;
	}

	return (
		<>
			<Header />
			<div className={s.pageContainer}>
				<div className={s.textContainer}>
					<div className={s.mainTextWrap}></div>
					<div className={s.backgroundImg}></div>
				</div>
				<MainPageModal />
			</div>
		</>
	);
}
