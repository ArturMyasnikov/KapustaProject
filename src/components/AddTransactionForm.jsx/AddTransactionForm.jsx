import { useState } from 'react';
import SelectComponent from '../Select/Select';
import { postTransactionExpense, postTransactionIncome } from '../../api';
import s from './addTransactionForm.module.css';
import BasicDatePicker from '../DatePicker/DatePicker';

const defaultTransactionValues = {
	date: new Date(),
	category: '',
	description: '',
	amount: '',
};

export default function AddTransactionForm({ categories, setExpenses = () => {}, setIncome, value }) {
	const [transaction, setTransaction] = useState(defaultTransactionValues);

	const handleInputChange = event => {
		const { name, value } = event.target;

		setTransaction(prevState => ({ ...prevState, [name]: value }));
	};

	const onSaveTransaction = async () => {
		const prepareData = {
			...transaction,
			date: formatDate(transaction.date),
		};

		if (value === '1') {
			await postTransactionExpense(prepareData).then(expense => {
				if (expense) {
					setExpenses(prevState => {
						return [...prevState, expense.transaction];
					});
				}
			});
		} else {
			await postTransactionIncome(prepareData).then(income => {
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
		<>
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
					<div className={s.selectWrapper}>
						<SelectComponent
							onSaveTransaction={onSaveTransaction}
							value={transaction.category}
							categories={categories}
							setTransaction={setTransaction}
						/>
					</div>
					<label htmlFor="amount" className={s.calculate}>
						<input
							type="number"
							name="amount"
							value={transaction.amount}
							onChange={handleInputChange}
							className={s.input}
							placeholder="0.00 UAH"
						/>
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
		</>
	);
}
