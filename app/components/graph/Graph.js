import React from "react";
import { withRouter } from "react-router-dom";

const Graph = (props) => {
	const { history } = props;
	return (
		<div className="graph-cont">
			<button onClick={() => history.push("/")}>prev</button>
		</div>
	);
};

export default withRouter(Graph);
