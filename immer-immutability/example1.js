const { produce } = require("immer")

const initialState = {
    houses: {
      gryffindor: {
      	points: 15
    	},
      ravenclaw: {
    		points: 18
    	},
   		hufflepuff: {
    		points: 7
    	},
    	slytherin: {
    		points: 5
    	}
	}
}

const plainJsReducer = (state, action) => {
	// Add 3 points to Ravenclaw,
	// when the name is stored in a variable
	const key = "ravenclaw";
	return {
		...state, // copy state
		houses: {
			...state.houses, // copy houses
			[key]: {  // update one specific house (using Computed Property syntax)
				...state.houses[key],  // copy that specific house's properties
				points: state.houses[key].points + 3   // update its `points` property
			}
		}
	}
}

const plainResult = plainJsReducer(initialState)
console.log("Result of plain:")
console.log(plainResult)

  
const immerifiedReducer = (state, action) => {
	const key = "ravenclaw";

	// produce takes the existing state, and a function
	// It'll call the function with a "draft" version of the state
	return produce(state, draft => {
		// Modify the draft however you want
		draft.houses[key].points += 3;

		// The modified draft will be
		// returned automatically.
		// No need to return anything.
	});
}

const immerResult = immerifiedReducer(initialState)
console.log("Result of immer:")
console.log(immerResult)