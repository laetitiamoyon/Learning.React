import { FC } from 'react';
import styles from './Home.module.scss'

const Home : FC = () => 
  <div className={styles.container}>
    <h1 className={styles.title}>Qu’est-ce qu’on mange ce soir ?</h1>
    <p className={styles.description}>L’application qui vous fait gagner du temps ! 
      Chaque semaine, vous avez la possibilité de gérer vos repas en vous permettant d'ajouter, de modifier
      et de supprimer vos ingrédients et vos recettes.</p>
  </div>

export default Home;