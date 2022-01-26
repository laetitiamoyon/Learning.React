import { useMemo, useState } from 'react';
import useAlbums from '../../hooks/useAlbums';
import useToggle from '../../hooks/useToggle';
import Album from '../Album/Album';
import styles from './Albums.module.css'

const Albums = () =>
{
  const albums = useAlbums()

  const [searchTerm, setSearchTerm] = useState("")
  const onSearchTermChange = (event) => setSearchTerm(event.target.value)

  const filteredAlbums = useMemo(() =>
      albums?.filter(album =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase())), [albums, searchTerm])

  const [showAlbumsInline, showAlbumsOnColumn] = useToggle()
  const [showMoreButtonIsVisible, toggleShowMoreButtonVisibility] = useToggle()


  return albums === undefined ? null : <div className={styles.container}>
    <h2 className={styles.title}>Nos albums photos</h2>
    <button className={styles.button} onClick={showAlbumsOnColumn}>{showAlbumsInline ? "Afficher en colonne" : "Afficher en ligne"}</button>
    <input placeholder='Rechercher' className={styles.searchBar} type="text" onChange={onSearchTermChange} />
    
    <div className={`albums ${showAlbumsInline ? "active" : ""}`}>
      {(showMoreButtonIsVisible ? filteredAlbums : filteredAlbums?.slice(42)).map(album => <Album key={album.id} {...album} searchTerm={searchTerm} 
          title={album.title} color="red"/>)}
    </div>
    
    <button className={styles.button} onClick={toggleShowMoreButtonVisibility}>{showMoreButtonIsVisible ? "Voir moins" : "Voir tout"}</button>
  </div>
};


export default Albums;