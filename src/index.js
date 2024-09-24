const express = require('express');
require('dotenv').config();
const routes = require('./routes/routes');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const mongoString = process.env.DATABASE_URL


mongoose.connect(mongoString,  {
    dbName: 'healthcare'
  });
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();


app.use(cors())
app.use(express.json());
app.use('/api', routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

