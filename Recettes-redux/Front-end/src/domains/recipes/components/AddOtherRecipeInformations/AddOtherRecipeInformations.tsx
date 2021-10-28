import styles from './AddOtherRecipeInformations.module.scss';
import { ChangeEvent, FC } from 'react';
import SVGPreparationTime from '../../../../SVG/SVGPreparationTime';
import SVGCookingTime from '../../../../SVG/SVGCookingTime';
import SVGCalories from '../../../../SVG/SVGCalories';

interface Props 
{
  calories : string,
  setCalories : (calories : string) => void

  preparationTime : string, 
  setpreparationTime : (preparationTime : string) => void

  cookingTime : string
  setCookingTime : (cookingTime : string) => void
}

const AddOtherRecipeInformations : FC<Props> = ({ calories, setCalories, preparationTime, setpreparationTime, cookingTime, setCookingTime }) => 
{
  const onChangePreparationTime = (event : ChangeEvent<HTMLInputElement>) : void => 
    setpreparationTime(event.target.value)

  const onChangeCookingTime = (event : ChangeEvent<HTMLInputElement>) : void => 
    setCookingTime(event.target.value)

  const onChangeCalories = (event : ChangeEvent<HTMLInputElement>) : void => 
    setCalories(event.target.value)

  return <div className={styles.container}>
    <h1 className={styles.title}>Autres informations</h1>
    <div className={styles.elements}>
      <SVGPreparationTime/>
      <input 
        className={styles.input}
        type="text"
        onChange={onChangePreparationTime}
        value={preparationTime}
        placeholder="Temps de préparation"/>

      <SVGCookingTime/>
      <input 
        className={styles.input}
        type="text"
        onChange={onChangeCookingTime}
        value={cookingTime}
        placeholder="Temps de cuisson"/> 

      <SVGCalories/>
      <input 
        className={styles.input}
        type="text"
        onChange={onChangeCalories}
        value={calories}
        placeholder="Temps de cuisson"/>
    </div>
  </div>
};

export default AddOtherRecipeInformations;