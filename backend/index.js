const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const authRouter = require('./routes/auth');
const logoutRouter = require('./routes/logout');

app.use(session({
    secret: 'hello,world',
    resave: false,
    saveUninitialized: false,
    cookie : {
        secure: false,
        maxAge: 28 * 24 * 60 * 60 * 1000
    }
}))

app.use(bodyParser.json());
app.use(loginRouter);
app.use(registerRouter);
app.use(authRouter);
app.use(logoutRouter);

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
});

