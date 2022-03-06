const {gql} = require('apollo-server-express')
const typeDefs = gql`
  type Link {
      url: String!
      slug: String
      id: Int!
  }
  
  # queries
  type Query{
    getOneLink(url:String, id: Int, slug: String) :Link
  }

  # mutations
  type Mutation {
      createLink(url:String!, slug: String) :Link
  }

`
module.exports = {typeDefs}