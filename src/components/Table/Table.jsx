import { deleteTransaction } from '../../api';
import s from './table.module.css';

export default function Table({ expenses, income, value }) {
	// const [transactionId, setTransactionId] = useState('');
	// console.log('transactionId', transactionId);

	const onDeleteTransaction = _id => {
		// setTransactionId(_id);
		deleteTransaction(_id);
		// console.log(transactionId);
		// console.log(deleteTransaction(transactionId));
		// deleteTransaction(transactionId);  зацикливается вкладка !!!!!!
		// setTransactionId('');
	};

	const renderIncome = income?.map(
		({ _id, amount, category, date, description }) => {
			return (
				<tr key={_id} className={s.tableRow}>
					<td>{date}</td>
					<td className={s.tableDescription}>{description}</td>
					<td>{category}</td>
					<td className={s.tableSumIncome}>{amount} грн.</td>
					<td>
						<button
							type="button"
							// onClick={onDeleteTransaction(_id)}
							className={s.deleteIcon}
						></button>
					</td>
				</tr>
			);
		}
	);

	const renderExpenses = expenses?.map(
		({ _id, amount, category, date, description }) => {
			return (
				<tr key={_id} className={s.tableRow}>
					<td>{date}</td>
					<td className={s.tableDescription}>{description}</td>
					<td>{category}</td>
					<td className={s.tableSum}>- {amount} грн.</td>
					<td>
						<button
							type="button"
							onClick={() => onDeleteTransaction(_id)}
							className={s.deleteIcon}
						></button>
					</td>
				</tr>
			);
		}
	);

	return (
		<>
			<div className={s.tableWrapper}>
				<table className={s.table}>
					<thead className={s.tableHead}>
						<tr>
							<th className={s.tableHeadDate}>Date</th>
							<th className={s.tableHeadDescription}>Description</th>
							<th className={s.tableHeadCategory}>Category</th>
							<th className={s.tableHeadSum}>Sum</th>
							<th className={s.tableHeadDelete}></th>
						</tr>
					</thead>
				</table>
				<div className={s.tableBody}>
					<table className={s.mainTable}>
						<tbody>{value === '1' ? renderExpenses : renderIncome}</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
