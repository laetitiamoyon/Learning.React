import { ChangeEvent, FC } from 'react';
import { imageUploader } from '../../../../shared/utils/imageUploader';
import styles from './AddRecipeImage.module.scss'

interface Props
{
    image : (string | undefined),
    setImage : (image : string | undefined) => void
}
const AddRecipeImage : FC<Props> = ({image, setImage}) =>
{    
    const uploadImage = (event: ChangeEvent<HTMLInputElement>) : void =>
        imageUploader(event, setImage)

    return <div className={styles.container}>
        <div className={styles.title}>Choisissez l'image de votre recette</div>
        <label htmlFor="imageUpload" className={styles.label}>Téléchargez l'image</label>
        
        <input className={styles.input} 
            id="imageUpload" 
            type="file"  
            accept="image/png, image/jpeg" 
            onChange={uploadImage} />

        <img className={styles.image} alt='' src={image}/>
    </div>
};

export default AddRecipeImage;