import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Player as PlayerModel} from "../../player.model";
import useToggle from '../../../../hooks/useToggle'
import styles from './Player.module.css'
import cn from "classnames"

const Player : FC<PlayerModel>= ({id, firstname, lastname, picture, shortname, sex, data}) =>
{
    const navigate = useNavigate()
    const [showMoreButton, showMoreButtonVisible] = useToggle()

    const clickToTheDescription = () => navigate(`/players/${id}`)

    return <div className={styles.card} key={id}>
        <div className={styles.title}>{firstname} {lastname}</div>
        <img className={styles.image} src={picture} alt=""/>
        <div className={cn(
            styles.sex,
            sex === 'M' && styles.male,
            sex === 'F' && styles.female)}>
            {sex === 'M' ? 'Homme' : 'Femme'}
        </div>
        <div className={styles.rank}>Rang {data.rank}</div>
        <button className={styles.button} onClick={clickToTheDescription}>Plus d'information</button>
        <div className={styles.toggleButtonContainer}>
            {/*@ts-ignore*/}
            <button className={styles.toggleButton} onClick={showMoreButtonVisible}>{showMoreButton ? "-" : "+"}</button>
            {showMoreButton && <div className={styles.shortname}>{shortname}</div>}
        </div>

    </div>
};

export default Player;