import s from './summary.module.css';

export default function Summary() {
	return (
		<>
			<div className={s.wrapper}>
				<div className={s.summary}>
					<p className={s.title}>Summary</p>
					<ul className={s.list}>
						<li className={s.item}></li>
						<li className={s.item}></li>
						<li className={s.item}></li>
						<li className={s.item}></li>
						<li className={s.item}></li>
						<li className={s.item}></li>
					</ul>
				</div>
				<div className={s.backgroundImg}></div>
			</div>
		</>
	);
}
