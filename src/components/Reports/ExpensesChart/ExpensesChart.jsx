import s from './expensesChart.module.css';

export default function ExpensesChart({ expenses }) {
	console.log('expenses', expenses);
	const renderChart = expenses.map(({ _id, amount, description, category }) => {
		return (
			<li key={_id} className={s.item}>
				<div className={s.wrapper}>
					<span className={s.description}>{description}</span>
					<span className={s.amount}>{amount} грн</span>
				</div>
				<div className={s.chart}></div>
			</li>
		);
	});

	return (
		<div className={s.container}>
			<ul className={s.chartList}>{renderChart}</ul>
		</div>
	);
}
