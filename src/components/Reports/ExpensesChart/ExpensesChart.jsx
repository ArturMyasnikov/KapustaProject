// import s from './expensesChart.module.css';

// export default function ExpensesChart({ expenses, incomes, currentPage }) {
// 	function getScaleHeight(amount) {
// 		const maxScaleHeight = 328;
// 		const maxAmount = 10000;
// 		const scaleHeight = (amount / maxAmount) * maxScaleHeight;
// 		return Math.min(maxScaleHeight, scaleHeight);
// 	}

// 	function calculateMaxScaleWidth(amount) {
// 		const maxWidth = 270;
// 		const maxAmount = 10000;
// 		const scaleWidth = (amount / maxAmount) * maxWidth;
// 		return Math.min(maxWidth, scaleWidth);
// 	}

// 	const renderExpensesChart = expenses
// 		?.sort((a, b) => b.amount - a.amount)
// 		.map(({ _id, amount, description }) => {
// 			return (
// 				<li key={_id} className={s.item}>
// 					<div className={s.wrapper}>
// 						<span className={s.description}>{description}</span>
// 						<span className={s.amount}>{amount} грн</span>
// 					</div>
// 					<div
// 						className={s.chart}
// 						style={
// 							window.innerWidth < 767
// 								? { width: `${calculateMaxScaleWidth(amount)}px` }
// 								: { height: `${getScaleHeight(amount)}px` }
// 						}
// 					></div>
// 					<span className={s.descriptionOnTablet}>{description}</span>
// 				</li>
// 			);
// 		});
// 	const renderIncomesChart = incomes
// 		?.sort((a, b) => b.amount - a.amount)
// 		.map(({ _id, amount, description }) => {
// 			return (
// 				<li key={_id} className={s.itemIncome}>
// 					<div className={s.wrapper}>
// 						<span className={s.description}>{description}</span>
// 						<span className={s.amount}>{amount} грн</span>
// 					</div>
// 					<div
// 						className={s.chart}
// 						style={
// 							window.innerWidth < 767
// 								? { width: `${calculateMaxScaleWidth(amount)}px` }
// 								: { height: `${getScaleHeight(amount)}px` }
// 						}
// 					></div>
// 				</li>
// 			);
// 		});

// 	return (
// 		<section className={s.container}>
// 			<ul className={s.chartList}>
// 				{currentPage === 1 ? renderExpensesChart : renderIncomesChart}
// 			</ul>
// 		</section>
// 	);
// }

import { useState, useEffect } from 'react';
import s from './expensesChart.module.css';

export default function ExpensesChart({ expenses, incomes, currentPage }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 767);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	function getScaleHeight(amount) {
		const maxScaleHeight = 328;
		const maxAmount = 10000;
		const scaleHeight = (amount / maxAmount) * maxScaleHeight;
		return Math.min(maxScaleHeight, scaleHeight);
	}

	function calculateMaxScaleWidth(amount) {
		const maxWidth = 270;
		const maxAmount = 10000;
		const scaleWidth = (amount / maxAmount) * maxWidth;
		return Math.min(maxWidth, scaleWidth);
	}

	const renderExpensesChart = expenses
		?.sort((a, b) => b.amount - a.amount)
		.map(({ _id, amount, description }) => {
			return (
				<li key={_id} className={s.item}>
					<div className={s.wrapper}>
						<span className={s.description}>{description}</span>
						<span className={s.amount}>{amount} грн</span>
					</div>
					<div
						className={s.chart}
						style={
							isMobile
								? { width: `${calculateMaxScaleWidth(amount)}px` }
								: { height: `${getScaleHeight(amount)}px` }
						}
					></div>
					<span className={s.descriptionOnTablet}>{description}</span>
				</li>
			);
		});

	const renderIncomesChart = incomes
		?.sort((a, b) => b.amount - a.amount)
		.map(({ _id, amount, description }) => {
			return (
				<li key={_id} className={s.itemIncome}>
					<div className={s.wrapper}>
						<span className={s.description}>{description}</span>
						<span className={s.amount}>{amount} грн</span>
					</div>
					<div
						className={s.chart}
						style={
							isMobile
								? { width: `${calculateMaxScaleWidth(amount)}px` }
								: { height: `${getScaleHeight(amount)}px` }
						}
					></div>
				</li>
			);
		});

	return (
		<section className={s.container}>
			<ul className={s.chartList}>
				{currentPage === 1 ? renderExpensesChart : renderIncomesChart}
			</ul>
		</section>
	);
}
