import { useState } from 'react';
import Box from '@mui/material/Box';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

const MySelect = styled(Select)({
	border: 'none',
	borderRadius: 16,
});

// const useStyles = makeStyles({
// 	root: {
// 		'&.MuiOutlinedInput-notchedOutline': {
// 			border: 'none',
// 		},
// 	},
// });

const CATEGORIES = [
	'Transport',
	'Products',
	'Health',
	'Alcohol',
	'Entertainment',
	'Housing',
	'Technique',
	'Communal, communication',
	'Sports, hobbies',
	'Education',
	'Other',
];

export default function SelectComponent() {
	const [selectedCategory, setSelectedCategory] = useState('');

	const handleSelectChange = event => {
		setSelectedCategory(event.target.value);
	};

	return (
		<Box sx={{ minWidth: 184, padding: 0 }}>
			<FormControl fullWidth>
				{selectedCategory === '' ? (
					<InputLabel>Product category</InputLabel>
				) : null}
				<MySelect
					sx={{
						root: { color: '#C7CCDC' },
						'& .MuiOutlinedInput-notchedOutline': {
							border: 'none',
							position: 'none',
						},
					}}
					value={selectedCategory}
					renderValue={
						selectedCategory !== '' ? undefined : () => 'placeholder text'
					}
					label="Product category"
					onChange={handleSelectChange}
				>
					{CATEGORIES.map(item => (
						<MenuItem value={item} key={item}>
							{item}
						</MenuItem>
					))}
				</MySelect>
			</FormControl>
		</Box>
	);
}
