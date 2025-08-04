require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const citiesRoutes = require("./src/routes/indianCities.routes")



const app = express();
const port = 5000

connectDB();

// Middlewares
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello Server")
})

app.use("/cities", citiesRoutes);



app.listen(port,  () => {
    console.log(`Server connected successfully at http://localhost:${port}`);
})