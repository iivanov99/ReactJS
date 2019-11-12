const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: [true, 'Order name is required!']
  },
  price: {
    type: Schema.Types.Number,
    required: [true, 'Order price is required!']
  },
  status: {
    type: Schema.Types.String,
    enum: ['Pending', 'Approved', 'Declined'],
    required: [true, 'Order status is required!']
  },
  date: {
    type: Schema.Types.Date,
    default: new Date().toLocaleString()
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Creator id is required!']
  }
});

module.exports = mongoose.model('Order', orderSchema);