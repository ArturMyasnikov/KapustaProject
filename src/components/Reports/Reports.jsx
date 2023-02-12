import { NavLink } from 'react-router-dom';
import Header from '../Header/Header';
import BackToMain from '../../Icons/componentIcon/backToMainArrow';
import s from './reports.module.css';
import BasicDatePicker from '../DatePicker/DatePicker';
import BalanceSheet from '../BalanceSheet/BalanceSheet';

export default function Report() {
	return (
		<>
			<Header />
			<section className={s.section}>
				<NavLink className={s.backToMainPage} to="/">
					{<BackToMain />}
				</NavLink>
				<span className={s.currentPeriod}>Current period:</span>
				<BasicDatePicker />
				<span>Balance:</span>
				<BalanceSheet />
				<div className={s.statistics}>
					<p className={s.statisticsExpenses}>Expenses:</p>
					<span className={s.balanceExpenses}>- 18 000.00 грн.</span>
					<p className={s.statisticsIncome}>Income:</p>
					<span className={s.balanceIncome}>+ 45 000.00 грн.</span>
				</div>
			</section>
		</>
	);
}
