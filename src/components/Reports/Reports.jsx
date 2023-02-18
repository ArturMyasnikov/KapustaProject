import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import BackToMain from '../../Icons/componentIcon/backToMainArrow';
import ExpesesCategories from './ExpesesCategories/ExpesesCategories';
import s from './reports.module.css';
import { fetchPeriodData } from '../../api';
import BalanceSheet from './BalanceSheet/BalanceSheet';
import ExpensesList from './ExpensesList/ExpensesList';

const monthes = {
	Январь: 'January',
	Февраль: 'February',
	Март: 'March',
	Апрель: 'April',
	Май: 'May',
	Июнь: 'June',
	Июль: 'July',
	Август: 'August',
	Сентябрь: 'September',
	Октябрь: 'October',
	Ноябрь: 'November',
	Декабрь: 'December',
};

export default function Report() {
	const [expensesTotal, setExpensesTotal] = useState();
	const [incomeTotal, setIncomeTotal] = useState();
	const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);

	const monthNames = Object.values(monthes);
	const currentMonth = monthNames[currentMonthIndex];

	function handlePrevMonth() {
		setCurrentMonthIndex(
			currentMonthIndex === 0 ? monthNames.length - 1 : currentMonthIndex - 1
		);
	}

	function handleNextMonth() {
		setCurrentMonthIndex(
			currentMonthIndex === monthNames.length - 1 ? 0 : currentMonthIndex + 1
		);
	}

	useEffect(() => {
		fetchPeriodData().then(res =>
			setExpensesTotal(
				res.expenses.expenseTotal,
				setIncomeTotal(res?.incomes.incomeTotal)
			)
		);
	}, []);

	return (
		<>
			<Header />
			<section className={s.section}>
				<NavLink className={s.backToMainPage} to="/">
					{<BackToMain />}
				</NavLink>
				<span className={s.currentPeriod}>Current period:</span>
				<div className={s.periodContainer}>
					<button
						type="button"
						className={s.arrowBtnLeft}
						onClick={handlePrevMonth}
					></button>
					<p className={s.period}>{currentMonth}</p>
					<button
						type="button"
						className={s.arrowBtnRight}
						onClick={handleNextMonth}
					></button>
				</div>
				<BalanceSheet />
				<div className={s.statistics}>
					<div className={s.wrap}>
						<p className={s.statisticsExpenses}>Expenses:</p>
						<span
							className={s.balanceExpenses}
						>{`- ${expensesTotal} грн.`}</span>
					</div>
					<div className={s.wrap}>
						<p className={s.statisticsIncome}>Income:</p>
						<span className={s.balanceIncome}>{`+ ${incomeTotal} грн.`}</span>
					</div>
				</div>
			</section>
			<ExpesesCategories
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			<ExpensesList currentPage={currentPage} />
		</>
	);
}
