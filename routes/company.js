const Company = require('../models/company');

function postCompany(req, res) {
    const name = req.body.name;
    console.log('companyName: ' + name)
    const newCompany = new Company({
        name
    });
    newCompany.save(err => {
        if (err) {
            res.json({
                success: false
            });
            console.log('Error saving post');
            console.log(err);
        } else {
            res.json({
                success: true,
                company: newCompany
            });
            console.log('company created');
        }
    })
}

function getCompany(req, res) {
    Company.find({}, function(err, docs) {
        if (err) {
            res.json({
                status : error
            });
            console.log('Error retrieving companies');
            console.log(err)
        }
        else {
            res.json(docs);
        }
    })
}

module.exports = { getCompany, postCompany };