import { ChangeEvent, FC } from 'react';
import { imageUploading } from '../../../../shared/utils/imageUploading';
import styles from './AddRecipeImage.module.scss';

interface Props
{
  image : (string | undefined),
  setImage : (image : string | undefined) => void
}

const AddRecipeImage : FC<Props> = ({image, setImage}) => 
{
  const uploadImage = (event : ChangeEvent<HTMLInputElement>) =>
    imageUploading(event, setImage)

  return <div className={styles.container}>
      <h1 className={styles.title}>Choisissez l'image de votre recette</h1>
      <label className={styles.label} htmlFor="imageUpload">Télécharger l'image</label>

      <input type="file"
        className={styles.input}
        id="imageUpload"
        accept="image/png, image/jpeg" 
        onChange={uploadImage}/>

      <img className={styles.image} src={image} alt=""/>
      
    </div>
  
};

export default AddRecipeImage;