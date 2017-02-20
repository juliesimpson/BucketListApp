var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt-nodejs");

var userSchema = new Schema({
	email: {
		type: String,
		unique: true,	// makes sure that user doesn't create another new account    
		lowercase: true	// Mongo doesn't know diff betw uppercase & lowercase; account for user with caps lock on
	},
	password: String
});

// Encrypt password after saving
userSchema.pre("save", function(next) {
	var user = this;

	bcrypt.genSalt(10, function(err, salt) {
		if(err) { return next(err); }

		bcrypt.hash(user.password, salt, null, function(err, hash) {
			if(err) { return next(err); }

			user.password = hash;
			next();
		});
	});
});

// Create model - create new users & load Schema into Mongoose
var model = mongoose.model("user", userSchema);

module.exports = model;