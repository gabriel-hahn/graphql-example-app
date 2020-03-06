const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

// Dummy data
const books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: 1 },
  { name: 'The Final Empire', genre: 'Fantasy', id: 2 },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: 3 },
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args){
        const id = parseInt(args.id);

        return books.find(book => id === book.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
