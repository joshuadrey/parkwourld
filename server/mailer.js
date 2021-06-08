const nodemailer = require('nodemailer');
require('dotenv').config();


const {  CLIENT_ID, CLIENT_SECRET, USER_EMAIL, REFRESH_TOKEN } =
    process.env;
console.log(process.env);

module.exports = (MAIL_TO) => {

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: USER_EMAIL,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
        },
    });

    const message = `hello, this is my test email`;

    const mailOptions = {
        from: USER_EMAIL,
        to: MAIL_TO,
        subject: 'TESTING',
        html: `<p>${message}</p>`,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.send(error.toString());
        }
        return res.send({ success: true });
    });

}


