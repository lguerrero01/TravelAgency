import  express  from 'express';
import router from './routes/index.js';
import db from './config/db.js'

const app = express()
//conectar a base de datos 
db.authenticate()
  .then( () => console.log('base de datos conectada'))
  .catch(error => console.log(error));

//definir puerto
const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//obtener el a;o actual
app.use((req,res,next)=> {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia de viajes';
  return next();
})

//agregar router
app.use('/', router);

app.get('/', (req, res) => {
 
});
//definir la carpeta publica
app.use(express.static("public"));


//agregar body parser para leer datos del formulario 
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
