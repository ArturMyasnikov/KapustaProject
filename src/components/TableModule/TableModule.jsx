import { useState, useEffect } from 'react';
import { getExpenses, getIncome } from '../../api';
// import BasicDatePicker from '../DatePicker/DatePicker';
// import SelectComponent from '../Select/Select';
import Table from '../Table/Table';
import SummaryForDesktop from '../Summary/SummaryForDesktop';
// import { postTransactionExpense, postTransactionIncome } from '../../api';
import s from './tableModule.module.css';
import AddTransactionForm from '../AddTransactionForm.jsx/AddTransactionForm';

// const defaultTransactionValues = {
// 	date: new Date(),
// 	category: '',
// 	description: '',
// 	amount: '',
// };

export default function TableModule({ categories, value }) {
	const [expenses, setExpenses] = useState([]);
	const [income, setIncome] = useState([]);
	const [monthsStats, setMonthsStats] = useState([]);

	useEffect(() => {
		getExpenses().then(res => {
			setMonthsStats(res.monthsStats);
			if (Array.isArray(res?.expenses)) {
				setExpenses(res.expenses);
			}
		});
	}, []);

	useEffect(() => {
		getIncome().then(res => {
			if (Array.isArray(res?.incomes)) {
				setIncome(res.incomes);
			}
		});
	}, []);

	return (
		<div className={s.table}>
			<div className={s.desktopWidthWrap}>
				{/* <div className={s.wrapper}>
					<BasicDatePicker
						value={transaction.date}
						setTransaction={setTransaction}
					/> */}
				<AddTransactionForm
					categories={categories}
					value={value}
					setExpenses={setExpenses}
					setIncome={setIncome}
				/>
			</div>
			<div className={s.tableAndSummaryWrap}>
				<Table
					expenses={expenses}
					setExpenses={setExpenses}
					income={income}
					setIncome={setIncome}
					value={value}
				/>
				<SummaryForDesktop monthsStats={monthsStats} />
			</div>
		</div>
	);
}
