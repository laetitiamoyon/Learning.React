import React from 'react'
import { useHistory } from "react-router-dom";

const Recipe = ({id, title}) =>
{
    const history = useHistory();

    const onClick = () => history.push(`/description-de-la-recette/${id}`, { id : id })

    return <div className={styles.recipeElement}>
        <div className={styles.recipeTitle}>{title}</div>
        <div className={styles.recipeButton} onClick={onClick}>Voir la recette</div>
    </div>
}

export default Recipe