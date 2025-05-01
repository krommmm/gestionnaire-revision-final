require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const routeLesson = require("./routes/route_lesson");

app.use(cors({
    origin: `http://127.0.0.1:5500`,
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
}));

app.use(express.json());

app.use("/api/lessons", routeLesson);

module.exports = app;