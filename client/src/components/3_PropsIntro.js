import React from "react";

class PropsIntro extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h3>Props Intro</h3>
					<p>Components accept inputs called "props" and return React
						elements describing what should appear on the screen.</p>
					<p>Artist: {this.props.name}</p>
					<p>Album: {this.props.title}</p>
					<hr/>
			</div>			
		);
	}
}

export default PropsIntro;