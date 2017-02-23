import { combineReducers } from "redux";
import BandsReducer from "./reducer_bands";
import SelectedBand from "./reducer_selectedband";

// Define the properties of our Application State here
	const rootReducer = combineReducers({
		bands: BandsReducer,
		selectedBand: SelectedBand
	});

export default rootReducer;