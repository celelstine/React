import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Router,hashHistory,IndexRoute} from 'react-router';
import Layout from './pages/layout';
import Featured from './pages/Featured';
import Setting from './pages/Setting';
import Archives from './pages/Archives';
import Todo from './pages/Todo';

const app = document.getElementById('app');
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute  component={Featured} ></IndexRoute>
			<Route path="archives/:article" name="archive" component={Archives} ></Route>
			<Route path="archives" component={Archives} ></Route>
			<Route path="setting" component={Setting} ></Route>
			<Route path="featured" component={Featured} ></Route>
			<Route path="todo" component={Todo} ></Route>
		</Route>
	</Router>
,app);