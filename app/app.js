import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Layout from "./layout/Layout.js";
import store from "./RootReducer.js";

import "./sass/main.scss";

ReactDOM.render(
	//router will help to navigate between two given tasks
	<Provider store={store}>
		<Router>
			<Layout />
		</Router>
	</Provider>,
	document.getElementById("app")
);

if (module.hot) {
	module.hot.accept();
}
//store={}
