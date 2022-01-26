import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAlbums from '../../hooks/useAlbums';
import styles from './AlbumInformation.module.css'

const AlbumInformation = () => 
{  
  const {id} = useParams()
  const albums = useAlbums()
  const album = albums?.find(a => a.id === parseInt(id))

  const navigate = useNavigate()
  const goBackToHome = () => navigate('/')

  return album === undefined ? null : <div className={styles.container}>
  <div>{album.title}</div>
  <img className={styles.image} src={album.url} />
  <img className={styles.image} src={album.thumbnailUrl} />
  <button className={styles.button} onClick={goBackToHome}>Retour à la page d'accueil</button>
</div>
};

export default AlbumInformation;