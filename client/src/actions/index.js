// Action Constant Name
const SELECT_BAND = "SELECT_BAND";

// selectBand is an Action Creator, it needs to return an action
// which is an object that must have a type property
export function selectBand(band) {
	console.log("You have selected:", band.name);
	return {
		type: SELECT_BAND,
		payload: band
	};
}


