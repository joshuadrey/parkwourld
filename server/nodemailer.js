const nodemailer = require('nodemailer');
require('dotenv').config();


const { CLIENT_ID, CLIENT_SECRET, USER_EMAIL, REFRESH_TOKEN } =
    process.env;
// console.log(process.env);

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
        tls: {
            rejectUnauthorized: false
        }
    });

    const message = `Hello! Thanks for subscribing to Parkwourld! You will now begin to recive Updates and Messages about our website! You can unsubscrribe anytime.`;

    const mailOptions = {
        from: USER_EMAIL,
        to: MAIL_TO,
        subject: 'SUBSCRIBED',
        html: `<p>${message}</p>`,
    };

    return transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return (error.toString());
        }
        return ({ success: true });
    });

}


