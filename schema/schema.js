import { WordExpressDefinitions, WordExpressDatabase, WordExpressResolvers } from 'wordexpress-schema';
import { makeExecutableSchema } from 'graphql-tools';
import * as settings from '../settings/settings';

// returns WordExpressDatabase object that provides connectors to the database
const Database = new WordExpressDatabase(settings)
const Connectors = Database.connectors

// Resolving functions that use the database connections to resolve GraphQL queries
const Resolvers = WordExpressResolvers(Connectors, settings.publicSettings)

// GraphQL schema definitions
const Definitions = WordExpressDefinitions

const executableSchema = makeExecutableSchema({
  typeDefs: Definitions,
  resolvers: Resolvers
})

export { Connectors, Resolvers, Definitions, executableSchema }