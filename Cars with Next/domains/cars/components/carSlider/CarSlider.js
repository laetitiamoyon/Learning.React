import React, {useEffect, useState} from 'react'
import styles from './CarSlider.module.css'
import Popup from "../popup/Popup";

const CarSlider = ({photos, pricing, cars}) =>
{
    const [pictures, setPictures] = useState([])
    const [paginatedPictures, setPaginatedPictures] = useState([])
    const [pictureIndex, setPictureIndex] = useState(0)
    const [selectedPictureCategory, setSelectedPictureCategory] = useState('allPictures')
    const goToPreviousPicture = () => {
        if (pictureIndex > 0) setPictureIndex(pictureIndex - 1)
    }

    const goToNextPicture = () => {
        if (pictureIndex < pictures.length -1) setPictureIndex(pictureIndex + 1)
    }

    useEffect(() => {
        setPaginatedPictures(pictures.slice(pictureIndex).slice(0, 7))
    }, [pictureIndex, pictures])

    useEffect(() => {
        if (photos)
        {
            const insidePicture = photos.inside.photos.map(u => u.url_full)
            const outsidePicture = photos.outside.photos.map(u => u.url_full)
            const seatPictures = photos.seats.photos.map(u => u.url_full)
            const allPictures = [...outsidePicture, ...insidePicture, ...seatPictures]

            setPictures(allPictures)
        }
    }, [photos])

    useEffect(() => {
        if (photos)
        {
            const insidePicture = photos.inside.photos.map(u => u.url_full)
            const outsidePicture = photos.outside.photos.map(u => u.url_full)
            const seatPictures = photos.seats.photos.map(u => u.url_full)
            const allPictures = [...outsidePicture, ...insidePicture, ...seatPictures]

            const selectedPictures =
                selectedPictureCategory === 'inside' ? insidePicture :
                    selectedPictureCategory === 'outside' ? outsidePicture :
                        selectedPictureCategory === 'seat' ? seatPictures :
                            allPictures

            setPictureIndex(0)
            setPictures(selectedPictures)
        }
    }, [selectedPictureCategory])

    const [visible, setVisible] = useState(false)
    const onClickButton = () => setVisible(!visible)

    return <div className={styles.container}>
        <div className={styles.sliderContent}>
            <div className={styles.fullPhotosContainer}>
                <div className={styles.leftArrow} onClick={goToPreviousPicture}></div>
            {paginatedPictures.slice(0, 1).map((picture) =>
                <img key={picture} src={picture} className={styles.fullPhotos}/> )}
                <div className={styles.rightArrow} onClick={goToNextPicture}></div>
            </div>

            <div className={styles.tabContent}>
                <div className={styles.tab} onClick={() => setSelectedPictureCategory('outside')}>Exterieur</div>
                <div className={styles.tab} onClick={() => setSelectedPictureCategory('inside')}>Intérieur</div>
                <div className={styles.tab} onClick={() => setSelectedPictureCategory('seat')}>Siège</div>
                <div className={styles.tab} onClick={() => setSelectedPictureCategory('all')}>Toutes les photos</div>
            </div>

            <div className={styles.vignetteContainer}>
                <div className={styles.leftArrowVignette} onClick={goToPreviousPicture}></div>
                {paginatedPictures.slice(1).slice(0, 6).map((vignette) =>
                    <img key={vignette} src={vignette} className={styles.vignettePhotos}/> )}
                <div className={styles.rightArrowVignette} onClick={goToNextPicture}></div>
            </div>
        </div>
        <div className={styles.priceContent}>
            <div className={styles.model}>{cars.vehicle.commercialName}</div>
            <div className={styles.model}>{cars.vehicle.category}</div>
                <div className={styles.currentPrice}>{pricing.variation.prices.initial} €</div>

            <div className={styles.contact}>Contacter le vendeur professionnel</div>
            <div className={styles.contactName}>{cars.contacts.phone1.note}</div>
            <button className={styles.contactSellerButton} onClick={onClickButton}>Contacter le vendeur</button>

            { visible && <Popup onClickButton={onClickButton} phone1={cars.contacts.phone1}/> }
        </div>
    </div>
};

export default CarSlider;
