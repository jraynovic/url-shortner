const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./Schema/typeDefs')
const { resolvers } = require('./Schema/resolvers')

async function startApolloServer(typeDefs, resolvers) {
   const express = require('express')
    const app = express()

    const port = 5001


    const server = new ApolloServer({ typeDefs, resolvers })

    await server.start()
    server.applyMiddleware({ app })

    await new Promise(resolve => app.listen(port, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
}
startApolloServer(typeDefs,resolvers)