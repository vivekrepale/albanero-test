const initialState = {
	name: "",
	value: 45,
};

const reducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case "changeName":
			return { ...state, name: "Vivek" };
		case "changeValue":
			return { ...state, value: 12 };
		default:
			return state;
	}
};

export default reducer;
