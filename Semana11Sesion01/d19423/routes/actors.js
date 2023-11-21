const {Router} = require("express");
const querys = require("../querys");

const router = Router();

router.get('/', async(req, res)=>{
    const filter = req.query;
    console.log(filter);
    if(!filter.filter){
        const query = await querys.getAllActors();
        return res.status(200).json(query);
    }
    else{
        const query = await querys.getAllActorsByFilter(filter.filter);
        return res.status(200).json(query);
    }
    
})

router.get('/:id', async(req, res)=>{
    const {id} = req.params;
    const query = await querys.getActorById(id);
    if(query.length === 0){
       return res.status(400).json({nessage:'No se encuentra el actor'});
    }
    return res.status(200).json(query);
})

module.exports = router;
