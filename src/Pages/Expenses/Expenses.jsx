import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Reports from '../../components/Reports/Reports';
import Summary from '../../components/Summary/Summary';
import TabsComponent from '../../components/TabsComponent/TabsComponent';
import { fetchExpensesCategories } from '../../api';
import s from './expenses.module.css';
import MobileTable from '../../components/Table/MobileTable';
import useWidth from '../../hooks/useWidth';
// import WelcomeHint from '../WelcomeHint/WelcomeHint';

export default function Expenses() {
	const [expensesCategories, setExpensesCategories] = useState([]);
	const width = useWidth();

	useEffect(() => {
		fetchExpensesCategories().then(expenses => {
			if (Array.isArray(expenses)) {
				setExpensesCategories(expenses);
			}
		});
	}, []);

	return (
		<>
			<Header />
			<section className={s.section}>
				<div className={s.background}>
					<div className={s.wrap}>
						<Reports />
						<div className={s.balanceWrapper}>
							<p className={s.balanceText}>Balance:</p>
							<div className={s.balanceContainer}>
								<div className={s.currentBalance}>0.00 UAH</div>
								<button type="button" className={s.balanceBtn}>
									Confirm
								</button>
							</div>
						</div>

						<NavLink className={s.addExpensesLink}>ADD EXPENSES</NavLink>
					</div>

					{width > 767 && (
						<TabsComponent expensesCategories={expensesCategories} />
					)}
					{width > 767 && <Summary />}
					{/* <WelcomeHint /> */}
				</div>
			</section>
			{width < 767 && <MobileTable />}
		</>
	);
}
