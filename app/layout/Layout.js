import React from "react";
import { Route, withRouter } from "react-router-dom";

import Graph from "../components/graph/Graph.js";
import Home from "../components/home/Home.js";

const Layout = (props) => {
	const history = props.history;
	const pathname = props.location.pathname;
	return (
		<div className="layout-container">
			<div className="layout-container__header">
				<h1 className="layout-container__header__title">
					Albanero assignment
				</h1>
				{pathname === "/" ? (
					<button
						className="layout-container__header__button--next button"
						onClick={() => history.push("/graph")}
					>
						next
					</button>
				) : (
					<button
						className="layout-container__header__button--prev button"
						onClick={() => history.push("/")}
					>
						prev
					</button>
				)}
			</div>
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/graph">
				<Graph />
			</Route>
		</div>
	);
};

export default withRouter(Layout);
