const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const config = require('./config/test.json')
const company = require('./routes/company');
const alumni = require('./routes/alumni');
const port = process.env.PORT || 5000;
const DB_URI = config.DB_URI || process.env.DATABASE_URL;

mongoose.connect(DB_URI, function (err) {
    if (err) {
        console.log('Error on connection to DB: ' + err);
    } else {
        console.log('Successfully connected to DB');
    }
});

app.route('/company')
    .get(company.getCompany)
    .post(company.postCompany)

app.route('/alumni')
    .get(alumni.getAlumni)
    .post(alumni.postAlumni)
    .delete(alumni.deleteAllAlumni)

app.route

app.listen(port, () => {
    console.log('We are live on ' + port);
});
