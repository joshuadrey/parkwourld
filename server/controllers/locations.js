module.exports = {
    createLocation: async (req, res) => {
        const db = req.app.get('db')
        let {name, pay, image} = req.body
        const newLocation = await db.locations.create_location(
            name,
            pay,
            image
        ) 
        if (newLocation) {
            res.status(200).send(newLocation)
        } else {
            res.status(400).send('Location not found')
        }
    },

    getLocations: (req, res) => {
            const db = req.app.get('db')
            db.locations.get_locations().then(locations => {
                res.status(200).send(locations)
            }).catch(err => {
                console.log(err)
                res.status(500).send(err)
            })
        }
    
}