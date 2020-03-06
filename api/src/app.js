require('dotenv').config({path: __dirname + '/.env'})

const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// connect to mlab database
mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@gql-ninja-shard-00-00-v7wek.mongodb.net:27017,gql-ninja-shard-00-01-v7wek.mongodb.net:27017,gql-ninja-shard-00-02-v7wek.mongodb.net:27017/test?ssl=true&replicaSet=gql-ninja-shard-0&authSource=admin&retryWrites=true&w=majority`);
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
