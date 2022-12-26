import { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ExpensesModule from '../ExpensesModule/ExpensesModule';
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

    const handleTabChange = newValue => {
        setValue(newValue);
    };

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
                    <ExpensesModule expensesCategories={expensesCategories} />
                </TabPanel>
                <TabPanel value="2"></TabPanel>
            </TabContext>
        </Box>
    );
}
