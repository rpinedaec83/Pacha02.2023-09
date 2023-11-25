const  express= require('express');
const veterinaria=require('./routes/veterinaria')

const app = express();

app.use(express.json());

const PORT = 4040;

app.use('/especie',veterinaria);

app.listen(PORT,()=>{
    console.log(`Servidor listo en el puerto ${PORT}` );
});

