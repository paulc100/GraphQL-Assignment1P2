import mongoose from 'mongoose';

export const Note = mongoose.model("Note", { 
    title: String, 
    description: String, 
    reminder: String
});