import React from 'react';
import ApolloClient from 'apollo-boost'; // Клиент
import { ApolloProvider } from 'react-apollo'; // Провайдер
import Friends from './Friends';

const client = new ApolloClient({
  uri: 'https://954z0pwrr.lp.gql.zone/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <Friends />
  </ApolloProvider>
)

export default App;
