import { useState, useContext, ChangeEvent, FC } from 'react';
import { removeIngredientAction, updateIngredientAction } from '../../ingredients.action';
import { IngredientContext } from '../../ingredients.context';
import { Ingredient as IngredientModel } from '../../ingredients.model';
import styles from './Ingredient.module.scss'
import { RecipeContext } from '../../../recipes/recipes.context';
import { removeIngredientRecipeAction, updateIngredientRecipeAction } from '../../../recipes/recipes.action';

const Ingredient : FC<IngredientModel> = ({id, title, unity}) => 
{
    const [newTitle, setNewTitle] = useState(title)
    const [newUnity, setNewUnity] = useState(unity)

    const { dispatch: ingredientDispatch } = useContext(IngredientContext)
    const { dispatch : recipeDispatch } = useContext(RecipeContext)

    const removeIngredient = () => ingredientDispatch(removeIngredientAction(id))
    const removeRecipeIngredient = () => recipeDispatch(removeIngredientRecipeAction(id))
    
    const updateRecipeIngredient = () => {
        const ingredient : IngredientModel = {
            id, 
            title : newTitle,
            unity : newUnity
        }
        
        recipeDispatch(updateIngredientRecipeAction(ingredient))
    }

    const updateIngredient = () => ingredientDispatch(updateIngredientAction(
    { 
        id, 
        title : newTitle,
        unity : newUnity
    }))

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) : void => setNewTitle(event.target.value)
    const onChangeUnity = (event: ChangeEvent<HTMLInputElement>) : void => setNewUnity(event.target.value)

    return <form className={styles.formContainer}>
        <input 
            placeholder="titre"
            onChange={onChangeTitle}
            value={newTitle}/>

        <input 
            placeholder="unité"
            onChange={onChangeUnity}
            value={newUnity}/>

        <div className={styles.updateButton} onClick={() => {
            updateIngredient();
            updateRecipeIngredient();}}>Mettre à jour</div>
        <div className={styles.removeButton} onClick={() => {
            removeIngredient();
            removeRecipeIngredient();}}></div>
    </form>
};

export default Ingredient;