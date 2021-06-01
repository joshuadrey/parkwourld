require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { checkUser } = require("./controllers/middleware");
const userCtrl = require("./controllers/user");
const rateCtrl = require("./controllers/rating");
const locCtrl = require("./controllers/locations");
const tricksCtrl = require("./controllers/tricks");

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () =>
      console.log(`Server & db is running ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));

//    ENDPOINTS - USER

app.post('/auth/register', userCtrl.registerUser)
app.post('/auth/login', userCtrl.loginUser)
app.post('/auth/logout', userCtrl.logoutUser)
app.get('/auth/user', checkUser, userCtrl.getUser)

// Endpoint ratings

app.post('/rating/create', rateCtrl.createRating)
app.post('/rating/name', rateCtrl.getRating)

// Endpoint locations

app.get('/location/get', locCtrl.getLocations)
app.post('/location/create', locCtrl.createLocation)

// Endpoint tricks

app.get('/tricks/get', tricksCtrl.getTricks)

