import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Matches from './containers/Matches';

function App() {
  const [matches, setMatches] = useState([]);

  const updateMatches = async () => {
    const response = [{ id: 0, message: 'Hey' }, { id: 1, message: 'Hola' }];
    setMatches(response);
  };

  useEffect(() => {
    updateMatches();
  }, []);

  return (
    <div>
      <Route
        exact
        path="/"
        render={(props) => <Matches {...props} matches={matches} />}
      />
    </div>
  );
}

export default App;
