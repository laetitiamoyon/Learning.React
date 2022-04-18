import {FC} from 'react';
import {Player as PlayerModel} from "../../player.model";
import styles from './Player.module.css';
import {useRouter} from "next/router";

interface Props
{
    showButton? : boolean
}

const Player : FC<PlayerModel & Props>= (
{
    id,
    firstname,
    lastname,
    picture,
    shortname,
    sex,
    showButton = true
}) =>
{
    const router = useRouter()

    return <div className={styles.card} key={id}>
        <div className={styles.title}>{firstname} {lastname}</div>
        <img className={styles.image} src={picture} alt=""/>
        { showButton && <button className={styles.button} onClick={() => router.push(`/Player/${id}`)}>
            Plus dinformation
        </button> }
    </div>
};

export default Player; Player;