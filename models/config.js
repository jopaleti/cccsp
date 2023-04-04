const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ConfigSchema = new Schema({
	config: {
		type: Schema.Types.Mixed,
		required: true,
	},
	totalQue: {
		type: Number,
		default: 20,
	},
});

module.exports = mongoose.model("Config", ConfigSchema);
