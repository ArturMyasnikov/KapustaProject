import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import BackToMain from '../../Icons/componentIcon/backToMainArrow';
import ExpesesCategories from './ExpesesCategories/ExpesesCategories';
import s from './reports.module.css';
import { fetchPeriodData, getExpenses, getIncome } from '../../api';
import BalanceSheet from './BalanceSheet/BalanceSheet';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart/ExpensesChart';

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
	const [expenses, setExpenses] = useState();
	const [incomes, setIncomes] = useState();
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

	useEffect(() => {
		getExpenses().then(res => {
			if (Array.isArray(res?.expenses)) {
				setExpenses(res.expenses);
			}
		});
	}, []);

	useEffect(() => {
		getIncome().then(res => {
			if (Array.isArray(res?.incomes)) {
				setIncomes(res.incomes);
			}
		});
	}, []);

	return (
		<>
			<Header />
			<section className={s.section}>
				<div className={s.container}>
					<NavLink className={s.backToMainPage} to="/">
						{<BackToMain />}
					</NavLink>
					<div className={s.periodContainer}>
						Current period:
						<div className={s.periodWrap}>
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
					</div>
					<BalanceSheet />
				</div>
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
			<ExpensesChart
				expenses={expenses}
				incomes={incomes}
				currentPage={currentPage}
			/>
		</>
	);
}
