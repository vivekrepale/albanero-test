//This functions generates a 8 digit random number
const generateId = () => {
	return Math.floor(10000000 + Math.random() * 80000000);
};

/*In REDUX, we never mutate the state, instead we return a new copy of the state. So at many points I had
make a copy of array in state using array.FILTER and then make changes to it.*/

//This function takes in customRowsArray from state, makes a copy of that and returns copy with a new item added
const addCustomRow = (array) => {
	const newArray = array.filter(() => {
		return true;
	});
	newArray.push({
		name: "",
		value: "",
		id: generateId(),
	});
	return newArray;
};

//This function takes in customRowsArray and id of selected custom row from state and and return an array
//without that selected custom row
const deleteSelectedRow = (array, id) => {
	const newArray = array.filter((item) => {
		return item.id != id;
	});
	return newArray;
};

/*handleNameChange and handleValueChange both, first map over the array from the state, if
 if id matches they store the value and the index of that entry in tempObj, if id doesnt 
 match they simply push the entry to tempArr.
 Then, value, id, and changedName is added again to tempArr, at the same index.*/
const handleNameChange = (array, id, name) => {
	let selectedCustomRowsValue = { value: 0, index: 0 };
	const tempArray = [];
	array.map((item, index) => {
		if (item.id === id) {
			selectedCustomRowsValue.value = item.value;
			selectedCustomRowsValue.index = index;
		} else {
			tempArray.push(item);
		}
	});
	tempArray.splice(selectedCustomRowsValue.index, 0, {
		name,
		value: selectedCustomRowsValue.value,
		id,
	});
	return tempArray;
};

const handleValueChange = (array, id, value) => {
	let selectedCustomRowsName = { name: 0, index: 0 };
	const tempArray = [];
	array.map((item, index) => {
		if (item.id === id) {
			selectedCustomRowsName.name = item.name;
			selectedCustomRowsName.index = index;
		} else {
			tempArray.push(item);
		}
	});
	tempArray.splice(selectedCustomRowsName.index, 0, {
		name: selectedCustomRowsName.name,
		value,
		id,
	});
	return tempArray;
};

//This is the initial state
const initialState = {
	customRowsArray: [{ name: "", value: "", id: generateId() }],
	tp: 45,
	displayCards: false,
};

const reducer = (state = initialState, action) => {
	const { type, name, value, id } = action;
	switch (type) {
		case "addCustomRow":
			return {
				...state,
				customRowsArray: addCustomRow(state.customRowsArray),
			};

		case "deleteSelectedRow":
			return {
				...state,
				customRowsArray: deleteSelectedRow(state.customRowsArray, id),
			};
		case "handleNameChange":
			return {
				...state,
				customRowsArray: handleNameChange(
					state.customRowsArray,
					id,
					name
				),
			};
		case "handleValueChange":
			return {
				...state,
				customRowsArray: handleValueChange(
					state.customRowsArray,
					id,
					value
				),
			};
		case "toggleDisplayCards":
			return { ...state, displayCards: !state.displayCards };
		case "changeTp":
			return {
				...state,
				tp: generateId(),
			};
		default:
			return state;
	}
};

export default reducer;
