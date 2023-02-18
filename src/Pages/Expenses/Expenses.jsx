import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import LinkToReports from '../../components/Reports/LinkToReports';
import Summary from '../../components/Summary/Summary';
import TabsComponent from '../../components/TabsComponent/TabsComponent';
import { fetchExpensesCategories, getUser } from '../../api';
import MobileTable from '../../components/Table/MobileTable';
import useWidth from '../../hooks/useWidth';
import s from './expenses.module.css';
import BalanceSheet from '../../components/Reports/BalanceSheet/BalanceSheet';
// import WelcomeHint from '../WelcomeHint/WelcomeHint';

export default function Expenses() {
	const [expensesCategories, setExpensesCategories] = useState([]);
	const [userInfo, setUserInfo] = useState({});
	const width = useWidth();

	useEffect(() => {
		getUser().then(info => setUserInfo(info));
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
						<NavLink to="/reports">
							<LinkToReports />
						</NavLink>
						{userInfo.balance && <BalanceSheet balance={userInfo?.balance} />}
						{/* <div className={s.balanceWrapper}>
							<p className={s.balanceText}>Balance:</p>
							<div className={s.balanceContainer}>
								<div className={s.currentBalance}>
									{`${userInfo.balance} UAH`}
								</div>
								<button type="button" className={s.balanceBtn}>
									Confirm
								</button>
							</div>
						</div> */}

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
