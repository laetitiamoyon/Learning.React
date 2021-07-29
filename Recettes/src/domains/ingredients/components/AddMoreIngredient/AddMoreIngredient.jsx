import React from 'react';
import styles from './AddMoreIngredient.module.css'

const AddMoreIngredient = () => {

    return <>
        <form className={styles.formContainer}>
            <label className={styles.titleLabel}>Nom de l'ingrédient :</label>
            <input 
                className={styles.ingredientInput}
                name="Nom de l'ingrédient"
                 required/>

            <button className={styles.submitButton}>Ajouter</button>
        </form>
    </>
};

export default AddMoreIngredient;