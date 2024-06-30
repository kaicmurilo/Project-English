import { Schema } from 'mongoose';

export const ChatSchema = new Schema({
  userMessage: String,
  gptMessage: String,
  correctionAndExplanation: String,
  timestamp: { type: Date, default: Date.now },
});
