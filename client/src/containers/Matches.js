import React from 'react';

function Matches(props) {
  return (
    <>
      {props.matches.map((match) => (
        <div
          key={match.id}
          style={{
            background: 'red',
            margin: '1rem',
            padding: '1rem',
            width: '80%',
          }}
        >
          {/* start game type div */}
          <div>
            {'game'}
            {'lorem ipsum text'}
          </div>
          {/* start user type div */}
          <div>
            {'user'}
            {'lorem ipsum text'}
          </div>
          {/* start KDA type div */}
          <div>
            {'KDA'}
            {'lorem ipsum text'}
          </div>
          {/* start level type div */}
          <div>
            {'level'}
            {'lorem ipsum text'}
          </div>
          {/* start items type div */}
          <div>
            {'items'}
            {'lorem ipsum text'}
          </div>
          {/* start participants type div */}
          <div>
            {'participarnts'}
            {'lorem ipsum text'}
          </div>
          {/* dropdown button */}
          <button>
            {'button'}
            {'lorem ipsum text'}
          </button>
        </div>
      ))}
    </>
  );
}

export default Matches;
