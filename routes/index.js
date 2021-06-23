import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

router.get('/nosotros', (req, res) => {
    const viajes = 'viajes a Alemania'
    res.render('nosotros',{
        viajes
    });

})

router.get('/inicio', (req, res) => {
    res.render('inicio',{
        
    })
})

router.get('/contacto', (req, res) => {
    res.send('Hello World!')
})

export default router;