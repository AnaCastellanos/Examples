var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var tvshowSchema = new Schema({
	title:   { type: String },
	year:    { type: Number },
	country: { type: String },
	poster:  { type: String },
	seasons: { type: Number },
	genre:   { type: String, enum:
	['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
		},
	sumary: { type: String }
});

module.exports: mongoose.model('TVShow', tvshowSchema);