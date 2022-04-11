const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`

const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
]

const resolvers = {
  Query: {
    books: () => books,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }: any) => {
  console.log(`🚀  Server ready at ${url}`)
})
