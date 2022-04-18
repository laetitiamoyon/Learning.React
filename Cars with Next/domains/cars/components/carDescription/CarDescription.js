import styles from './CarDescription.module.css'
import groupBy from "../../../../shared/utilities/array/groupBy"

const CarDescription = ({cars, options}) =>
{
    const groupedCategories = groupBy(options.equipmentsOrOptions, option =>  option.categoryLabel)

    return <div className={styles.container}>
        <h2 className={styles.title}>Informations générales</h2>
        <div className={styles.informationContent}>
            <div className={styles.category}>
                <div className={styles.detail}>{cars.vehicle.make} {cars.vehicle.commercialName} {cars.vehicle.version}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Année:</div>
                <div className={styles.detail}>{cars.vehicle.year}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Energie:</div>
                <div className={styles.detail}>{cars.vehicle.energy}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Mise en circulation:</div>
                <div className={styles.detail}>{cars.vehicle.firstCirculationDate}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Couleur extérieure:</div>
                <div className={styles.detail}>{cars.vehicle.externalColor}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Nombre de portes:</div>
                <div className={styles.detail}>{cars.vehicle.seats}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Boîte de vitesse:</div>
                <div className={styles.detail}>{cars.vehicle.gearbox}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Norme Euro:</div>
                <div className={styles.detail}>{cars.vehicle.pollutionNorm}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Kilométrage compteur:</div>
                <div className={styles.detail}>{cars.vehicle.mileage}</div>
            </div>
            <div className={styles.category}>
                <div className={styles.label}>Nombre de propriétaires:</div>
                <div className={styles.detail}>{cars.vehicle.owners}</div>
            </div>
        </div>

        <h2 className={styles.title}>Vendeur professionel</h2>
        <div>
            <div className={styles.sellerName}>{cars.contacts.phone1.note}</div>
        </div>

        <h2 className={styles.title}>{options.equipmentsOrOptions.length} équipements et options</h2>
        <div className={styles.optionContent}>
           { groupedCategories.map(({key, value}) =>
               <div key={key} className={styles.equipementContent}>
                   <h4 className={styles.titleEquipement}>{key}</h4>
                   {value.map(option => <li className={styles.options} key={option.label}> {option.label} </li>)}
               </div> )}
        </div>
    </div>
};

export default CarDescription
