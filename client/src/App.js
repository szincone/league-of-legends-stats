import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Matches from './containers/Matches';
import SummonerForm from './containers/SummonerForm';

function App() {
  const [matches, setMatches] = useState([]);
  const [summonerName, setSummonerName] = useState('');

  useEffect(() => {
    updateMatches();
  }, []);

  const updateMatches = async () => {
    try {
      // this is for starting data from the server, just so I could see what I was working w/
      const response = await axios.get(
        'https://league-stats.netlify.com/matches/',
      );
      // console.log('RESPONsE', response);
      setMatches([response.data]);
      setSummonerName('');
    } catch (err) {
      console.log('ERROR =', err);
    }
  };

  const fetchMatches = async (event) => {
    try {
      if (event) {
        event.preventDefault();
        const response = await axios.get(
          `https://league-stats.netlify.com/matches/${summonerName}`,
        );
        console.log('RESPONSE', response.data);
        setMatches([response.data]);
        setSummonerName('');
      }
    } catch (err) {
      console.log('ERROR IS', err);
    }
  };

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setSummonerName(value);
  };

  return (
    <div
      style={{
        margin: '1rem auto',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ' center',
        alignItems: 'center',
      }}
    >
      <h2>{'League Stats'}</h2>
      <Route
        exact
        path="/"
        render={(props) => (
          <SummonerForm
            {...props}
            summonerName={summonerName}
            inputChangeHandler={inputChangeHandler}
            fetchMatches={fetchMatches}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(props) => <Matches {...props} matches={matches} />}
      />
    </div>
  );
}

export default App;
