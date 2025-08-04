require("dotenv").config();
const connectDB = require("../config/db");
const indianCities = require("../model/indianCities");
const cities = require("../data/indianCities.json");

const seedCities = async () => {
    try {
        
        await connectDB();
        await indianCities.deleteMany();
        await indianCities.insertMany(cities);
        console.log("Indian Cities seeding!");
        console.log("Cities length:", cities.length);
        process.exit(0);

    } catch (error) {
        console.error("Something went wrong!", error);
        process.exit(1);
    }
}

seedCities();