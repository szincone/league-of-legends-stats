import React from 'react';

function Matches(props) {
  return (
    <div
      style={{
        background: 'green',
        width: '80%',
      }}
    >
      {props.matches.map((match) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={match.id}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <h5>{'Ranked Solo'}</h5>
            <h5>{'19 minutes ago'}</h5>
            <h5>{'____'}</h5>
            <h5>{'Victory'}</h5>
            <h5>{'32m 17s'}</h5>
          </div>
          {/* start user type div */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {'user_img'}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h5>{'spell1'}</h5>
                <h5>{'spell2'}</h5>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 2px',
                }}
              >
                <h5>{'rune1'}</h5>
                <h5>{'rune2'}</h5>
              </div>
            </div>
            {'champion name'}
          </div>
          {/* start KDA type div */}
          <div>
            <h5>{'Kill/Death/Assist'}</h5>
          </div>
          {/* start level type div */}
          <div>
            <h6>{'champion level'}</h6>
            <h6>{'209 (8.1) creep score'}</h6>
          </div>
          {/* start items type div */}
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              {'map over items here'}
            </div>
          </div>
          {/* start participants type div */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {'map over particpants here'}
            </div>
          </div>
          <button>&#x2193;</button>
        </div>
      ))}
    </div>
  );
}

export default Matches;
