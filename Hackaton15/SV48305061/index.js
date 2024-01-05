const express = require('express');
require('./src/database/db');
require('dotenv').config()
const passport = require('passport');
require('./auth');
app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));


app.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..');
});
PORT = process.env.portserver;
app.listen(PORT, () => {
  console.log(`servidor conectado ${PORT}`)
})