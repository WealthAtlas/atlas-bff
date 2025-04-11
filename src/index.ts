import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { context } from './graphql/context';
import { config } from './config';

const app = express();
const port = config.port;

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();

    app.use(cors());
    app.use(json());
    app.use('/graphql', expressMiddleware(server, { context }));

    app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
    });
}

startServer().catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
}); 