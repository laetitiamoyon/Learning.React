import React from 'react'
import styles from "./index.module.css"

const Home = () => {
    return <div>
        <h1>Bienvenue à la Centrale </h1>
        <div className={styles.carsContent}>
            <div>Voiture 1 : <a href={'http://localhost:3000/E40012456'}>ici</a></div>
            <div>Voiture 2 : <a href={'http://localhost:3000/F40012456'}>ici</a></div>
            <div>Voiture 3 : <a href={'http://localhost:3000/G40012456'}>ici</a></div>
        </div>
    </div>
};

export default Home;
