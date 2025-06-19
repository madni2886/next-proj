// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
