import { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TableModule from '../TableModule/TableModule';
import { styled } from '@mui/material/styles';
import { NavLink, Navigate } from 'react-router-dom';
// import s from './tabsComponent.module.css';

const MyTab = styled(Tab)({
	background: '#FAFBFD',
	borderRadius: '16px 16px 0 0',
	color: 'black',
	height: 48,
	padding: '0 30px',
	'&.Mui-selected': {
		color: '#FF751D',
		background: '#FEFEFE',
	},
});

export default function TabsComponent({ expensesCategories }) {
	const [value, setValue] = useState('1');

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	console.log(expensesCategories);
	console.log('test');
	return (
		<Box sx={{ width: '100%', marginTop: '60px' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList
						TabIndicatorProps={{
							style: { backgroundColor: 'transparent' },
						}}
						onChange={handleTabChange}
						aria-label="lab API tabs example"
					>
						<MyTab label="Expenses" value="1" />
						<MyTab label="Income" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1" sx={{ padding: '0' }}>
					<TableModule expensesCategories={expensesCategories} />
				</TabPanel>
				<TabPanel value="2" sx={{ padding: '0' }}>
					<TableModule expensesCategories={expensesCategories} />
					<Navigate to="/income" />
					{/* <TableModule expensesCategories={expensesCategories} /> */}
					{/* {value === '2' && <Navigate to="income" /> && (
					<TableModule expensesCategories={expensesCategories} />
				)} */}
				</TabPanel>
			</TabContext>
		</Box>
	);
}

// {
// 	/* <div className={s.linkDiv}>
// 			<NavLink to={'/expenses'} className={s.link}>
// 				Expenses
// 			</NavLink>
// 			<NavLink to={'/income'} className={s.link}>
// 				Income
// 			</NavLink>
// 		</div> */
// }
