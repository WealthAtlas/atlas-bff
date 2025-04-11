import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Investment {
    id: ID!
    name: String!
    amount: Float!
    type: String!
    date: String!
  }

  type Query {
    investments: [Investment!]!
    investment(id: ID!): Investment
  }

  type Mutation {
    createInvestment(name: String!, amount: Float!, type: String!): Investment!
    updateInvestment(id: ID!, name: String, amount: Float, type: String): Investment!
    deleteInvestment(id: ID!): Boolean!
  }
`; 