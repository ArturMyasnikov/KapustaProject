import { useState, useEffect } from 'react';
import { getExpenses, getIncome } from '../../api';
import BasicDatePicker from '../DatePicker/DatePicker';
import SelectComponent from '../Select/Select';
import Table from '../Table/Table';
import SummaryForDesktop from '../Summary/SummaryForDesktop';
import { postTransactionExpense, postTransactionIncome } from '../../api';
import s from './tableModule.module.css';

const defaultTransactionValues = {
	date: new Date(),
	category: '',
	description: '',
	amount: '',
};

export default function TableModule({ expensesCategories, value }) {
	const [transaction, setTransaction] = useState(defaultTransactionValues);
	const [expenses, setExpenses] = useState([]);
	const [income, setIncome] = useState([]);
	const [monthsStats, setMonthsStats] = useState([]);

	useEffect(() => {
		getExpenses().then(res => {
			setExpenses(res.monthsStats);
			if (Array.isArray(res?.expenses)) {
				setExpenses(res.expenses);
			}
		});
	}, []);

	useEffect(() => {
		getExpenses().then(res => {
			setMonthsStats(res.monthsStats);
		});
	}, []);

	useEffect(() => {
		getIncome().then(res => {
			if (Array.isArray(res?.incomes)) {
				setIncome(res.incomes);
			}
		});
	}, []);

	const handleInputChange = event => {
		const { name, value } = event.target;

		setTransaction(prevState => ({ ...prevState, [name]: value }));
	};

	const onSaveTransaction = () => {
		const prepareData = {
			...transaction,
			date: formatDate(transaction.date),
		};
		if (value === '1') {
			postTransactionExpense(prepareData).then(expense => {
				if (expense) {
					setExpenses(prevState => {
						return [...prevState, expense.transaction];
					});
				}
			});
		} else {
			postTransactionIncome(prepareData).then(income => {
				if (income) {
					setIncome(prevState => {
						return [...prevState, income.transaction];
					});
				}
			});
		}
		setTransaction(defaultTransactionValues);
	};

	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [year, month, day].join('-');
	}

	const isButtonDisabled =
		Boolean(transaction.category) &&
		Boolean(transaction.description) &&
		Boolean(transaction.amount);

	return (
		<div className={s.table}>
			<div className={s.desktopWidthWrap}>
				<div className={s.wrapper}>
					<BasicDatePicker
						value={transaction.date}
						setTransaction={setTransaction}
					/>
					<div className={s.productsWrap}>
						<input
							type="text"
							name="description"
							onChange={handleInputChange}
							value={transaction.description}
							className={s.ProductDescription}
							placeholder="Product description"
						/>
						<SelectComponent
							value={transaction.category}
							setTransaction={setTransaction}
							expensesCategories={expensesCategories}
						/>

						<label htmlFor="amount" className={s.calculate}>
							<input
								type="number"
								name="amount"
								value={transaction.amount}
								onChange={handleInputChange}
								className={s.input}
								placeholder="0.00"
							/>
							<input>sdaf</input>
						</label>
					</div>
				</div>
				<div className={s.btnWrap}>
					<button
						type="button"
						disabled={!isButtonDisabled}
						onClick={onSaveTransaction}
						className={s.inputBtn}
					>
						Input
					</button>
					<button type="button" className={s.clearBtn}>
						Clear
					</button>
				</div>
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
