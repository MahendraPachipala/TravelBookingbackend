import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  departure: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  weekday: {
    type: String,
    required: true,
  },
  airline: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;
