import MainPageModal from '../MainPageModal/MainPageModal';
import s from './mainPage.module.css';

export default function MainPage() {
	return (
		<div className={s.mainPageContainer}>
			<div className={s.textContainer}>
				<div className={s.mainTextWrap}></div>
				<div className={s.backgroundImg}></div>
			</div>
			<MainPageModal />
		</div>
	);
}
