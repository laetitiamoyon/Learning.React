import Cars from "../domains/cars/components/cars/Cars"
import CarDescription from "../domains/cars/components/carDescription/CarDescription"
import CarSlider from "../domains/cars/components/carSlider/CarSlider"

export default function Page({ data : { cars, photos, options, pricing, } }) {
    return <>
        <Cars/>
        <CarSlider photos={photos} pricing={pricing} cars={cars}/>
        <CarDescription
        cars={cars}
        options={options}
        photos={photos}
        pricing={pricing}/>
    </>
}

export async function getServerSideProps(context) {
    const { id : cardId } = context.query;
    const res = await fetch(`http://localhost:3000/api/cars?cardId=${cardId}`)
    const data = await res.json()

    return { props: { data } }
}
