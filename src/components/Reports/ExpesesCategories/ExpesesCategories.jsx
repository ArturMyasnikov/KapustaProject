import s from './expesesCategories.module.css';

export default function ExpesesCategories() {
	return (
		<section className={s.section}>
			<div className={s.categoriesTitle}>
				<button type="button" className={s.leftArrow}></button>
				<p className={s.category}>Expenses</p>
				<button type="button" className={s.rightArrow}></button>
			</div>
		</section>
	);
}
