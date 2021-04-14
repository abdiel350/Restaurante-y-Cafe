import React, { Fragment } from 'react';
import Menu from './Menu';

 const Body = () => {
    return (
        <Fragment>   
     <section className="main">
		<section className="acerca-de" id="acerca-de">
			<div className="contenedor">
				<div className="foto">
					<img src="img/acerca-de.jpg" alt=""/>
				</div>
				<article>
					<h3>Acerca de</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
				
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				</article>
			</div>
		</section>
        <Menu/>
        </section>
     </Fragment>        
    )
}
export default Body;