const doctor_appointment_model = require('./models')


const getAllAppointment = async function () {
    const dbRecord = await doctor_appointment_model.find();
    return dbRecord;
}

const saveAppointment = async function (doctorId, patientId) {
    const confRoomName = Date.now();
    const data = new doctor_appointment_model({
        doctorId: doctorId,
        patientId: patientId,
        confRoomName: confRoomName
    });
    try {
        return await data.save();
    } catch(error) {
        console.log(error)
    }
    return 'Successfull'

}

module.exports = { getAllAppointment, saveAppointment};