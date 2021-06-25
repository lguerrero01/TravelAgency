import express from 'express';
import guardarTestimonial from '../controllers/testimonialController';
import  {paginaDetalleViajes, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes } from './../controllers/paginasControllers';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes:id', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);


export default router;