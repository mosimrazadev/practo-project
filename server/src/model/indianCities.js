const mongoose = require("mongoose");

const indianCitiesSchema = new mongoose.Schema({
    name: String,
    state: String,
});

module.exports = mongoose.model("IndianCities", indianCitiesSchema);