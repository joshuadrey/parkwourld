module.exports = {
    getRating: async (req, res) => {
        const db = req.app.get('db')
        const {name} = req.body
        const review = await db.ratings.get_rating(name)

        if (review) {
            res.status(200).send(review)
        } else {
            res.status(400).send('No ratings found')
        }
    },

    createRating: async (req, res) => {
        const db = req.app.get('db')
        let {name, rating} = req.body
        let {user_name} = req.session.user;
        let date = new Date()
        const newReview = await db.review.create_rating(
            name,
            rating,
            date,
            user_name 
        ) 
        if (newReview) {
            res.status(200).send(newReview)
        } else {
            res.status(400).send('Rating not created')
        }
    },
}