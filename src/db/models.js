const mongoose = require('mongoose');

require('dotenv').config();




const doctor_appointment_schema = new mongoose.Schema({
    doctorId: {
        required: true,
        type: Number
    },
    patientId: {
        required: true,
        type: Number
    },
    confRoomName: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data',doctor_appointment_schema, 'doctor_appointment')