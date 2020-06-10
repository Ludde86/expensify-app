import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>Dashboard Page</div>;
const AddExpensePage = () => <div>Add Expense Page</div>;
const EditExpensePage = () => <div>Edit Expense Page</div>;
const HelpPage = () => <div>Help Page</div>;
const NotFoundPage = () => (
	<div>
		404! - <Link to="/">Go home</Link>
	</div>
);
const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink exact to="/" activeClassName="is-active">
			Dashboard
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create Expense
		</NavLink>
		<NavLink to="/edit" activeClassName="is-active">
			Edit Expense
		</NavLink>
		<NavLink to="/help" activeClassName="is-active">
			Help
		</NavLink>
	</header>
);

const routes = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={ExpenseDashboardPage} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
