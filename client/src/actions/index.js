import axios from "axios";
import { browserHistory } from "react-router";
import { 
	AUTH_USER, 
	UNAUTH_USER, 
	AUTH_ERROR, 
	CREATE_POSTS 
} from "./types";

import authReducer from "../reducers/auth_reducer";

// export const CREATE_POSTS = "CREATE_POSTS";

const ROOT_URL = "http://localhost:3000";

// This config variable will be used to get our token from local storage
// and attach it to our header so that we can make an authenticated request.
var config = {
	headers: { authorization: localStorage.getItem("token") }
}

export function signupUser({ email, password }) {
	return function(dispatch) {
		// Submit email/password to the server
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				dispatch({ type: AUTH_USER });
				// Update the token
				localStorage.setItem("token", response.data.token);
				browserHistory.push("/newitem");
			})
				.catch(response => dispatch(authError(response.data.error)));
	}
}

export function signinUser({ email, password }) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				// This only kickstarts if the request was good...
				// We now update the state to indicate authenticated user
				dispatch({ type: AUTH_USER });
				// This will put the token in localStorage. It's safe!!
				localStorage.setItem("token", response.data.token);
				// This sends us off to the /newitem view.
				browserHistory.push("/newitem");
			})
				.catch(response => dispatch(authError("Bad login info")));
	}
}

// purpose of type is to catch unauth_user case
// flips auth flag to false & there won't be any links associated with them
// other thing to do is get rid of token
export function signoutUser() {
	localStorage.removeItem("token");
	return { type: UNAUTH_USER };
}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

// export function createPost(props) {
// 	const request = axios.post(`${ROOT_URL}/posts`, props);
// 	return {
// 		type: CREATE_POSTS,
// 		payload: request
// 	};
// }

export function createPost(props) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/newitem`, { props }, config)
		.then(request => {
			dispatch({
				type: CREATE_POSTS,
				payload: request
			});
		browserHistory.push("/items");	
		});
	}
}