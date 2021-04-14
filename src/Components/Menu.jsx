import React, { Fragment } from 'react';
import Galeria from './Galeria';

 const Menu = () => {
    return (
        <Fragment>
            <section className="menu">
			<div className="contenedor">
				<h3 className="titulo" id="platillos">Menu</h3>
				<div className="contenedor-menu">
					<div className="contenedor-menu2">
						<article>
							<p className="categoria">De Comer</p>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$15</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$10</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$20</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$35</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
						</article>

						<article>
							<p className="categoria">De Tomar</p>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$15</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$15</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$15</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
							<div className="platillo">
								<p className="nombre">Lorem ipsum dolor sit amet</p>
								<p className="precio">$15</p>
								<p className="descripcion">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
							</div>
						</article>
					</div>
				</div>
			</div>
            <Galeria/>
		</section>
        </Fragment>
    )
}
export default Menu;