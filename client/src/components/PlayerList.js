import React from 'react';
import Player from "./Player";

const PlayerList = props => {
    const { apiData } = props;
    return (
        <div>
            {apiData.map(player => {
                return <Player key={player.id} playerInfo={player} />
            })}
        </div>
    );
};

export default PlayerList;
