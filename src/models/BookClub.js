import mongoose from 'mongoose';

const bookClubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  genre: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  meetingSchedule: {
    type: String,
    required: true
  },
  maxMembers: {
    type: Number,
    required: true
  },
  currentMembers: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const BookClub = mongoose.model('BookClub', bookClubSchema);

export default BookClub; 