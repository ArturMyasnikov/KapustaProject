import s from './summaryForDesktop.module.css';

export default function SummaryForDesktop() {
	return (
		<div className={s.summary}>
			<div className={s.titleWrap}>
				<p className={s.title}>Summary</p>
			</div>
			<ul className={s.list}>
				<li className={s.item}>DECEMBER</li>
				<li className={s.item}>1</li>
				<li className={s.item}>1</li>
				<li className={s.item}>1</li>
				<li className={s.item}>1</li>
				<li className={s.item}>1</li>
			</ul>
		</div>
	);
}
