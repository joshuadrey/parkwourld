const mailer = require('../nodemailer')

module.exports = {
    registerEmail: async (req, res) => {
        const db = req.app.get('db')
        let { email } = req.body

        const mailer_result = await mailer(email)
        console.log('This is email', email, mailer_result)
        res.sendStatus(200)

    }

}