import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Expenses from './Pages/Expenses/Expenses';
import MainPage from './components/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
import Income from './Pages/Income/Income';
import Reports from './components/Reports/Reports';
import MobileAddExpenses from './Pages/MobileAddExpenses/MobileAddExpenses';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/expenses" element={<Expenses />} />
				<Route path="/income" element={<Income />} />
				<Route path="/reports" element={<Reports />} />
				<Route path="/addExpenses" element={<MobileAddExpenses />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
