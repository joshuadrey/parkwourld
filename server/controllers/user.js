const bcrypt = require('bcryptjs')

module.exports = {
    registerUser: async (req, res) => {
        const db = req.app.get('db')
        let { userName, password } = req.body

        try {
            const [foundUser] = await db.users.get_user(userName);
            if (foundUser) {
                res.status(401).send('Sorry, Account Already Exists');
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const [newUser] = await db.users.register_user([userName, hash])
                const mailer_result= await mailer(email)
                delete newUser.password

                req.session.user = newUser
                res.status(200).send(req.session.user)
            }
        } catch (err) {
            console.log('Database error on register function', err)
        }
    },


    loginUser: async (req, res) => {
        const db = req.app.get("db");
        const { userName, password } = req.body;
        console.log(req.body);
        try {
            const [foundUser] = await db.users.get_user(userName);
            if (foundUser) {
                const comparePassword = foundUser.password;
                const authenticated = bcrypt.compareSync(password, comparePassword);
                if (authenticated) {
                    delete foundUser.password;
                    req.session.user = foundUser;
                    console.log(req.session.user);
                    res.status(200).send(req.session.user);
                } else {
                    res.status(401).send("Incorrect username or password");
                }
            }
        } catch (err) {
            console.log("database error on login function", err);
        }
    },



    logoutUser: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        res.status(200).send(req.session.user)
    },
}