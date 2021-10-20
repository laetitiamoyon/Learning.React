import React from 'react';
import { FC, ChangeEvent } from 'react';
import SVGPreparationTime from '../../../../SVG/SVGPreparationTime';
import styles from './EditOtherRecipeInformations.module.scss';
import SVGCookingTime from '../../../../SVG/SVGCookingTime';
import SVGCalories from '../../../../SVG/SVGCalories';

interface Props 
{
  newCalories : string | undefined,
  setNewCalories : (newCalories : string | undefined) => void

  newPreparationTime : string | undefined, 
  setNewPreparationTime : (newPreparationTime : string | undefined) => void

  newCookingTime : string | undefined
  setNewCookingTime : (newCookingTime : string | undefined) => void
}

const EditOtherRecipeInformations : FC<Props> = ({ newCalories, setNewCalories, newPreparationTime, setNewPreparationTime, newCookingTime, setNewCookingTime }) => 
{
  const onChangePreparationTime = (event : ChangeEvent<HTMLInputElement>) : void => setNewPreparationTime(event.target.value)

  const onChangeCookingTime = (event : ChangeEvent<HTMLInputElement>) : void => setNewCookingTime(event.target.value)

  const onChangeCalories = (event : ChangeEvent<HTMLInputElement>) : void => setNewCalories(event.target.value)

  return <div className={styles.container}>
    <h1 className={styles.title}>Autres informations</h1>
    <div className={styles.elements}>
      <div className={styles.items}>
        <SVGPreparationTime/>
        <input 
          className={styles.input}
          type="text"
          onChange={onChangePreparationTime}
          value={newPreparationTime}
          placeholder="Temps de préparation"/>
      </div>

      <div className={styles.items}>
        <SVGCookingTime/>
        <input 
          className={styles.input}
          type="text"
          onChange={onChangeCookingTime}
          value={newCookingTime}
          placeholder="Temps de cuisson"/> 
      </div>

      <div className={styles.items}>
        <SVGCalories/>
        <input 
          className={styles.input}
          type="text"
          onChange={onChangeCalories}
          value={newCalories}
          placeholder="Temps de cuisson"/>
      </div>
    </div>
  </div>
};

export default EditOtherRecipeInformations;