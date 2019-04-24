import React from 'react';

function Matches(props) {
  return (
    <>
      {props.matches.map((match) => (
        <div key={match.id}>
          <h2>{match.message}</h2>
        </div>
      ))}
    </>
  );
}

export default Matches;
