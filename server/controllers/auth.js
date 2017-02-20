var User = require("../models/user");

// Define signup function, add test string, & export it
exports.signup = function(req, res, next) {
	// 1
	var email = req.body.email;
	var password = req.body.password;

	// 2
	User.findOne({ email: email }, function(err, existingUser) {
		if(err) {
			return next(err);
		} // handle search error

		if(existingUser) {
			// return res.status(418).send(err);
			return res.status(418).send("Email is in use");

		} // handles existing users
	
		// 3 if user does not exist when signing up, create user
		var user = new User({
			email: email,
			password: password
		});

		// To save the record to the DB
		user.save(function(err) {
			if(err) { return next(err); }

		// 4 Respond to request indicating the user was created
			res.json({ success: true });
		});	
	});
}