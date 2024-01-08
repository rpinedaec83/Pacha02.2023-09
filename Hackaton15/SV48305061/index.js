const passport = require('passport');
const session = require('express-session');
require('dotenv').config()
const express = require('express');
const { join } = require('node:path');
const { Server } = require('socket.io');
const {createMensaje}=require('./src/controllers/controlles')
const app = express();
const server = createServer(app);
const io = new Server(server,{ connectionStateRecovery: {}});
app.use(express.json());
require('./auth');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}
app.get('/', (req, res) => {
  res.send('<br><a href="/auth/google">Authenticate with Google</a> <br><a href="/auth/facebook">Authenticate with Facebook</a>');
});


app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));

app.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/auth/failure'
  }),
  (req, res) => {
    res.redirect('/');
  }
);
app.get('/success',isLoggedIn,(req,res)=>{
  res.sendFile(join(__dirname, './src/public/index.html'));
})
app.get('/auth/failure', (req, res) => {
  res.send('Failed to authenticate..');
});
io.on("connection", (socket) => {
  console.log("usuario conectado");
  socket.on("chat message", (msg) => {
    createMensaje(msg.destino, msg.usuario, msg.mensage);
    console.log(socket);
    io.emit("chat message", msg);
  });
});
const mensajes=require('./src/routes/routes');
app.use('/mensajes',mensajes);


PORT = process.env.portserver;
app.listen(PORT, () => {
  console.log(`servidor conectado ${PORT}`)
})