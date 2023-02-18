import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchExpensesCategories, fetchIncomeCategories } from '../../../api';
import {
	Alcohol,
	Products,
	Entertainment,
	Health,
	Housing,
	SportsHobbies,
	Education,
	Other,
	Transport,
	Technique,
	AdditionalIncome,
	Salary,
	CommunalCommunication,
} from '../../../Icons/ExpensesIcons/';
import s from './expensesList.module.css';

const categoryIcons = {
	Продукты: <Products />,
	Алкоголь: <Alcohol />,
	Развлечения: <Entertainment />,
	Здоровье: <Health />,
	Транспорт: <Transport />,
	'Всё для дома': <Housing />,
	Техника: <Technique />,
	'Коммуналка и связь': <CommunalCommunication />,
	'Спорт и хобби': <SportsHobbies />,
	Образование: <Education />,
	Прочее: <Other />,
	'З/П': <Salary />,
	'Доп. Доход': <AdditionalIncome />,
};

export default function ExpensesList() {
	const [categoriesExpense, setCategoriesExpense] = useState();
	const [categoriesIncome, setCategoriesIncome] = useState();
	const transactions = useSelector(
		state => state.user.login.userData.transactions
	);

	const getCategoryAmount = () => {
		const obj = {};
		for (let i = 0; i < transactions.length; i++) {
			const category = transactions[i].category;
			const amount = transactions[i].amount;
			if (!obj[category]) {
				obj[category] = amount;
			} else {
				obj[category] += amount;
			}
		}
		return obj;
	};
	const expense = getCategoryAmount();

	useEffect(() => {
		fetchExpensesCategories().then(response => setCategoriesExpense(response));
	}, []);

	useEffect(() => {
		fetchIncomeCategories().then(response => setCategoriesIncome(response));
	}, []);

	// expense[category] для проверки рендерить по условию

	const renderExpenses = categoriesExpense?.map(category => {
		return (
			<li key={category} className={s.categoryCard}>
				<p className={s.sum}>{expense[category] ?? 0}</p>
				<button type="button" className={s.categoryIcon}>
					{categoryIcons[category]}
				</button>
				<span className={s.categoryName}>{category}</span>
			</li>
		);
	});

	const renderIncome = categoriesIncome?.map(category => {
		return (
			<li key={category} className={s.categoryCard}>
				<p className={s.sum}>{expense[category] ?? 0}</p>
				<button type="button" className={s.categoryIcon}>
					{categoryIcons[category]}
				</button>
				<span className={s.categoryName}>{category}</span>
			</li>
		);
	});
	return (
		<>
			<section className={s.section}>
				<ul className={s.categoryList}>{renderExpenses}</ul>
			</section>
		</>
	);
}
