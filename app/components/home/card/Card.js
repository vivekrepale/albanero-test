import React from "react";

const Card = (props) => {
	// console.log("card", props);
	return (
		<div className="card-container">
			<div className="card-container__top">
				<h1 className="card-container__text card-container__top__name">
					{props.name}
				</h1>
				<h1 className="card-container__text card-container__top__id">
					{props.id}
				</h1>
			</div>
			<h1 className="card-container__text card-container__value">
				{props.value}
			</h1>
		</div>
	);
};

export default Card;
