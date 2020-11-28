import React from "react";
import { Route } from "react-router-dom";

import Graph from "./components/graph/Graph.js";
import Home from "./components/home/Home.js";

const Layout = () => {
	return (
		<div>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/graph">
				<Graph />
			</Route>
		</div>
	);
};

export default Layout;
