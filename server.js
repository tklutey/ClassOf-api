const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const config = require('./config/test.json')
const company = require('./routes/company');
const port = 5000;

mongoose.connect(config.DB_URI, function (err) {
    if(err) {
        console.log('Error on connection to DB: ' + err);
    }
    else {
        console.log('Successfully connected to DB');
    }
});

app.route('/company')
    .get(company.getCompany)
    .post(company.postCompany)

app.listen(port, () => {
    console.log('We are live on ' + port);
});