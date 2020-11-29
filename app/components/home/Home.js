import React from "react";
import { connect } from "react-redux";

import CustomRow from "./custom-row/CustomRow.js";
import Card from "./card/Card.js";

// dispatch is available by default as prop due to connect()
const Home = ({ dispatch, customRowsArray, tp, displayCards }) => {
	return (
		<div className="home-container">
			<div className="home-container__top">
				<div className="home-container__top__custom-rows-contianer">
					{customRowsArray.map((item, index) => {
						return (
							<div key={index}>
								<CustomRow
									id={item.id}
									name={item.name}
									value={item.value}
								/>
								<hr />
							</div>
						);
					})}
				</div>
				<button
					className="home-container__top__button button"
					onClick={() => {
						dispatch({ type: "addCustomRow" });
						// dispatch({ type: "changeTp" });
					}}
				>
					Add row
				</button>
			</div>
			<hr />
			<div className="home-container__bottom">
				<button
					className="home-container__bottom__button button"
					onClick={() => dispatch({ type: "toggleDisplayCards" })}
				>
					Create cards
				</button>
				<div className="home-container__bottom__cards-container">
					{displayCards
						? customRowsArray.map((item, index) => {
								// console.log(item);
								return (
									<Card
										name={item.name}
										value={item.value}
										id={item.id}
										key={index}
									/>
								);
						  })
						: ""}
				</div>
			</div>
		</div>
	);
};

// When we pass this function to connect function, selected states from store are made availabe to us
// as a prop.
const mapStateToProps = (state) => ({
	customRowsArray: state.home.customRowsArray,
	tp: state.home.tp,
	displayCards: state.home.displayCards,
});

export default connect(mapStateToProps)(Home);
