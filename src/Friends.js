import React from 'react';
import { Query } from 'react-apollo'; // Компонент для запроса
import qql from 'graphql-tag'; // Структура для описания запроса

// Колбэк внутри Query
// В Query выводим результаты запроса и потом FreandsQuery передаем в Friends
// Friends выводим в App.js

const FreandsQuery = () => (
  <Query query={qql `
  {
    me {
    name
    bestFriend {
      name
    }
    friends {
      name
      bestFriend {
        name
      }
    }
  }
  }
  `}>
    {({ loading, error, data }) => {
      if(loading) return <p>Loading...</p>;
      if(error) return <p>Error</p>;
      return (
        <div>
        <p>My name is: {data.me.name} </p>
        <p>My best friend is: {data.me.bestFriend.name} </p>
        <p>Meet my other friends</p>
        {data.me.friends.map((friends, index) => (
          <div key={index}>
            <ul>
            <li>{ friends.name } - his best frends: {friends.bestFriend.name}</li>
            </ul>
          </div>
        ))}
        </div>
      );
    }}
  </Query>
)

const Friends = () => (
  <FreandsQuery />
)

export default Friends
