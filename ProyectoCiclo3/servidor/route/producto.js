import express from "express";
const router = express.Router();
import Producto from "../model/Productos";

router.post('/producto-nuevo', async (req, res) => {

    const body = req.body;
    try {

        const productosDB = await Producto.create(body);
        res.status(200).json(productosDB);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }


});

router.get('/producto/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const productosDB = await Producto.findOne({
            _id
        });
        res.json(productosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

router.get('/producto', async (req, res) => {
    try {
        const productosDB = await Producto.find();
        res.json(productosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

router.delete('/producto/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const productosDB = await Producto.findByIdAndDelete({
            _id
        });
        if (!productosDB) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(productosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Put actualizar una Producto
router.put('/producto/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const productosDB = await Producto.findByIdAndUpdate(
            _id,
            body, {
                new: true
            });
        res.json(productosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


module.exports = router;
