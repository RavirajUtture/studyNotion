const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL; // Keep this as MONGODB_URL
console.log('MONGODB_URL:', MONGODB_URL);

exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			useNewUrlParser: true, // Fixed capitalization
			useUnifiedTopology: true,
		})
		.then(() => console.log(`DB Connection Success`)) // Added arrow function for correct logging
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
