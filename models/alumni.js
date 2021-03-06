const mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String, 
    required: true
  }
})

const alumniSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  classYear: {
    type: Number,
    required: true
  },
  photoURL: {
    type: String,
  },
  education: [
    {
      school: {
        type: String,
        required: true
      },
      gradYear: {
        type: Number,
        required: true
      },
      degreeType: String,
      degreeSubject: String,
    }
  ],
  jobs: [
    {
      employer: {
        type: String,
        required: true
      },
      position: String,
      startDate: Date,
      endDate: Date,
      isCurrent: Boolean
    }
  ],
  currentLocation: {
    type: locationSchema,
  },
  homeTown: {
    type: locationSchema,
  },
  contactInfo: {
    phoneNumber: {
      type: String,
    },
    email: {
      type: String,
    }
  },
})

alumniSchema.index({firstName: 'text', lastName: 'text'})
var Alumni = mongoose.model('Alumni', alumniSchema);


module.exports = Alumni;
