require('dotenv').config({path: __dirname + '/.env'})

const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// connect to mlab database
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@gql-ninja-v7wek.mongodb.net/test?retryWrites=true&w=majority`);
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening for requests on port 4000');
});
