import { useState } from 'react';
import { Box, Tab, Select, MenuItem } from '@mui/material';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import s from './tabsComponent.module.css';
import BasicDatePicker from '../DatePicker/DatePicker';
import StickyHeadTable from '../Table/Table';
import { styled } from '@mui/material/styles';

const MyTab = styled(Tab)({
	background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
	borderColor: 'green',
	borderRadius: 16,
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white',
	height: 48,
	padding: '0 30px',

	'&.Mui-selected': {
		color: 'green',
	},
});

const MySelect = styled(Select)({
	width: 300,
	borderRadius: 16,
});

const CATEGORIES = ['category1', 'category2', 'category3'];

export default function TabsComponent() {
	const [value, setValue] = useState('1');
	const [selectedCategory, setSelectedCategory] = useState('');

	const handleSelectChange = event => {
		console.log('event.target.value', event.target.value);
		setSelectedCategory(event.target.value);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%' }}>
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
								{/*<select*/}
								{/*	name="categories"*/}
								{/*	title="dfd"*/}
								{/*	id="categories"*/}
								{/*	placeholder="Product category"*/}
								{/*	className={s.select}*/}
								{/*></select>*/}
								<MySelect
									value={selectedCategory}
									label="Product category"
									onChange={handleSelectChange}
								>
									{CATEGORIES.map(item => (
										<MenuItem value={item} key={item}>
											{item}
										</MenuItem>
									))}
								</MySelect>
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
						<StickyHeadTable />
					</div>
				</TabPanel>
				<TabPanel value="2"></TabPanel>
			</TabContext>
		</Box>
	);
}
