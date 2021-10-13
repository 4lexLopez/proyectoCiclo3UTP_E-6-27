const express = require('express');
const router = express.Router();

// Importamos modelo Tarea
const User = require('../model/user');

// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post('/user-nuevo', async (req, res) => {

    const body = req.body;
    try {

        const userDB = await User.create(body);
        res.status(200).json(userdb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }


});

router.get('/user/:id', async (req, res) => {
  const _id = req.params.id;
  try {
      const userdb = await User.findOne({
          _id
      });
      res.json(userdb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});

router.get('/user', async (req, res) => {
  try {
      const userdb = await User.find();
      res.json(userdb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});

router.delete('/user/:id', async (req, res) => {
  const _id = req.params.id;
  try {
      const userdb = await User.findByIdAndDelete({
          _id
      });
      if (!userdb) {
          return res.status(400).json({
              mensaje: 'No se encontró el id indicado',
              error
          })
      }
      res.json(userdb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});


// Put actualizar una User
router.put('/user/:id', async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
      const userdb = await User.findByIdAndUpdate(
          _id,
          body, {
              new: true
          });
      res.json(userdb);
  } catch (error) {
      return res.status(400).json({
          mensaje: 'Ocurrio un error',
          error
      })
  }
});
module.exports = router;