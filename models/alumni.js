const mongoose = require('mongoose');

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
        type: Schema.Types.ObjectId,
        ref: 'School'
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
        type: Schema.Types.ObjectId,
        ref: 'Company'
      },
      position: String,
      startDate: Date,
      endDate: Date,
      isCurrent: Boolean
    }
  ],
  currentLocation: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  homeTown: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
  contactInfo: {
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  },
})

module.exports = mongoose.model('Alumni', alumniSchema);