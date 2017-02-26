var BucketList = require("../models/bucketlist.js");

exports.addBucketList = function(req, res, next) {
	// For Postman use
	var title = req.body.title;
	var category = req.body.category;
	var url = req.body.url;
	var content = req.body.content;
	var specificUser = req.user._id;

	// var title = req.body.props.title;
	// var category = req.body.props.category;
	// var url = req.body.props.url;
	// var content = req.body.props.content;
	// var specificUser = req.user;

	var bucketList = new BucketList({
		title: title,
		category: category,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err) {
		if (err) { return next(err); }
		res.json(bucketList);
	});
}