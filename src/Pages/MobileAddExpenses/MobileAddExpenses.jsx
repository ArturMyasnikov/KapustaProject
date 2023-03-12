import { NavLink } from 'react-router-dom';
import AddTransactionForm from '../../components/AddTransactionForm.jsx/AddTransactionForm';
import Header from '../../components/Header/Header';
import BackToMain from '../../Icons/componentIcon/backToMainArrow';
import s from './mobileAddExpenses.module.css';
import {useEffect, useState} from "react";
import {fetchExpensesCategories, getExpenses} from "../../api";

export default function MobileAddExpenses() {
	const [expensesCategories, setExpensesCategories] = useState([]);

	useEffect(() => {
		fetchExpensesCategories().then(expenses => {
			if (Array.isArray(expenses)) {
				setExpensesCategories(expenses);
			}
		});
	}, []);

	console.log('expenses in MobileAddExpenses', expensesCategories)
	return (
		<>
			<Header />
			<section className={s.section}>
				<NavLink className={s.backToMainPage} to="/">
					{<BackToMain />}
				</NavLink>
				<AddTransactionForm value="1" categories={expensesCategories} />
			</section>
		</>
	);
}
