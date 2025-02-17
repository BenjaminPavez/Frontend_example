import React from 'react'

import fesw1 from '../assets/fesw 1.png'
import imagen1 from '../assets/image 1.png'
import imagen2 from '../assets/image 2.png'
import imagen3 from '../assets/image 3.png'
import imagen5 from '../assets/image 5.png'
import imagen6 from '../assets/image 6.png'
import imagen7 from '../assets/image 7.png'

const Footer = () => {
  	return(
		<div className='footer'>
			<div className='frameParent'>
				<div className='frameGroup'>
					<div className='headerTextParent'>
						<div className='headerText'>
						</div>
						<div className='headerText'>
							<b className='header'>Proyecto Feria SW 2025</b>
						</div>
						<div className='body'>
							<p className='loremIpsumDolor'>
								Aqui va una descripción general del Proyecto, también se puede agregar otras cosas como que este es un proyecto destinado a la Feria de Software 2025 organizada por la Universidad Federico Santa María.
							</p>
						</div>
						<div className='headerTextGroup'>
							<div className='headerText1'>
								<b className='header'>{`Contacto `}</b>
							</div>
							<div className='frameWrapper'>
								<div className='image2Parent'>
									<img className='image2Icon' alt="" src={imagen2} />
									<img className='image2Icon' alt="" src={imagen3} />
									<img className='image7Icon' alt="" src={imagen7} />
									<img className='image7Icon' alt="" src={imagen5} />
									<img className='image6Icon' alt="" src={imagen6} />
								</div>
							</div>
						</div>
					</div>
					
					{/* Sección de Suscripción Mejorada */}
					<div className='footerColumnSubscribe'>
						<div className='masInformacionParent'>
							<b className='masInformacion'>Más Información</b>
							<p className='suscribeteANuestro'>Suscríbete a nuestro newsletter</p>
							<div className='subscribeContainer'>
								<input 
									className='subscribeInput' 
									type="email" 
									placeholder='Ingresa tu correo'
									aria-label="Ingresa tu correo electrónico"
								/>
								<button className='subscribeButton' type="button">Suscribirse</button>
							</div>
						</div>
					</div>
				</div>

				<div className='frameContainer'>
					<div className='fesw1Parent'>
						<img className='fesw1Icon' alt="" src={fesw1} />
						<img className='image1Icon' alt="" src={imagen1} />
					</div>
					<div className='todosLosDerechosReservados'>
						<p className='header'>© 2025 Todos los derechos reservados</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
