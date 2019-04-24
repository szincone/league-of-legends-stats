import React from 'react';

function SummonerForm(props) {
  return (
    <div>
      <form onSubmit={props.fetchMatches}>
        <input
          onChange={props.inputChangeHandler}
          name="name"
          placeholder="Enter summoners name..."
          value={props.summonerName}
        />
        <button>{'Find Matches'}</button>
      </form>
    </div>
  );
}

export default SummonerForm;
