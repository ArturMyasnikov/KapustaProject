import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import LinkToReports from '../../components/Reports/LinkToReports';
// import Summary from '../../components/Summary/Summary';
import TabsComponent from '../../components/TabsComponent/TabsComponent';
import { fetchExpensesCategories, getUser, getExpenses } from '../../api';
import MobileTable from '../../components/Table/MobileTable';
import useWidth from '../../hooks/useWidth';
import s from './expenses.module.css';
import BalanceSheet from '../../components/Reports/BalanceSheet/BalanceSheet';
import SummaryForDesktop from '../../components/Summary/SummaryForDesktop';
// import WelcomeHint from '../WelcomeHint/WelcomeHint';

export default function Expenses() {
	const [expensesCategories, setExpensesCategories] = useState([]);
	const [userInfo, setUserInfo] = useState({});
	const [monthsStats, setMonthsStats] = useState([]);
	const width = useWidth();

	useEffect(() => {
		getUser().then(info => setUserInfo(info));
		fetchExpensesCategories().then(expenses => {
			if (Array.isArray(expenses)) {
				setExpensesCategories(expenses);
			}
		});
	}, []);

	useEffect(() => {
		getExpenses().then(res => {
			setMonthsStats(res.monthsStats);
		});
	}, []);
	return (
		<>
			<Header />
			<section className={s.section}>
				<div className={s.background}>
					<div className={s.wrap}>
						<div className={s.linkWrap}>
							<NavLink to="/reports" className={s.navLink}>
								<LinkToReports />
							</NavLink>
						</div>
						{userInfo.balance && <BalanceSheet balance={userInfo?.balance} />}
						<NavLink to="/addExpenses" className={s.addExpensesLink}>
							ADD EXPENSES
						</NavLink>
					</div>

					{width > 767 && (
						<TabsComponent expensesCategories={expensesCategories} />
					)}
					{/* <SummaryForDesktop monthsStats={monthsStats} /> */}
					{/* <WelcomeHint /> */}
				</div>
			</section>
			{width < 767 && <MobileTable />}
		</>
	);
}
