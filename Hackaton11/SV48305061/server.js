const  express= require('express');

const app = express();

app.use(express.json());
const PORT = 3030;

app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT}` );
});