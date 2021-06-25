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