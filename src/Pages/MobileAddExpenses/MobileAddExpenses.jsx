import { NavLink } from 'react-router-dom';
import AddTransactionForm from '../../components/AddTransactionForm.jsx/AddTransactionForm';
import Header from '../../components/Header/Header';
import BackToMain from '../../Icons/componentIcon/backToMainArrow';
import s from './mobileAddExpenses.module.css';

export default function MobileAddExpenses() {
	return (
		<>
			<Header />
			<section className={s.section}>
				<NavLink className={s.backToMainPage} to="/">
					{<BackToMain />}
				</NavLink>
				<AddTransactionForm />
			</section>
		</>
	);
}
