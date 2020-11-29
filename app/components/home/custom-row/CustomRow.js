import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const CustomRow = ({ dispatch, id, name, value }) => {
	const [localName, setLocalName] = useState(name);
	const [localValue, setLocalValue] = useState(value);

	const handleSubmit = (e) => {
		dispatch({ type: "deleteSelectedRow", id });
	};

	useEffect(() => {
		dispatch({ type: "handleNameChange", id, name: localName });
	}, [localName]);

	useEffect(() => {
		dispatch({ type: "handleValueChange", id, value: localValue });
	}, [localValue]);

	return (
		<form onSubmit={handleSubmit} className="custom-row-container">
			<div className="custom-row-container__inputs">
				<input
					className="custom-row-container__inputs__input"
					type="text"
					value={name}
					onChange={(e) => setLocalName(e.target.value)}
					placeholder="Name"
				/>
				<input
					className="custom-row-container__inputs__input"
					type="text"
					value={value}
					onChange={(e) => setLocalValue(e.target.value)}
					placeholder="Value"
				/>
			</div>
			<input
				className="custom-row-container__button button"
				type="submit"
				value="x"
			/>
		</form>
	);
};

export default connect()(CustomRow);
