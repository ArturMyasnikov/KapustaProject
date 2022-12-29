import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Expenses from './Pages/Expenses/Expenses';
import MainPage from './components/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
// import Income from './Pages/Income/Income';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/expenses" element={<Expenses />} />
				{/* <Route path="/income" element={<Income />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
