import { useState } from 'react';
import { Select, MenuItem, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

const MySelect = styled(Select)({
	border: 'none',
	width: '300px',
	borderRadius: 16,
});

const MyInput = styled(OutlinedInput)({
	border: 'none',
	'&.MuiOutlinedInput-root': {
		border: 'none',
	},
});

const CATEGORIES = ['category1', 'category2', 'category3'];

export default function SelectComponent() {
	const [selectedCategory, setSelectedCategory] = useState('');

	const handleSelectChange = event => {
		console.log('event.target.value', event.target.value);
		setSelectedCategory(event.target.value);
	};

	return (
		<MySelect
			value={selectedCategory}
			label="Product category"
			onChange={handleSelectChange}
			input={<MyInput />}
		>
			{CATEGORIES.map(item => (
				<MenuItem value={item} key={item}>
					{item}
				</MenuItem>
			))}
		</MySelect>
	);
}
