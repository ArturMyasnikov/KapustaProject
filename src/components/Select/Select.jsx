import Box from '@mui/material/Box';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';

const MySelect = styled(Select)({
	border: 'none',
	borderRadius: 16,
});

export default function SelectComponent({
	expensesCategories,
	value,
	setTransaction,
}) {
	const handleSelectChange = event => {
		setTransaction(prevState => ({
			...prevState,
			category: event.target.value,
		}));
	};

	return (
		<Box sx={{ minWidth: 184, padding: 0 }}>
			<FormControl fullWidth>
				{value === '' ? <InputLabel>Product category</InputLabel> : null}
				<MySelect
					sx={{
						root: { color: '#C7CCDC' },
						'& .MuiOutlinedInput-notchedOutline': {
							border: 'none',
							position: 'none',
						},
					}}
					value={value}
					renderValue={value !== '' ? undefined : () => 'placeholder text'}
					label="Product category"
					onChange={handleSelectChange}
				>
					{expensesCategories?.map(item => (
						<MenuItem value={item} key={item}>
							{item}
						</MenuItem>
					))}
				</MySelect>
			</FormControl>
		</Box>
	);
}
