import React, { Fragment } from 'react';

 const Ubicacion = () => {
    return (
      <Fragment>
          <section className="ubicacion" id="ubicacion">
			<div className="contenedor">
				<h3 className="titulo">Ubicacion</h3>
				<div className="direccion">
					<p className="calle">Av. Javier Prado Este 5685<br/>La Molina 15023, Perú</p><br/>
					<p className="telefono">(xxx) 111-1111</p>
					<p className="correo">correo@tucorreo.com</p>
				</div>

				<div className="horarios">
					<h4>Horarios</h4>
					<p className="entre-semana">Lunes a Viernes <br/> 8:00am - 8:00pm</p>
					<p className="fin-semana">Sabados y Domingos <br/> 11:00am - 8:00pm</p>
				</div>
			</div>
		</section>

        <section className="mapa">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31211.462421014458!2d-76.9586609823387!3d-12.082495352375554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6f9939e940b%3A0x3650a8271094c6cc!2zQ2Fmw6kgRnJhbmPDqXM!5e0!3m2!1ses-419!2smx!4v1618311540826!5m2!1ses-419!2smx" width="600" height="450"  allowfullscreen="" loading="lazy" title="Ubicacion"/>
		</section>  
        <br/>             
      </Fragment>      
    )
}
export default Ubicacion;
