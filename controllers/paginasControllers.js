import { Testimonial } from "../Models/testimoniales";
import { Viaje } from './../Models/viaje';

const paginaInicio = async (req, res) => {
    //consultar 3 viajes del modelo de viaje
    const promiseDB = [];
    promiseDB.push( Viaje.findAll({limit: 3}));
    promiseDB.push( Testimonial.findAll({limit: 3}));
    
    try {
        const resultado = await Promise.all( promiseDB );
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home', 
            viajes : resultado[0],
            testimoniales: resultado[1],
        });
    } catch (error) {
        console.log(error);
    }
   
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    //consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales', 
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
}

//muestra viaje por id
const paginaDetalleViajes = async (req, res) => {
    const {id} = req.params;

    try {
        const viaje = await id.findOne({where : { slug: id }});
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        });
    } catch (error) {
        console.log(error)
    }
   
}

export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViajes
};