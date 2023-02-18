import s from './expesesCategories.module.css';

export default function ExpesesCategories({ currentPage, setCurrentPage }) {
	function nextPage() {
		setCurrentPage(currentPage === 1 ? 2 : 1);
	}

	return (
		<section className={s.section}>
			<div className={s.categoriesTitle}>
				<button
					type="button"
					className={s.leftArrow}
					onClick={nextPage}
				></button>
				<p className={s.category}>
					{currentPage === 1 ? 'Expenses' : 'Income'}
				</p>
				<button
					type="button"
					className={s.rightArrow}
					onClick={nextPage}
				></button>
			</div>
		</section>
	);
}
