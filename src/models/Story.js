// models/Story.js
import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  title: String,
  description: String,
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  tags: [{ type: String }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  attachments: [{ type: String }], // URLs or paths to files
  estimatedTime: Number, // in hours
  spentTime: Number, // in hours
  sprint: { type: mongoose.Schema.Types.ObjectId, ref: 'Sprint' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isArchived: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },
  blockers: [{ type: String }], // descriptions of blockers
  blockersResolved: { type: Boolean, default: false },
  blockerComments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  blockerAttachments: [{ type: String }], // URLs or paths to files related to blockers
  blockerCreatedAt: { type: Date, default: Date.now },
  blockerUpdatedAt: { type: Date, default: Date.now },
  blockerCreatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  blockerUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  blockerStatus: { type: String, enum: ['open', 'in-progress', 'resolved'], default: 'open' },
  blockerPriority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  blockerTags: [{ type: String }],
  blockerCommentsCount: { type: Number, default: 0 },
  blockerAttachmentsCount: { type: Number, default: 0 },
  blockerEstimatedTime: Number, // in hours
  blockerSpentTime: Number, // in hours
  blockerSprint: { type: mongoose.Schema.Types.ObjectId, ref: 'Sprint' },
  blockerCreatedAtByUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  blockerUpdatedAtByUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  blockerIsArchived: { type: Boolean, default: false },
  blockerIsBlocked: { type: Boolean, default: false },
  status: { type: String, enum: ['todo', 'in-progress', 'done'], default: 'todo' },
});

export default mongoose.models.Story || mongoose.model('Story', storySchema);
