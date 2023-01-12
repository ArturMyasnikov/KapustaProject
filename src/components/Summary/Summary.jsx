import s from './summary.module.css';

export default function Summary() {
	return (
		<>
			<div className={s.wrapper}>
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
				<div className={s.backgroundImg}></div>
			</div>
		</>
	);
}
