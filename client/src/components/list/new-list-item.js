import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Link } from "react-router";

class NewItem extends Component {
	handleFormSubmit({ title, category, url, content }) {
		console.log(title, category, url, content);
	}

	render() {
		const { handleSubmit, fields: { title, category, url, content}}=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New Post</h3>

				<fieldset className="form-group">
					<label>Title</label>
					<input {...title} type="text" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
						<label>Category</label>
						<input {...category} type="text" className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>URL</label>
					<input {...url} type="text" className="form-control" />
				</fieldset>	
				<fieldset className="form-group">
					<label>Content</label>
					<textarea {...content} type="text" rows="8" className="form-control text" />
				</fieldset>	
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>	
		);		
	}
	
}

export default reduxForm({
	form: "newitem",
	fields: ["title", "category", "url", "content"]
})(NewItem);

