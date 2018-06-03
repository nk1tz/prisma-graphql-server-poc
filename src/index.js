const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')
const resolvers = require('./resolvers')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://us1.prisma.sh/nathaniel-kitzke-3baa17/prisma-demo/dev',
}),

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({ ...req, prisma: db }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))