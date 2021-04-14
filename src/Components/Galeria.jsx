import React, { Fragment } from 'react';
import Ubicacion from './Ubicacion';

const Galeria = () => {

    return (
       <Fragment>
           <section className="galeria" id="galeria">
               <br/>
               
			<div className="foto">
				<img src="/img/1.jpg" alt=""/>
			</div>
			<div className="foto">
				<img src="/img/2.jpg" alt=""/>
			</div>
			<div className="foto">
				<img src="/img/3.jpg" alt=""/>
			</div>
			<div className="foto">
				<img src="/img/4.jpg" alt=""/>
			</div>
			<div className="foto">
				<img src="/img/5.jpg" alt=""/>
			</div>
			<div className="foto">
				<img src="/img/6.jpg" alt=""/>
			</div>
			<div className="foto">
				<img src="/img/7.jpg" alt=""/>
			</div>
			<div className="foto">
				<img src="/img/8.jpg" alt=""/>
			</div>
		</section>        
        <Ubicacion/>      
    </Fragment>
    )
}
export default Galeria;
