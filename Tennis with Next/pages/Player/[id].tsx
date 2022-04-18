import React from 'react';
import usePlayer from "../../domains/tennis/hooks/usePlayer";
import Player from "../../domains/tennis/components/Player/Player";

const PlayerPage = () => {
    const player = usePlayer()

    return !player ? null : <Player {...player} showButton={false} />
};

export default PlayerPage;