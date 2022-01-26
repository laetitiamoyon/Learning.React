import {useNavigate} from "react-router-dom";
import usePlayer from '../../../../hooks/usePlayer'
import styles from './PlayerInformation.module.css'

const PlayerInformation = () =>
{
    const player = usePlayer()
    const navigate = useNavigate()
    const goBackToHome = () => navigate('/')

    return player === undefined ? null :
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.title}>{player.firstname} {player.lastname}</div>
            <img className={styles.image} src={player.picture} alt={player.picture}/>

            <div><div className={styles.label}>Rang :</div> {player.data.rank}</div>
            <div><div className={styles.label}>Age :</div> {player.data.age} ans</div>
            <div><div className={styles.label}>Taille :</div> {player.data.height}cm</div>
            <div><div className={styles.label}>Poids :</div> {player.data.weight / 1000}kg</div>
            <div><div className={styles.label}>Sex :</div> {player.sex === 'M' ? 'Homme' : 'Femme'}</div>
            <div><div className={styles.label}>Pays d'origine :</div></div>
            <img className={styles.image} src={player.country.picture} alt={player.country.code}/>

            <div><div className={styles.label}>Résultat des derniers matchs :</div> {player.data.last.join(', ')}</div>
            <div><div className={styles.label}>Nombre de points :</div> {player.data.points}</div>
        </div>
        <button className={styles.button} onClick={goBackToHome}>Retourner à la page d'accueil</button>
    </div>
};

export default PlayerInformation;
