import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const client = new ApolloClient({
    uri: 'https://cms.chikupos.com/graphql',
    cache: new InMemoryCache(),
  });