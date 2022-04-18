import styles from './index.module.css'
import Link from 'next/link'

export default function Home() {
  return <div className={styles.container}>
    <h1>Bienvenue à la Centrale </h1>
    <div className={styles.links}>
      <div className={styles.linkContent}>
        Découvrir la voiture 1
        <div className={styles.link}><Link href='/E40012456'>ici</Link></div>
      </div>
      <div className={styles.linkContent}>
        Découvrir la  Voiture 2
        <div className={styles.link}><Link href='/F40012456'>ici</Link></div>
      </div>
      <div className={styles.linkContent}>
        Découvrir la Voiture 3
        <div className={styles.link}><Link href='/G40012456'>ici</Link></div>
      </div>
    </div>
  </div>
}
