import React, { Component } from "react";
import NavBarHeader from "./nav";
import Video from "./video/video";
import BandList from "../../containers/bandlist";

	export default class App extends Component {
		render() {
			return (
				<div>
					<NavBarHeader />
					<BandList /> 
				</div>	
				);
		}
	}