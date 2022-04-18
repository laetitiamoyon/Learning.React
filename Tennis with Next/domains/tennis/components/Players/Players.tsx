import React from 'react';
import usePlayers from "../../hooks/usePlayers";
import {Player as PlayerModel} from "../../player.model";
import Player from "../Player/Player";
import styles from './Players.module.css';

const Players = () => {

    const players = usePlayers()

    return players === undefined ? null :
        <div className={styles.container}>
            { players?.map((player : PlayerModel) => <Player key={player.id} {...player} />) }
        </div>

};

export default Players;