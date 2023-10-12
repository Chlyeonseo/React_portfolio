import Background from './common/Background';
import './scss/style.scss';
import { Route, Switch, Link } from 'react-router-dom';
import Tower_60F from './common/Real_Main_Sub/Tower_60F';
import Tower_59F from './common/Real_Main_Sub/Tower_59F';
import Tower_58F from './common/Real_Main_Sub/Tower_58F';
import Tower_57F from './common/Real_Main_Sub/Tower_57F';
import Tower_56_2F from './common/Real_Main_Sub/Tower_56_2F';
import Tower_1F from './common/Real_Main_Sub/Tower_1F';
import Tower_GF from './common/Real_Main_Sub/Tower_GF';
import Tower_B2F from './common/Real_Main_Sub/Tower_B2F';
import Tower_B3F from './common/Real_Main_Sub/Tower_B3F';
import Header from './common/Header';

function App() {
	return (
		<>

			<Switch>
				<Route exact path='/'>
					<Background></Background>
				</Route>

				<Route exact path='/towerBlock_60F'>
					<Background></Background>
				</Route>

				<Route path='/towerBlock_59F'>
					<Header></Header>
					<Tower_59F></Tower_59F>
				</Route>

				<Route path='/towerBlock_58F'>
					<Header></Header>
					<Tower_58F></Tower_58F>
				</Route>

				<Route path='/towerBlock_57F'>
					<Header></Header>
					<Tower_57F></Tower_57F>
				</Route>

				<Route path='/towerBlock_56_2F'>
					<Header></Header>
					<Tower_56_2F></Tower_56_2F>
				</Route>

				<Route path='/towerBlock_1F'>
					<Header></Header>
					<Tower_1F></Tower_1F>
				</Route>

				<Route path='/towerBlock_GF'>
					<Header></Header>
					<Tower_GF></Tower_GF>
				</Route>

				<Route path='/towerBlock_B2F'>
					<Header></Header>
					<Tower_B2F></Tower_B2F>
				</Route>

				<Route path='/towerBlock_B3F'>
					<Header></Header>
					<Tower_B3F></Tower_B3F>
				</Route>
			</Switch>
		</>
	);
}

export default App;
