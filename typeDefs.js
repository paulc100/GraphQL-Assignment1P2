import aserver from "apollo-server";

const { gql } = aserver;

export const typeDefs = gql`
  type Note {
    id: ID!
    title: String!
    description: String!
    image: String
  }

  type Query {
    getAllNotes: [Note]
    getNoteById(id: ID!): Note
  }

  type Mutation {
    createNote(title: String!, description: String!, image: String): Note!
    deleteNote(id: ID!): Note!
    updateNote(id: ID!, image: String): Note!
  }
`;




// type Mutation {
//   updateNote(id: String!, title: String!, description: String!) {
//     id
//     title
//     description
//   }
// }