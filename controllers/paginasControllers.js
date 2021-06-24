import { Viaje } from "../Models/viaje";

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
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

const paginaTestimoniales = (req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}

export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
};