const express = require('express');
class Server {
    constructor() {
        this.port = 4002;
        
    }
    listen() {
        this.server.listen(this.port, () => {
          console.log(`Server escuchando en el puerto ${this.port}`);
        });
      }
}
module.exports = Server;