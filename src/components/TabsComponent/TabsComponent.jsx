import { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import s from './tabsComponent.module.css';
import BasicDatePicker from '../DatePicker/DatePicker';
import { styled } from '@mui/material/styles';
import MinimalSelect from '../Select/Select';
import Table from '../Table/Table';

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

export default function TabsComponent() {
	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%', marginTop: '60px' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList
						TabIndicatorProps={{ style: { backgroundColor: 'transparent' } }}
						onChange={handleChange}
						aria-label="lab API tabs example"
					>
						<MyTab label="Expenses" value="1" />
						<MyTab label="Income" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1" sx={{ padding: '0' }}>
					<div className={s.table}>
						<div className={s.wrapper}>
							<BasicDatePicker />
							<div className={s.productsWrap}>
								<input
									type="text"
									className={s.ProductDescription}
									placeholder="Product description"
								/>
								<MinimalSelect />
								<div className={s.calculate}>0.00</div>
							</div>
						</div>
						<div className={s.btnWrap}>
							<button type="button" className={s.inputBtn}>
								Input
							</button>
							<button type="button" className={s.clearBtn}>
								Clear
							</button>
						</div>
						<Table />
					</div>
				</TabPanel>
				<TabPanel value="2"></TabPanel>
			</TabContext>
		</Box>
	);
}
