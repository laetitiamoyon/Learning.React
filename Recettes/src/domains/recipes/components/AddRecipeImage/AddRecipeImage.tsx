import { ChangeEvent, FC } from 'react';
import styles from './AddRecipeImage.module.scss'

interface Props
{
    imageData : string | undefined
    setImageData : (imageData : string | undefined) => void
}
const AddRecipeImage : FC<Props> = ({imageData, setImageData}) =>
{    
    const uploadImage = (event: ChangeEvent<HTMLInputElement>) =>
    {
        if (!event.target.files || !event.target.files[0]) return

        var file = event.target.files[0]
        var reader = new FileReader()

        reader.onload = (event : ProgressEvent<FileReader>) => setImageData(event?.target?.result as string)
        reader.readAsDataURL(file)
    }

    return <div className={styles.container}>
        <div className={styles.title}>Choisissez l'image de votre recette</div>
        <label htmlFor="imageUpload" className={styles.label}>Téléchargez l'image</label>
        
        <input className={styles.input} 
            id="imageUpload" 
            type="file"  
            accept="image/png, image/jpeg" 
            onChange={uploadImage} />

        <img className={styles.image} alt='' src={imageData}/>
    </div>
};

export default AddRecipeImage;