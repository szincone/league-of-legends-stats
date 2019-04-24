import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Matches from './containers/Matches';
import SummonerForm from './containers/SummonerForm';

function App() {
  const [matches, setMatches] = useState([]);
  const [summonerName, setSummonerName] = useState('');

  const updateMatches = async () => {
    const response = [{ id: 0, message: 'Hey' }, { id: 1, message: 'Hola' }];
    setMatches(response);
  };

  useEffect(() => {
    updateMatches();
  }, []);

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setSummonerName(value);
  };

  console.log('SUMM NAME', summonerName);

  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => <Matches {...props} matches={matches} />}
      />
      <Route
        exact
        path="/"
        render={(props) => (
          <SummonerForm
            {...props}
            summonerName={summonerName}
            inputChangeHandler={inputChangeHandler}
          />
        )}
      />
    </div>
  );
}

export default App;
