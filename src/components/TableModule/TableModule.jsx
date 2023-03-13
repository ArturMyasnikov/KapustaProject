import { useState, useEffect } from 'react';
import { getExpenses, getIncome } from '../../api';
// import BasicDatePicker from '../DatePicker/DatePicker';
// import SelectComponent from '../Select/Select';
import Table from '../Table/Table';
import SummaryForDesktop from '../Summary/SummaryForDesktop';
import { postTransactionExpense, postTransactionIncome } from '../../api';
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

	// function formatDate(date) {
	// 	var d = new Date(date),
	// 		month = '' + (d.getMonth() + 1),
	// 		day = '' + d.getDate(),
	// 		year = d.getFullYear();

	// 	if (month.length < 2) month = '0' + month;
	// 	if (day.length < 2) day = '0' + day;

	// 	return [year, month, day].join('-');
	// }

	// const onSaveTransaction = () => {
	// 	const prepareData = {
	// 		...transaction,
	// 		date: formatDate(transaction.date),
	// 	};
	// 	if (value === '1') {
	// 		postTransactionExpense(prepareData).then(expense => {
	// 			if (expense) {
	// 				setExpenses(prevState => {
	// 					return [...prevState, expense.transaction];
	// 				});
	// 			}
	// 		});
	// 	} else {
	// 		postTransactionIncome(prepareData).then(income => {
	// 			if (income) {
	// 				setIncome(prevState => {
	// 					return [...prevState, income.transaction];
	// 				});
	// 			}
	// 		});
	// 	}
	// 	setTransaction(defaultTransactionValues);
	// };

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
