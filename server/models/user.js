var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {
		type: String,
		unique: true,	// makes sure that user doesn't create another new account    
		lowercase: true	// Mongo doesn't know diff betw uppercase & lowercase; account for user with caps lock on
	},
	password: String
});

// Create model - create new users & load Schema into Mongoose
var model = mongoose.model("user", userSchema);

module.exports = model;