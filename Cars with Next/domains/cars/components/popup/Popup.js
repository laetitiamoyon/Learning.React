import React from 'react';
import styles from './Popup.module.css'

const Popup = ({onClickButton, phone1}) => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.number} onClick={onClickButton}>le numéro de téléphone : {phone1.value}</div>
        </div>
    </div>
};

export default Popup;
