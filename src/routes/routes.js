const express = require('express');
const  {getAllAppointment, saveAppointment} = require('../db/db_operation');


const router = express.Router()

router.get('/getAllAppointment', async (req, res) => {
    console.log('I AM HERE');
    const data = await getAllAppointment();
    console.log('PANKAJ ', data)
    res.send(data);
})

router.post('/saveAppointment', async(req, res) => {
    console.log('SONA SONA ', req.body);
    const response = await saveAppointment(req.body.doctorId, req.body.patientId);
    res.send(response);
})

module.exports = router;