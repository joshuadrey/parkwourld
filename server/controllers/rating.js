module.exports = {
    getRating: async (req, res) => {
        const db = req.app.get('db')
        const { name } = req.body
        const rating = await db.ratings.get_rating(name)

        if (rating) {
            res.status(200).send(rating)
        } else {
            res.status(400).send('No ratings found')
        }
    },

    createRating: async (req, res) => {
        const db = req.app.get('db')
        let { name, rating, comment } = req.body
        let { user_name } = req.session.user;
        let date = new Date()
        const newRating = await db.ratings.create_rating(
            name,
            rating,
            comment,
            date,
            user_name
        )
        if (newRating) {
            res.status(200).send(newRating)
        } else {
            res.status(400).send('Rating not created')
        }
    },

    updateRating: async (req, res) => {
        const db = req.app.get('db')
        let { name, rating, comment } = req.body
        const editRating = await db.ratings.edit_rating(
            name,
            rating,
            comment,
        )
        if (editRating) {
            res.status(200).send(editRating)
        } else {
            res.status(400).send('Rating not updated')
        }
    },

    deleteRating: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.body;

      db.delete_rating(id)
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send("Could Not Delete");
        console.log(err)
      });
    }
}