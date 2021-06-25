import express from 'express';
import  {paginaDetalleViajes, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from './../controllers/paginasControllers';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes:id', paginaDetalleViajes);

router.get('/testimoniales',paginaTestimoniales);


export default router;