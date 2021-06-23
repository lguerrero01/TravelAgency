import  express  from 'express';
import router from './routes/index.js';

const app = express()
//definir puerto
const port = process.env.PORT || 4000;

//habilitar PUG
app.set('view engine', 'pug');

//agregar router
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//definir la carpeta publica
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
