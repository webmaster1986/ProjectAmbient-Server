const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    patientName: String,
    patientEmail: String,
    covidSurvey: Object
});

module.exports = mongoose.model('Patient', PatientSchema);