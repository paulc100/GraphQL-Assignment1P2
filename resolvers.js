import { Note } from "./models/notes.js";
import { Upcoming } from "./models/upcoming.js";
import mongoose from "mongoose";

export const resolvers = {
  Query: {
    getAllNotes: () => Note.find(),
    getAllUpcomingNotes: () => Upcoming.find(),
    createUpcoming: () => {
      const notes = Note.find({ reminder: '*/2 * * * *'});

      const newdoc = new Upcoming({ title: "Dog Reminder", reminder: 'Every day'});
      newdoc._id = mongoose.Types.ObjectId();
      newdoc.save();

      return notes
    },
    getNoteById: async (_, { id }) => {
      const note = await Note.findById(id);
      return note;
  }},

  Mutation: {
    createNote: async (_, { title, description, reminder }) => {
      const note = new Note({ title, description, reminder });
      await note.save();
      return note;
    },
    deleteNote: async (_, { id }) => {
      const note = await Note.findByIdAndRemove(id);
        return note;
    },
  },
};

