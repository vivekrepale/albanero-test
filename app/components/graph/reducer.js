const initialState = {
	x: 44,
	y: 45,
};

const reducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case "changeX":
			return { ...state, x: 56 };
		case "changeY":
			return { ...state, y: 12 };
		default:
			return state;
	}
};

export default reducer;
