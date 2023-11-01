const mongoose = require("mongoose");

const Image = mongoose.model("Image", {
    name: String,
    data: String,
    format: String
});

module.exports = {
    Image
};