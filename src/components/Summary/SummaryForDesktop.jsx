import s from './summaryForDesktop.module.css';

export default function SummaryForDesktop({ monthsStats }) {
	const renderSummary = () => {
		const summaryArray = [];
		const monthesArray = monthsStats ? Object.keys(monthsStats) : [];

		monthesArray.forEach(key => {
			const isShow = typeof monthsStats[key] === 'number';
			if (isShow && summaryArray.length < 6) {
				summaryArray.push(
					<li key={key} className={s.item}>
						<div className={s.flexItem}>
							<span>{key}</span>
							<span>{monthsStats[key]}</span>
						</div>
					</li>
				);
			}
		});

		return summaryArray;
	};

	return (
		<div className={s.summary}>
			<div className={s.titleWrap}>
				<p className={s.title}>Summary</p>
			</div>
			<ul className={s.list}>{renderSummary()}</ul>
		</div>
	);
}
