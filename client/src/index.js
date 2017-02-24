import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/app";
import reducers from "./reducers";
import Signin from "./components/auth/signin";
import NewItem from "./components/list/new-list-item";

import { Router, Route, IndexRoute, browserHistory } from "react-router";

var createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="signin" component={Signin} />
				<Route path="newitem" component={NewItem} />
			</Route>
		</Router>	
	</Provider>
	, document.querySelector(".container"));	
	