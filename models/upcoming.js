import mongoose from 'mongoose';

export const Upcoming = mongoose.model("Upcoming", { 
    title: String, 
    description: String, 
    reminder: String
});