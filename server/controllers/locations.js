module.exports = {
    createLocation: (req, res) => {
        const db = req.app.get('db')
        let {name, image} = req.body
        const newLocation = await db.review.create_location(
            name,
            image
        ) 
        if (newLocation) {
            res.status(200).send(newLocation)
        } else {
            res.status(400).send('Location not found')
        }
    },
    
}