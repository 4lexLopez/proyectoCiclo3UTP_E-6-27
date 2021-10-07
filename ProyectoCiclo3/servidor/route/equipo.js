import express  from "express";
const router=express.Router();
import Equipo from "../model/Equipo";

router.post('/equipo-nuevo', async(req, res)=>{

    const body = req.body;
    try {
    
        const equipoDB= await Equipo.create(body);
        res.status(200).json(equipoDB);
        
    } catch (error) {
    
        return res.status(500).json({
    
            mensaje:'Ocurrio un error',
            error
        })
        
    }
    
    
    });

router.get('/equipo/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const equipoDB = await Equipo.findOne({_id});
    res.json(equipoDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

   router.get('/equipo', async(req, res) => {
    try {
    const equipoDB = await Equipo.find();
    res.json(equipoDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });

   router.delete('/equipo/:id', async(req, res) => {
    const _id = req.params.id;
    try {
    const equipoDB = await Equipo.findByIdAndDelete({_id});
    if(!equipoDB){
    return res.status(400).json({
    mensaje: 'No se encontró el id indicado',
    error
    })
    }
    res.json(equipoDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });


   // Put actualizar una equipo
router.put('/equipo/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
    const equipoDB = await Equipo.findByIdAndUpdate(
    _id,
    body,
    {new: true});
    res.json(equipoDB);
    } catch (error) {
    return res.status(400).json({
    mensaje: 'Ocurrio un error',
    error
    })
    }
   });
   

module.exports =router;
