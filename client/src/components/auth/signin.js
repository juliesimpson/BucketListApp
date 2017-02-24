import React, { Component } from "react";
import { reduxForm } from "redux-form";

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		console.log(email, password);
		// need to do something to log user in
	}
	
	render() {
		const { handleSubmit, fields: { email, password }}=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Email:</label>
					<input {...email} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input {...password} className="form-control" />	
				</fieldset>
				<button action="submit" className="btn btn-primary">Sign in</button>
			</form>		
		);
	}
}

// wrapped with redux-form helper
// inside redux-form helper are the redux field definitions
// 1st set of parens: configuration
// 2nd set of parens: components
export default reduxForm({
	form: "signin",
	fields: ["email", "password"]
})(Signin);