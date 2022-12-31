import s from './table.module.css';

export default function Table() {
	return (
		<table className={s.table}>
			<thead className={s.tableHead}>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Category</th>
					<th>Sum</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<tr className={s.tableRow}>
					<td>123</td>
					<td>123</td>
					<td>123</td>
					<td>123</td>
					<td>123</td>
				</tr>
				<tr className={s.tableRow}>
					<td>123</td>
					<td>123</td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr className={s.tableRow}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr className={s.tableRow}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr className={s.tableRow}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr className={s.tableRow}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr className={s.tableRow}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr className={s.tableRow}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr className={s.tableRow}>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
	);
}
