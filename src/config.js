// BASIC IMPORTS
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

// VARIABLES
const ABS_PATH = path.resolve(__dirname, "..", ".env");
const valid_formats = ['jpg', 'png', 'jpeg', 'gif', 'mp4'];

// 8====D
require("dotenv").config({
    path: ABS_PATH
});

// MAIN THINGS
const initialize_db = async () => {
    return mongoose.connect(process.env.DATABASE);
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve("src", "uploads"));
    },
    filename: (req, file, callback) => {
        const timestamp = new Date().getTime();
        callback(null, `${timestamp}_${file.originalname}`);
    }
});

module.exports = {
    ABS_PATH,
    initialize_db,
    storage,
    valid_formats
};