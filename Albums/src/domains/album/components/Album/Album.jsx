import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Highlight } from '../../hooks/Highlight';
import styles from './Album.module.css';

const Album = ({id, title, url, thumbnailUrl, searchTerm, color}) => 
{
  const navigate = useNavigate()

  const onClickToTheDescription = () => navigate(`/albums/${id}`, {id : id})

  return <div className={styles.container} key={id}>
    <Highlight searchTerm={searchTerm} text={title} color={color} />
    <img className={styles.image} src={url} />
    <img className={styles.image} src={thumbnailUrl} />
    <button className={styles.button} onClick={onClickToTheDescription}>Voir plus...</button>
  </div>
};

export default Album;