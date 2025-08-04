const indianCities = require("../model/indianCities");

const getAllCitiesDB = async () => {
    return await indianCities.find().sort({name: 1});
}

module.exports = {getAllCitiesDB};