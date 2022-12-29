import { useState } from 'react';
import BasicDatePicker from '../DatePicker/DatePicker';
import SelectComponent from '../Select/Select';
import Table from '../Table/Table';
import { postTransactionExpense } from '../../api';
import s from './tableModule.module.css';

const defaultTransactionValues = {
	date: new Date(),
	category: '',
	description: '',
	amount: '',
};

export default function TableModule({ expensesCategories }) {
	const [transaction, setTransaction] = useState(defaultTransactionValues);

	const handleInputChange = event => {
		const { name, value } = event.target;

		setTransaction(prevState => ({ ...prevState, [name]: value }));
	};

	const onSaveTransactionExpense = () => {
		const prepareData = {
			...transaction,
			date: formatDate(transaction.date),
		};
		postTransactionExpense(prepareData).then(expense => {
			console.log(expense);
		});
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
					</label>
				</div>
			</div>
			<div className={s.btnWrap}>
				<button
					type="button"
					disabled={!isButtonDisabled}
					onClick={onSaveTransactionExpense}
					className={s.inputBtn}
				>
					Input
				</button>
				<button type="button" className={s.clearBtn}>
					Clear
				</button>
			</div>
			<Table />
		</div>
	);
}
