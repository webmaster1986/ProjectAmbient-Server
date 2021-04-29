const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoordinateSchema = new Schema({
    name: String,
    email: String,
    neighborhood: String,
    city: String,
    country: String,
    latitude: Number,
    longitude: Number,
    videoURL: String,
    isApproved: Boolean
});

module.exports = mongoose.model('Coordinate', CoordinateSchema);