import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  userName: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  profilePicture: { type: String, default: '' },
  isActive: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
  password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
