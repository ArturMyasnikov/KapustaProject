import s from './expensesChart.module.css';

export default function ExpensesChart({ expenses, incomes, currentPage }) {
	function getScaleHeight(amount) {
		const maxScaleHeight = 328;
		const maxAmount = 10000;
		const scaleHeight = (amount / maxAmount) * maxScaleHeight;
		return Math.min(maxScaleHeight, scaleHeight);
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
						style={{ height: `${getScaleHeight(amount)}px` }}
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
						style={{ height: `${getScaleHeight(amount)}px` }}
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
