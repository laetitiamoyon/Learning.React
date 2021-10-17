import React from 'react';
import { FC, ChangeEvent } from 'react';
import styles from './EditRecipeImage.module.scss';
import { imageUploader } from '../../../../shared/utils/imageUploader';

interface Props
{
  newImage : string | undefined,
  setNewImage : (newImage : string | undefined) => void
}

const EditRecipeImage : FC<Props> = ({newImage, setNewImage}) => 
{
  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) : void =>
    imageUploader(event, setNewImage)

  return <div className={styles.container}>
    <label htmlFor="imageUpload" className={styles.label}>Téléchargez une nouvelle image</label>
    <input className={styles.input} 
        id="imageUpload" 
        type="file"  
        accept="image/png, image/jpeg" 
        onChange={onChangeImage} />

    <img className={styles.image} alt='' src={newImage} style={{ backgroundImage : `url(.${newImage})`}} />
  </div>
};

export default EditRecipeImage;