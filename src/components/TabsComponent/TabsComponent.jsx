import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import s from './tabsComponent.module.css';
import BasicDatePicker from '../DatePicker/DatePicker';

export default function TabsComponent() {
	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label="lab API tabs example">
						<Tab label="Expenses" value="1" />
						<Tab label="Income" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1" sx={{ padding: '0' }}>
					<div className={s.table}>
						<BasicDatePicker />
						<div className={s.productsWrap}>
							<input
								type="text"
								className={s.ProductDescription}
								placeholder="Product description"
							/>
							<select
								name="categories"
								title="dfd"
								id="categories"
								placeholder="Product category"
								className={s.select}
							></select>
							<div className={s.calculate}>0.00</div>
						</div>
						<div className={s.btnWrap}>
							<button type="button" className={s.inputBtn}>
								Input
							</button>
							<button type="button" className={s.clearBtn}>
								Clear
							</button>
						</div>
					</div>
				</TabPanel>
				<TabPanel value="2"></TabPanel>
			</TabContext>
		</Box>
	);
}
