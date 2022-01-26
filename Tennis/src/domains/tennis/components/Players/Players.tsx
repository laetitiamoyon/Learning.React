import {ChangeEvent, useMemo, useState} from 'react';
import useBestPlayers from '../../../../hooks/useBestPlayers'
import Player from "../Player/Player";
import {Player as PlayerModel} from "../../player.model";
import styles from './Players.module.css'

const Players = () => {
    const players = useBestPlayers()
    const [searchTerm, setSearchTerm] = useState("")
    const filteredPlayers = useMemo(() =>
        players?.filter((p: PlayerModel) =>
            p.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.lastname.toLowerCase().includes(searchTerm.toLowerCase())), [players, searchTerm])

    const onChangeSearchTerm = (event : ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)

    console.log(players)
    return players === undefined ? null : <div>
        <div className={styles.container}>
            <h1 className={styles.title}>Les joueurs de tennis</h1>
            <input className={styles.searchBar} placeholder="Rechercher" type="text" onChange={onChangeSearchTerm}/>
        </div>
        <div className={styles.cards}>
            {filteredPlayers?.map((player: PlayerModel) => <Player {...player} key={player.id}/>)} </div>
    </div>
};

export default Players;
export default Players;

