import React, { Fragment } from 'react';

const Navbar = () => {
    return (
    <Fragment>            
		<div className="contenedor">
			<nav className="menu">
				<a href="www.google.com" id="btn-acerca-de">Acerca de</a>
				<a href="www.google.com" id="btn-menu">Menú</a>
				<a href="www.google.com" id="btn-galeria">Galería</a>
				<a href="www.google.com" id="btn-ubicacion">ubicación</a>
			</nav>

			<div className="textos">
				<h1 className="nombre">Café <span>Francés</span></h1>
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
			</div>
		</div>
     </Fragment>     
    )
}
export default Navbar;
