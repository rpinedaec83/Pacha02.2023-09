const connection = require("./db");

const getAllActors = async () =>{
    const [query] = await connection.execute('Select * from Actor;');
    return query;
}

const getAllActorsByFilter = async (filter) =>{
    const [query] = await connection.execute(`select * from actor where first_name like '%${filter}%' or last_name like '%${filter}%';`);
    return query;
}

const getActorById = async (id) =>{
    const [query] = await connection.execute('select * from actor where actor_id = ?',[id])
    return query;
}

module.exports = {getAllActors, getActorById, getAllActorsByFilter}