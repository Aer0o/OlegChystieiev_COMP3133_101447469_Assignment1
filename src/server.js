const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const connectDB = require("./config/db");
const userTypeDefs = require("./schemas/userSchema");
const employeeTypeDefs = require("./schemas/employeeSchema");
const userResolvers = require("./resolvers/userResolvers");
const employeeResolvers = require("./resolvers/employeeResolvers");

require("dotenv").config();
connectDB();

const app = express();

const server = new ApolloServer({
    typeDefs: [userTypeDefs, employeeTypeDefs],
    resolvers: [userResolvers, employeeResolvers],
    context: ({ req }) => ({ req })
});

server.start().then(() => {
    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    });
});
