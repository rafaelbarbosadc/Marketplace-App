const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Ad = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  purchasedBy: {
    type: String,
    required: false
  }
})
Ad.plugin(mongoosePaginate)
module.exports = mongoose.model('Ad', Ad)
