import React from 'react';
import styles from './Home.module.scss'

const Home = () =>
    <div className={styles.homeContainer}>
        <h1 className={styles.title}>Qu’est-ce qu’on mange ce soir ?</h1>
        <p className={styles.descriptionAppli}>L’application qui vous fait gagner du temps ! Chaque semaine, vous avez la possibilité de gérer vos repas en ajouter, supprimant des recettes, 
            tout en mettant à jour les ingrédients relatifs à ces derniers.</p>
    </div>

export default Home;