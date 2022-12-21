import { useState } from 'react';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FcCalendar } from 'react-icons/fc';
import s from './datePicker.module.css';

export default function BasicDatePicker() {
	const [value, setValue] = useState(null);

	return (
		<div className={s.calendarWrap}>
			<FcCalendar size={20} />
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					label=""
					value={value}
					onChange={newValue => {
						setValue(newValue);
					}}
					renderInput={({ inputRef, inputProps, InputProps }) => (
						<Box>
							<input ref={inputRef} {...inputProps} />
							{InputProps?.endAdornment}
						</Box>
					)}
				/>
			</LocalizationProvider>
		</div>
	);
}
