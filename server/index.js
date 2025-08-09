require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const citiesRoutes = require("./src/routes/indianCities.routes")
const cors = require("cors");
const path = require('path');



const app = express();
const port = process.env.PORT || 5000;

connectDB();

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));


// allow frontend

app.use(cors({
     origin: ["http://localhost:5173", "https://your-frontend-domain.com"],
    credentials: true
}));



app.get("/", (req, res) => {
    res.send("Hello Server")
})

app.use("/cities", citiesRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


app.listen(port,  () => {
    console.log(`Server connected successfully at http://localhost:${port}`);
})