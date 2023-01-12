import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getExpenses, getIncome } from '../../api';
import s from './mobileTable.module.css';

export default function MobileTable() {
	const [expenses, setExpenses] = useState([]);
	const [income, setIncome] = useState([]);
	const [page, setPage] = useState('1');

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
				setIncome(res.incomes);
			}
		});
	}, []);

	const renderExpenses = () =>
		expenses?.map(({ _id, amount, category, date, description }) => {
			return (
				<div key={_id} className={s.rowWrap}>
					<p className={s.title}>{description}</p>
					<div className={s.row}>
						<div className={s.textWrap}>
							<p className={s.textDate}>{date}</p>
							<p className={s.textCategory}>{category}</p>
						</div>
						<div className={s.sumAndBtnContainer}>
							<p className={s.sumExpense}>-{amount} грн.</p>
							<button type="button" className={s.deleteBtn}></button>
						</div>
					</div>
				</div>
			);
		});

	const renderIncome = () =>
		income?.map(({ _id, amount, category, date, description }) => {
			return (
				<div key={_id} className={s.rowWrap}>
					<p className={s.title}>{description}</p>
					<div className={s.row}>
						<div className={s.textWrap}>
							<p className={s.textDate}>{date}</p>
							<p className={s.textCategory}>{category}</p>
						</div>
						<div className={s.sumAndBtnContainer}>
							<p className={s.sumExpense}>{amount} грн.</p>
							<button type="button" className={s.deleteBtn}></button>
						</div>
					</div>
				</div>
			);
		});

	const onChangePage = e => {
		const id = e.target.id;
		if (id === '2') {
			setPage(id);
		} else {
			setPage(id);
		}
	};

	return (
		<div className={s.container}>
			{page === '1' ? renderExpenses() : renderIncome()}
			<div className={s.mobNavLinksContainer}>
				<NavLink onClick={onChangePage} id="1" className={s.navLink}>
					Expenses
				</NavLink>
				<NavLink onClick={onChangePage} id="2" className={s.navLink}>
					Income
				</NavLink>
			</div>
		</div>
	);
}
