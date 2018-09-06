const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const alumni = require('./routes/alumni');
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

var DB_URI = process.env.DATABASE_URL;
if (process.env.NODE_ENV == "test") {
    const config = require('./config/test.json')
    DB_URI = config.DB_URI;
}

mongoose.connect(DB_URI, function (err) {
    if (err) {
        console.log('Error on connection to DB: ' + err);
    } else {
        console.log('Successfully connected to DB');
    }
});

app.route('/alumni')
    .get(alumni.getAlumni)
    .post(alumni.postAlumni)
    .delete(alumni.deleteAllAlumni)

app.route('/search')
    .get(alumni.searchAlumni)

app.route

app.listen(port, () => {
    console.log('We are live on ' + port);
});
