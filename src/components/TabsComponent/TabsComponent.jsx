import { useState, useEffect } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { fetchIncomeCategories } from '../../api';
import TableModule from '../TableModule/TableModule';
import { styled } from '@mui/material/styles';

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
	const [incomeCategories, setIncomeCategories] = useState([]);

	useEffect(() => {
		fetchIncomeCategories().then(income => {
			if (Array.isArray(income)) {
				setIncomeCategories(income);
			}
		});
	}, []);

	const handleTabChange = newValue => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '100%' }}>
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
					<TableModule expensesCategories={expensesCategories} value={value} />
				</TabPanel>
				<TabPanel value="2" sx={{ padding: '0' }}>
					<TableModule expensesCategories={incomeCategories} />
				</TabPanel>
			</TabContext>
		</Box>
	);
}
