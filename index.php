<!doctype html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
	<title>Camisetas QR</title>

	<link rel="shortcut icon" type="image/x-icon" href="./images/favicon.ico">
	<link rel="stylesheet" href="css/estilos.css">
</head>
<body>
	<header>
		<div id="contenedor-header">
			<a href="index.php" id="logotipo">
				<img src="./images/animacion.gif" alt="Camisetas QR">	
			</a><nav>
				<ul>
					<li><a href="#slider" id="nav-inicio" class="scrollable"></a></li>
					<li><a href="#instrucciones" id="nav-instrucciones" class="scrollable"></a></li>
					<li><a href="#usos" id="nav-usos" class="scrollable"></a></li>
					<li><a href="#tienda" id="nav-tienda" class="scrollable"></a></li>
					<li><a href="#contacto" id="nav-contacto" class="scrollable"></a></li>
				</ul>
			</nav>
			<section id="usuario">
				<article id="usuario-social">
					<ul>
						<li><a href="#" class="boton-social boton-facebook" target="_blank"></a></li>
						<li><a href="#" class="boton-social boton-twitter" target="_blank"></a></li>
						<li><a href="#" class="boton-social boton-youtube" target="_blank"></a></li>
					</ul>	
				</article>
				<article id="usuario-login">
					<a href="login.php">ACCESO USUARIO</a>
				</article>
			</section>
		</div>
	</header>
	<div id="separacion-header"></div>
	<section id="slider-principal">
		<article id="slider-principal-contenedor-imagenes">
			<a href="#" id="slider-principal-prev" class="slider-nav"></a>
			<a href="#" id="slider-principal-post" class="slider-nav"></a>
			<ul>
				<li class="slider-principal-seleccionado"><img src="./images/slider-principal/slider-principal-1.jpg"></li>
				<li><img src="./images/slider-principal/slider-principal-2.jpg"></li>
				<li><img src="./images/slider-principal/slider-principal-3.jpg"></li>
			</ul>
		</article>
		<article id="slider-principal-contenedor-botones">
			<a href="#" class="slider-principal-boton slider-principal-boton-seleccionado"></a>
			<a href="#" class="slider-principal-boton"></a>
			<a href="#" class="slider-principal-boton"></a>
		</article>
	</section>
	<section id="instrucciones">
		<div id="instrucciones-titulo"></div>
		<article id="instrucciones-elije" class="instrucciones-opcion modalable">
			<a href="#"></a>
			<div class="modal-contenido">
				<div id="modal-elije">
					<a class="modal-cerrar"></a>
					<div id="modal-elije-info">
						<div id="modal-elije-camiseta"></div>
						<p id="modal-elije-frase1" class="modal-frase"><span class="modal-mayuscula">E</span>scoge entre uno de nuestros <span id="modal-elije-resaltado1" class="modal-resaltado">fantásticos diseños</span></p>
						<p id="modal-elije-frase2" class="modal-frase">para lucir en tu camiseta.</p>
						<p id="modal-elije-frase3" class="modal-frase"><span class="modal-mayuscula">O</span> mandanos tu propio</p>					
						<p id="modal-elije-frase4" class="modal-frase"><span id="modal-elije-resaltado2" class="modal-resaltado">diseño personalizado.</span></p>
					</div>
					<ul id="modal-elije-lista-disenyos">
						<li>
							<a href="#" class="slider-boton-desplazamiento slider-boton-desplazamiento-izquierda"></a>
						</li><li>
							<a href="#" class="modal-elije-disenyo">
								<img src="./images/camisetas/camiseta1.png" alt="diseño de mantequilla fc">
							</a>
						</li><li>
							<a href="#" class="modal-elije-disenyo">
								<img src="./images/camisetas/camiseta2.png" alt="diseño kamasutra">
							</a>
						</li><li>
							<a href="#" class="modal-elije-disenyo">
								<img src="./images/camisetas/camiseta3.png" alt="diseño ska">
							</a>
						</li><li>
							<a href="#" class="modal-elije-disenyo">
								<img src="./images/camisetas/camiseta4.png" alt="diseño basico azul">
							</a>
						</li><li>
							<a href="#" class="slider-boton-desplazamiento slider-boton-desplazamiento-derecha"></a>
						</li>
					</ul>
					<ul class="camisetas-seleccionadas">
						<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta1.png" alt="diseño de mantequilla fc"></li>
						<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta2.png" alt="diseño kamasutra"></li>
						<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta3.png" alt="diseño ska"></li>
						<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta4.png" alt="diseño basico azul"></li>
						<li><img src="./images/camisetas/camiseta5.png" alt="diseño homer"></li>
					</ul>
					<div id="modal-elije-enlace-tienda">
						<a href="tienda.php"></a>
					</div>
				</div>
			</div>
		</article>
		<article id="instrucciones-personaliza" class="instrucciones-opcion modalable">
			<a href="#"></a>
		</article>
		<article id="instrucciones-escanea" class="instrucciones-opcion modalable">
			<a href="#"></a>
			<div class="modal-contenido">
				<div id="modal-escanea">
					<a class="modal-cerrar"></a>
					<div id="modal-escanea-info">
						<p id="modal-escanea-frase1" class="modal-frase"><span class="modal-mayuscula">D</span>esvela tu camiseta qr <span id="modal-escanea-resaltado1" class="modal-resaltado">escaneando</span></p>
						<p id="modal-escanea-frase2" class="modal-frase">el código que aparece en ella.</p>
						<p id="modal-escanea-frase3" class="modal-frase"><span class="modal-mayuscula">D</span>escarga el <span id="modal-escanea-resaltado2" class="modal-resaltado">programa gratuito</span> aquí: <a href="" target="_blank" class="boton-app-ios boton-modal-escanea-app"></a><a href="" target="_blank" class="boton-app-android boton-modal-escanea-app"></a></p>					
					</div>
					<div id="modal-escanea-ejemplo">
						<p>Escanea tu camiseta por primera vez para activarla.</p>
					</div>
				</div>
			</div>
		</article>
	</section>
	<section id="usos">
		<div id="usos-titulo"></div>
		<article id="usos-particular" class="usos-opcion modalable">
			<a href="#">
				<span id="usos-particular-titulo" class="usos-subtitulo"></span>
				<span id="usos-particular-contenido" class="usos-contenido"></span>
			</a>
		</article>					
		<article id="usos-empresas" class="usos-opcion modalable">
			<a href="#">
				<span id="usos-empresas-titulo" class="usos-subtitulo"></span>
				<span id="usos-empresas-contenido" class="usos-contenido"></span>
			</a>
		</article>						
	</section>
	<section id="tienda">
		<div id="tienda-titulo">
			<div id="tienda-titulo-texto"></div>
			<div id="tienda-titulo-icono"></div>						
		</div>
		<ul id="tienda-slider">
			<li>
				<a href="#" class="slider-boton-desplazamiento slider-boton-desplazamiento-izquierda"></a>
			</li><li>
				<a href="#" class="tienda-slider-producto">
					<img src="./images/camisetas/camiseta1.png" alt="diseño de mantequilla fc">
				</a>
			</li><li>
				<a href="#" class="tienda-slider-producto">
					<img src="./images/camisetas/camiseta2.png" alt="diseño kamasutra">
				</a>
			</li><li>
				<a href="#" class="tienda-slider-producto">
					<img src="./images/camisetas/camiseta3.png" alt="diseño ska">
				</a>
			</li><li>
				<a href="#" class="tienda-slider-producto">
					<img src="./images/camisetas/camiseta4.png" alt="diseño basico azul">
				</a>
			</li><li>
				<a href="#" class="slider-boton-desplazamiento slider-boton-desplazamiento-derecha"></a>
			</li><li id="tienda-slider-mas">
				<a href="#">...VER MÁS</a>
			</li>
		</ul>
		<ul class="camisetas-seleccionadas">
			<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta1.png" alt="diseño de mantequilla fc"></li>
			<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta2.png" alt="diseño kamasutra"></li>
			<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta3.png" alt="diseño ska"></li>
			<li class="camiseta-seleccionada-visible"><img src="./images/camisetas/camiseta4.png" alt="diseño basico azul"></li>
			<li><img src="./images/camisetas/camiseta5.png" alt="diseño homer"></li>
		</ul>
		<article id="tienda-compromisos">
			<div id="tienda-compromisos-gratis">
				<h4>Envío gratis con 3 o más artículos.</h4>
				<p><span id="tienda-compromisos-gratis-icono"></span>Da igual lo que compres: con solo 3 artículos en tu pedido, envío gratis.</p>
			</div>
			<div id="tienda-compromisos-rapido">
				<h4>Tu pedido en casa en 48h.</h4>
				<p><span id="tienda-compromisos-rapido-icono"></span>Recíbelo en tan solo 48h con nuestro modo prioritario.</p><p>* solo península.</p>
			</div>
			<div id="tienda-compromisos-calidad">
				<h4>Relación calidad precio.</h4>
				<p><span id="tienda-compromisos-calidad-icono"></span>Trabajamos con las mejores marcas y la máxima profesionalidad.</p>
			</div>
		</article>
	</section>
	<section id="contacto">
		<div id="contacto-titulo"></div><div id="contacto-contenido">
			<p id="contacto-texto">¿Necesitas que te resolvamos una duda? ¿Tienes alguna sugerencia? ¿Deseas proponernos algo? Cualquier cosa que tengas en mente, háznosla saber. Estaremos encantados de tener noticias tuyas.</p>
			<form id="contacto-formulario" action="#">
				<div><label for="contacto-formulario-nombre">Nombre*</label><input type="text" id="contacto-formulario-nombre" name="contacto-formulario-nombre"/></div>
				<div><label for="contacto-formulario-mail">Email*</label><input type="text" id="contacto-formulario-mail" name="contacto-formulario-mail"/></div>
				<div><label for="contacto-formulario-tel">Tel</label><input type="text" id="contacto-formulario-tel" name="contacto-formulario-tel"/></div>
				<div><label for="contacto-formulario-mensaje">Mensaje*</label><textarea name="contacto-formulario-mensaje" id="contacto-formulario-mensaje"></textarea></div>
				<span>(*) campo requerido</span><input type="submit" value="enviar">
			</form>
			<div id="contacto-info">
				<p>
					<a href="http://www.camisetasqr.com">www.camisetasqr.com</a>
					<a href="mailto:camisetasqr@info.com">camisetasqr@info.com</a>
				</p>
			</div>
		</div>
	</section>
	<div id="modal">
		<div id="mask"></div>
		<div id="mask-ventana"></div>
	</div>
	<footer>
		<div id="footer-social">
			<span id="footer-social-icono"></span>
			<p id="footer-social-texto">SÍGUENOS Y ENTÉRATE DE TODAS LAS NOVEDADES, OFERTAS Y SORTEOS QUE REALIZAMOS. <a href="#" class="boton-social boton-facebook" target="_blank"></a><a href="#" class="boton-social boton-twitter" target="_blank"></a><a href="#" class="boton-social boton-youtube" target="_blank"></a></p>
			<section id="footer-enlaces">
				<article>
					<h5>Información útil</h5>
					<a href="#">Gastos de Envío</a>
					<a href="#">Tiempo de entrega</a>
					<a href="#">Garantía de Devolución</a>
					<a href="#">Calidad de los Artículos</a>
				</article>
				<article>
					<h5>Ayuda</h5>
					<a href="#">Contacto</a>
					<a href="#">Estado del Pedido</a>
					<a href="#">FAQ</a>
					<a href="#">Sobre Nosotros</a>
				</article>
				<article>
					<h5>Productos</h5>
					<a href="#">Camisetas QR</a>
					<a href="#">Particulares</a>
					<a href="#">Empresas</a>
					<a href="#">Promociones</a>
				</article>
				<article>
					<h5>Sobre camisetas QR</h5>
					<a href="#">Contacto</a>
					<a href="#">Estado del Pedido</a>
					<a href="#">FAQ</a>
					<a href="#">Sobre Nosotros</a>
				</article>
			</section>
			<p id="footer-enlaces-secundarios">
				2014 <span>&copy;</span> camisetasqr.com. Todos los derechos reservados. | <a href="#">Política de privacidad</a> | <a href="#">Propiedad intelectual</a> | <a href="#">Condiciones generales de uso</a>
			</p>
		</div>
	</footer>
	<script src="./js/jquery-1.9.1.js"></script>
	<script src="./js/scripts.js"></script>
</body>
</html>