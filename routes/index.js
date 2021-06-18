import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

router.get('/nosotros', (req, res) => {
res.render('nosotros');
})

router.get('/contacto', (req, res) => {
res.send('Hello World!')
})
export default router;