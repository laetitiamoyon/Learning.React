import parsedCars from '../../public/cars.json'

export default function handler(req, res) {
    const cardId = req.query.cardId

    const allCars = parsedCars.cars
    const cars = parsedCars.cars.find(car => car.id === cardId)
    const photos = parsedCars.photos.find(car => car.id === cardId)
    const pricing = parsedCars.pricing.find(car => car.id === cardId)
    const options = parsedCars.options.find(car => car.id === cardId)

    res.status(200).json({
        allCars,
        cars,
        photos,
        pricing,
        options
    })
}
