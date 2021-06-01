module.exports = {

    getTricks: (req, res) => {
        const db = req.app.get('db')
        db.tricks.get_tricks().then(tricks => {
            res.status(200).send(tricks)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    }

}