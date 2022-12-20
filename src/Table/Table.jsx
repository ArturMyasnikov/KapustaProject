import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Table() {
	return (
		<Tabs>
			<TabList>
				<Tab>Expenses</Tab>
				<Tab>Income</Tab>
			</TabList>
		</Tabs>
	);
}
