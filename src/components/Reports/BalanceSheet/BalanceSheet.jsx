import { useSelector } from 'react-redux';
import s from './balanceSheet.module.css';

export default function BalanceSheet() {
	const balance = useSelector(state => state.user.login.userData.balance);

	return (
		<div className={s.balanceWrapper}>
			<p className={s.balanceText}>Balance:</p>
			<div className={s.balanceContainer}>
				<p className={s.currentBalance}>{`${balance} UAH`}</p>
				<button type="button" className={s.balanceBtn}>
					Confirm
				</button>
			</div>
		</div>
	);
}
