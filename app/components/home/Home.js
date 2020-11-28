import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Home = (props) => {
	const { history } = props;
	return (
		<div className="home-cont">
			<button onClick={() => history.push("/graph")}>next</button>
		</div>
	);
};

export default connect()(withRouter(Home));
