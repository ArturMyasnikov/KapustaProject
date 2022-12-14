import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Balance from './components/Balance/Balance';
import MainPage from './components/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/balance" element={<Balance />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
