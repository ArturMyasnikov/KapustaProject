import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Reports from '../Reports/Reports';
import Summary from '../Summary/Summary';
import TabsComponent from '../TabsComponent/TabsComponent';
import { fetchExpensesCategories } from '../../api';
import s from './balance.module.css';
// import WelcomeHint from '../WelcomeHint/WelcomeHint';

export default function Balance() {
	const [expensesCategories, setExpensesCategories] = useState([]);

	useEffect(() => {
		fetchExpensesCategories().then(expenses => setExpensesCategories(expenses));
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
								<div className={s.currentBalance}>00.00 UAH</div>
								<button type="button" className={s.balanceBtn}>
									Confirm
								</button>
							</div>
						</div>
					</div>
					<TabsComponent expensesCategories={expensesCategories} />
					<Summary />
					{/* <WelcomeHint /> */}
				</div>
			</section>

			<footer className={s.footer}>
				<nav className={s.nav}>
					<ul className={s.navList}>
						<li className={s.navListItem}>
							<NavLink className={s.navLink}>Expenses</NavLink>
						</li>
						<li className={s.navListItem}>
							<NavLink className={s.navLink}>Income</NavLink>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
}
