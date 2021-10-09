import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';


const app = express()

// Conexion a bases de datos con mongodb

const mongoose = require('mongoose');
// const uri='mongodb+srv://admin:123@cluster0.ajxfn.mongodb.net/Equipo?retryWrites=true&w=majority';
const uri = 'mongodb://localhost:27017/prueba';
const options = {useNewUrlParser: true,  useUnifiedTopology: true};
mongoose.connect(uri, options).then(
 
  () => { console.log('Conectado a DB') },

  err => { console.log(err) }
 );
 


// Middleware
app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

// Rutas
app.use('/api', require('./route/equipo'));


const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));


app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () { 
  console.log('Example app listening on port'+ app.get('puerto')); 
});