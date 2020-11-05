import { Note } from "./models/notes.js";
import cloudinary from "cloudinary";

export const resolvers = {
  Query: {
    getAllNotes: () => Note.find(),
    getNoteById: async (_, { id }) => {
      const note = await Note.findById(id);
      return note;
  }},

  Mutation: {
    createNote: async (_, { title, description, image }) => {
      const note = new Note({ title, description, image });
      await note.save();
      if (image !== null) {
        cloudinary.uploader.upload(image, { tags: 'App', public_id: 'app_image' });
      }
      return note;
    },
    deleteNote: async (_, { id }) => {
      const note = await Note.findByIdAndRemove(id);
        return note;
    },
    updateNote: async (_, { id, image }) => { 
      const note = await Note.findByIdAndUpdate(id, { image: image });
      if (image !== null) {
        cloudinary.uploader.upload(image, { tags: 'App', public_id: 'app_image' });
      }
      return note;
    },
  },
};

