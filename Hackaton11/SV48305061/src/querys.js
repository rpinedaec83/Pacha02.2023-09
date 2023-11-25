const connection=require('./connection');
const getAllEspecies= async ()=>{
    const [query]= await connection.execute('select * from veterinaria.especie');
    return query;
};
module.exports={getAllEspecies};
