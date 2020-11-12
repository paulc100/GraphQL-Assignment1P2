import aserver from "apollo-server";

const { gql } = aserver;

export const typeDefs = gql`
  type Note {
    id: ID!
    title: String!
    description: String!
    reminder: String
  }

  type Upcoming {
    id: ID!
    title: String!
    description: String!
    reminder: String
  }

  type Query {
    getAllNotes: [Note]
    createUpcoming: [Note]
    getAllUpcomingNotes: [Upcoming]
    getNoteById(id: ID!): Note
  }

  type Mutation {
    createNote(title: String!, description: String!, reminder: String): Note!
    deleteNote(id: ID!): Note!
    updateNote(id: ID!, reminder: String): Note!
  }
`;




// type Mutation {
//   updateNote(id: String!, title: String!, description: String!) {
//     id
//     title
//     description
//   }
// }