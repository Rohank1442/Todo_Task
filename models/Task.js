const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  taskId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  categories: { type: [String], default: [] },
  dueDate: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);