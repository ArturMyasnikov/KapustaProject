import s from './welcomeHint.module.css';

export default function WelcomeHint() {
	return (
		<div className={s.welcomeHint}>
			<p className={s.mainText}>
				Hello! To get started, enter the current balance of your account!
			</p>
			<p className={s.secondaryText}>
				You can't spend money until you have it &#128540;
			</p>
		</div>
	);
}
