import React from 'react';

const Player = props => {
    const { playerInfo } = props;
    return (
        <div className='eachBox'>
            <h2>{playerInfo.name}</h2>
            <h5>Country - {playerInfo.country}</h5>
            <p>Searches: {playerInfo.searches}</p>
        </div>
    );
};

export default Player;
