const {getAllCitiesDB} = require("../services/indianCities.service");

const getAllCities = async (req, res) => {
  try {
    const cities = await getAllCitiesDB();
    res.status(200).json({
        success: true, data : cities
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Failed to fetch cities"
    });
  }
};

module.exports = {getAllCities};