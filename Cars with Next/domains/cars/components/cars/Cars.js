import styles from './Cars.module.css'
import Link from 'next/link'

const Cars = () =>
{
    return <div className={styles.container}>
        <div className={styles.logoContainer}>
            <div className={styles.logo}></div>
            <div className={styles.description}>1er site de véhicules d'occasion</div>
        </div>

        <div className={styles.buttonContainer}>
            <button className={styles.button} >
                <Link href='/'>Retour</Link>
            </button>
            <button className={styles.button}>Précédent</button>
            <button className={styles.button}>Suivant</button>
        </div>
    </div>
};

export default Cars
