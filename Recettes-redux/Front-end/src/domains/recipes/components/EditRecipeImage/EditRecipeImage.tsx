import React from 'react';
import { FC, ChangeEvent } from 'react';
import { imageUploading } from '../../../../shared/utils/imageUploading';
import styles from './EditRecipeImage.module.scss';

interface Props
{
  newImage : string | undefined,
  setNewImage : (newImage : string | undefined) => void
}

const EditRecipeImage : FC<Props> = ({newImage, setNewImage}) => 
{
  const onChangeImage = (event: ChangeEvent<HTMLInputElement>) : void =>
    imageUploading(event, setNewImage)

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