import React from 'react';

function SummonerForm(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.inputChangeHandler}
          name="name"
          placeholder="Enter summoners name..."
          value={props.summonerName}
        />
      </form>
    </div>
  );
}

export default SummonerForm;
