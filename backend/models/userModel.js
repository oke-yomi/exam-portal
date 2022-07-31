import { Schema, model } from 'mongoose';

const UserSchema = Schema({
  uid: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
  },
  name: {
    type: String,
    lowercase: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model('user', UserSchema);