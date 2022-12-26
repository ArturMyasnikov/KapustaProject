import Box from '@mui/material/Box';
import 'dayjs/locale/ru';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FcCalendar } from 'react-icons/fc';
import s from './datePicker.module.css';

export default function BasicDatePicker({ value, setTransaction }) {
    return (
        <div className={s.calendarWrap}>
            <FcCalendar size={20} />
            <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={'ru'}
            >
                <DatePicker
                    label="calendar"
                    value={value}
                    InputProps={{ width: '20px' }}
                    onChange={newValue => {
                        setTransaction(prevState => ({
                            ...prevState,
                            date: newValue,
                        }));
                    }}
                    renderInput={({ inputRef, inputProps, InputProps }) => (
                        <Box
                            sx={{
                                width: 100,
                                '& .MuiSvgIcon-root': {
                                    display: 'none',
                                },
                                '&. MuiButtonBase-root': {
                                    width: '100%',
                                },
                            }}
                        >
                            <input
                                style={{
                                    width: '90px',
                                    border: 'none',
                                    autoFocus: false,
                                }}
                                ref={inputRef}
                                {...inputProps}
                            />
                            {InputProps?.endAdornment}
                        </Box>
                    )}
                />
            </LocalizationProvider>
        </div>
    );
}
