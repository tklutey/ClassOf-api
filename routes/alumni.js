const Alumni = require('../models/alumni');

function postAlumni(req, res) {
    const {
        firstName,
        lastName,
        classYear,
        contactInfo,
        photoURL,
        education,
        jobs,
        currentLocation,
        homeTown
    } = req.body;

    const newAlumni = new Alumni({
        firstName,
        lastName,
        classYear,
        contactInfo,
        photoURL,
        education,
        jobs,
        currentLocation,
        homeTown
    });

    newAlumni.save(err => {
        if (err) {
            res.json({
                success: false
            });
            console.log('Error saving alumni');
            console.log(err);
        } else {
            res.json({
                success: true,
                company: newAlumni
            });
            console.log('Alumni created');
        }
    })
}

function getAlumni(req, res) {
    Alumni.find({}, function (err, docs) {
        if (err) {
            res.json({
                status: 'error'
            });
            console.log('Error retrieving alumni');
            console.log(err)
        } else {
            res.json(docs);
        }
    })
}

function deleteAllAlumni(req, res) {
    Alumni.deleteOne({}, function (err, docs) {
        if (err) {
            res.json({
                status: 'error'
            });
            console.log('Error deleting alumni');
            console.log(err)
        } else {
            res.json({
                success: true,
            });
            console.log('Alumni deleted');
        }
    })
}

function searchAlumni(req, res) {

}

module.exports = {
    postAlumni,
    getAlumni,
    deleteAllAlumni
};