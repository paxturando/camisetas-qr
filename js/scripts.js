const pausa_slider = 3000;
const velocidad_slider = 500;

var timeout_slider_principal;
var flag1_slider_principal;
var flag2_slider_principal;
var flags_slider_generico;

$(document).ready(function() {
	inicializacion();

	$(window).on('scroll',detectar_scroll);
	$('#mask').on('click',modal_cerrar);
	$('#slider-principal-post').on('click',slider_principal_post);
	$('#slider-principal-prev').on('click',slider_principal_prev);
	$('.modalable').on('click',modal_mostrar);
	$('.scrollable').on('click',animacion_scroll);
	$('.slider-boton-desplazamiento-derecha').on('click',slider_generico_post);
	$('.slider-boton-desplazamiento-izquierda').on('click',slider_generico_prev);
	$('.slider-principal-boton').on('click',slider_principal_boton);

	timeout_slider_principal = setTimeout(slider_principal_post,pausa_slider);
});
function animacion_scroll(event) {
    $('html,body').animate({
        scrollTop: $($(event.currentTarget).attr('href')).offset().top - 108
    }, 500, "swing");
	event.preventDefault();
}
function detectar_scroll(event) {
	if ($(event.currentTarget).scrollTop() < 162 )
	{
		if ($('#logotipo').hasClass('logotipo-fixed'))
		{
			$('#usuario').show();
			$('#logotipo').removeClass('logotipo-fixed').children('img').stop().hide().attr('src','./images/animacion.gif').css({'top':'18px','opacity':'0'}).show().animate({'opacity':'1'},500);
			$('#separacion-header').css({'height':'0px'});
			$('header').css({'position':'relative'});
		}
	}
	else
	{
		if (!$('#logotipo').hasClass('logotipo-fixed')) 
		{
			$('#usuario').hide();
			$('#logotipo').addClass('logotipo-fixed').children('img').stop().hide().attr('src','./images/animacion-mini.gif').css({'top':'-127px'}).show().animate({'top':'0px'},500);
			$('#separacion-header').css({'height':'271px'});
			$('header').css({'position':'fixed'});
		}
	}
}
function inicializacion() {
	timeout_slider_principal = null;
	flag1_slider_principal = 0;
	flag2_slider_principal = 0;
	flags_slider_generico = new Array($('#tienda-slider li a.tienda-slider-producto').length);

	for (var i = 0; i < flags_slider_generico.length; i++) {
		flags_slider_generico[i] = 0;
	};

}
function modal_cerrar(event) {
	event.preventDefault();
	event.stopImmediatePropagation();

	$('#mask').fadeTo(500,0);
	$('#mask').fadeOut(0);
	$('#mask').fadeTo(0,1);

	$('#mask-ventana').animate({left:(-1*$('#mask-ventana').width()).toString() + 'px'}, 300);
	$('#mask-ventana').fadeOut(0);
}
function modal_mostrar(event) {
	event.preventDefault();

	var anchura_mask = $(window).width();
    var altura_mask = $(document).height();
    var anchura_ventana = $(window).width();
    var altura_ventana = $(window).height();

    $('#mask').css({'height':altura_mask, 'width':anchura_mask}); 
    $('#mask').fadeIn(0);
    $('#mask').fadeTo(500,0.8);

    var left_final = $(window).scrollLeft() + (anchura_ventana/2) - (($('#mask-ventana').width()+parseInt($('#mask-ventana').css('padding-left'))+parseInt($('#mask-ventana').css('padding-right')))/2); 
	var top_final = $(window).scrollTop() + (altura_ventana/2) - (($('#mask-ventana').height()+parseInt($('#mask-ventana').css('padding-top'))+parseInt($('#mask-ventana').css('padding-bottom')))/2);
	$('#mask-ventana').css({'top':top_final.toString()+'px', 'left':(anchura_ventana)+'px'});
	$('#mask-ventana').html($(event.currentTarget).children('.modal-contenido').html() || '').find('.modal-cerrar').on('click',modal_cerrar);
	$('#mask-ventana').fadeIn(0);
	$('#mask-ventana').animate({left: (left_final-50).toString()+'px'}, 300).animate({left: (left_final).toString()+'px'}, 100);

}
function slider_generico_post(event)
{
	var contenedor_camisetas = [];
	contenedor_camisetas = $(event.currentTarget).parents('ul').find('li a.tienda-slider-producto');

	if ($.inArray(1,flags_slider_generico) == -1) {
		$.each(contenedor_camisetas, function(){

			var camiseta = $(this).children('img');
			var index = $(this).parent().index();

			flags_slider_generico[index - 1] = 1;
			
			if (index < contenedor_camisetas.length) {
				$(this).append($(contenedor_camisetas[index]).html()).children().last().css({'left':(parseInt($(camiseta).css('left'))+$(this).width()).toString() + 'px'}).animate({'left':$(camiseta).css('left')},velocidad_slider).queue(function(next){
					$(this).parent().children().first().remove();
					flags_slider_generico[index - 1] = 0;
					next();
				});
			}
			else if (index == contenedor_camisetas.length) {
				var lista_camisetas = $(this).parents('ul').siblings('.camisetas-seleccionadas').find('li');
				var index_borrar = -1;
				var index_incluir = -1;

				if (!$(lista_camisetas[0]).hasClass('camiseta-seleccionada-visible')) {
					index_borrar = $(lista_camisetas).filter('.camiseta-seleccionada-visible').first().index();
					index_incluir = $(lista_camisetas).filter('.camiseta-seleccionada-visible').last().index() + 1;
					
					if (index_incluir == lista_camisetas.length) {
						index_incluir = 0;
					};
				}
				else {
					for (var i = lista_camisetas.length - 1; i >= 0; i--) {
						if (!$(lista_camisetas[i]).hasClass('camiseta-seleccionada-visible')) {
							index_incluir = i;
							if (i == lista_camisetas.length - 1) {
								index_borrar = 0;
							}
							else {
								if ($(lista_camisetas[i+1]).hasClass('camiseta-seleccionada-visible')) {
									index_borrar = i + 1;
								};
							};
						};
					};
				};

				if (index_incluir != -1 && index_borrar != -1) {
					$(lista_camisetas[index_incluir]).addClass('camiseta-seleccionada-visible');
					$(lista_camisetas[index_borrar]).removeClass('camiseta-seleccionada-visible');

					$(this).append($(lista_camisetas[index_incluir]).html()).children().last().css({'left':(parseInt($(camiseta).css('left'))+$(this).width()).toString() + 'px'}).animate({'left':$(camiseta).css('left')},velocidad_slider).queue(function(next){
						$(this).parent().children().first().remove();
						flags_slider_generico[index - 1] = 0;
						next();
					});
				};
			};
			$(camiseta).stop().animate({'left':(parseInt($(camiseta).css('left'))-$(this).width()).toString() + 'px'},velocidad_slider);
		});
	};
	event.preventDefault();
}
function slider_generico_prev()
{
	var contenedor_camisetas = [];
	contenedor_camisetas = $(event.currentTarget).parents('ul').find('li a.tienda-slider-producto').get().reverse();

	if ($.inArray(1,flags_slider_generico) == -1) {
		$.each(contenedor_camisetas, function(){
			var camiseta = $(this).children('img');
			var index = contenedor_camisetas.length - $(this).parent().index() + 1;

			flags_slider_generico[index - 1] = 1;
			
			if (index < contenedor_camisetas.length) {
				$(this).append($(contenedor_camisetas[index]).html()).children().last().css({'left':(parseInt($(camiseta).css('left'))-$(this).width()).toString() + 'px'}).animate({'left':$(camiseta).css('left')},velocidad_slider).queue(function(next){
					$(this).parent().children().first().remove();
					flags_slider_generico[index - 1] = 0;
					next();
				});
			}
			else if (index == contenedor_camisetas.length) {
				var lista_camisetas = $(this).parents('ul').siblings('.camisetas-seleccionadas').find('li');
				var index_borrar = -1;
				var index_incluir = -1;

				if (!$(lista_camisetas[0]).hasClass('camiseta-seleccionada-visible')) {
					index_borrar = $(lista_camisetas).filter('.camiseta-seleccionada-visible').last().index();
					index_incluir = $(lista_camisetas).filter('.camiseta-seleccionada-visible').first().index() - 1;
				}
				else {
					for (var i = 0; i < lista_camisetas.length; i++) {
						if (!$(lista_camisetas[i]).hasClass('camiseta-seleccionada-visible')) {
							index_incluir = i;
							if ($(lista_camisetas[i-1]).hasClass('camiseta-seleccionada-visible')) {
								index_borrar = i - 1;
							};
						};
					};
				};
				
				if (index_incluir != -1 && index_borrar != -1) {
					$(lista_camisetas[index_incluir]).addClass('camiseta-seleccionada-visible');
					$(lista_camisetas[index_borrar]).removeClass('camiseta-seleccionada-visible');

					$(this).append($(lista_camisetas[index_incluir]).html()).children().last().css({'left':(parseInt($(camiseta).css('left'))-$(this).width()).toString() + 'px'}).animate({'left':$(camiseta).css('left')},velocidad_slider).queue(function(next){
						$(this).parent().children().first().remove();
						flags_slider_generico[index - 1] = 0;
						next();
					});
				};
			};
			$(camiseta).stop().animate({'left':(parseInt($(camiseta).css('left'))+$(this).width()).toString() + 'px'},velocidad_slider);
		});
	};

	event.preventDefault();
}
function slider_principal_boton(event)
{
	if (!flag1_slider_principal && !flag2_slider_principal && !$(event.currentTarget).hasClass('slider-principal-boton-seleccionado')) 
	{
		flag1_slider_principal = 1;
		flag2_slider_principal = 1;
		
		clearTimeout(timeout_slider_principal);

		var slider = $('#slider-principal-contenedor-imagenes ul');
		var slider_element = $(slider).find('li.slider-principal-seleccionado');
		var slider_next = $(slider).children('li')[$(event.currentTarget).index()]; 
		var activo_slider_principal_anterior = $(slider_element).index();
		var activo_slider_principal = $(slider_next).index();

		$($('#slider-principal-contenedor-botones a')[activo_slider_principal_anterior]).removeClass('slider-principal-boton-seleccionado');
		$($('#slider-principal-contenedor-botones a')[activo_slider_principal]).addClass('slider-principal-boton-seleccionado');

		$(slider_element).css({'left':'0px', 'z-index':'10'}).stop().animate({'left':'50px'}, velocidad_slider/3).animate({'left':(0 - $(slider).width()).toString()+'px'}, velocidad_slider).queue(function(next){
			$(this).removeClass('slider-principal-seleccionado').css({'z-index':'0'});
			flag1_slider_principal = 0;
			next();
		});
		$(slider_next).css({'left':'0px', 'z-index':'5'}).delay(velocidad_slider + (velocidad_slider/3)).queue(function(next){
			$(this).addClass('slider-principal-seleccionado').css({'z-index':'10'});
			flag2_slider_principal = 0;
			next();
		});

		timeout_slider_principal = setTimeout(slider_principal_post, pausa_slider);
	};

	if (event) 
	{
		event.preventDefault();
	};
}
function slider_principal_post(event)
{
	if (!flag1_slider_principal && !flag2_slider_principal) 
	{
		flag1_slider_principal = 1;
		flag2_slider_principal = 1;
		
		clearTimeout(timeout_slider_principal);

		var slider = $('#slider-principal-contenedor-imagenes ul');
		var slider_element = $(slider).find('li.slider-principal-seleccionado');
		var slider_next = $(slider_element).next(); 
		var activo_slider_principal_anterior = $(slider_element).index();
		var activo_slider_principal = activo_slider_principal_anterior + 1;

		if ($(slider_next).length == 0) {
			slider_next = $(slider).children('li').first();
			activo_slider_principal = 0;
		};

		$($('#slider-principal-contenedor-botones a')[activo_slider_principal_anterior]).removeClass('slider-principal-boton-seleccionado');
		$($('#slider-principal-contenedor-botones a')[activo_slider_principal]).addClass('slider-principal-boton-seleccionado');

		$(slider_element).css({'left':'0px', 'z-index':'10'}).stop().animate({'left':'50px'}, velocidad_slider/3).animate({'left':(0 - $(slider).width()).toString()+'px'}, velocidad_slider).queue(function(next){
			$(this).removeClass('slider-principal-seleccionado').css({'z-index':'0'});
			flag1_slider_principal = 0;
			next();
		});
		$(slider_next).css({'left':'0px', 'z-index':'5'}).delay(velocidad_slider + (velocidad_slider/3)).queue(function(next){
			$(this).addClass('slider-principal-seleccionado').css({'z-index':'10'});
			flag2_slider_principal = 0;
			next();
		});

		timeout_slider_principal = setTimeout(slider_principal_post, pausa_slider);
	};

	if (event) 
	{
		event.preventDefault();
	};
}
function slider_principal_prev(event)
{
	if (!flag1_slider_principal && !flag2_slider_principal) 
	{
		flag1_slider_principal = 1;
		flag2_slider_principal = 1;

		clearTimeout(timeout_slider_principal);

		var slider = $('#slider-principal-contenedor-imagenes ul');
		var slider_element = $(slider).find('li.slider-principal-seleccionado');
		var slider_prev = $(slider_element).prev(); 
		var activo_slider_principal_anterior = $(slider_element).index();
		var activo_slider_principal = activo_slider_principal_anterior - 1;

		if ($(slider_prev).length == 0) {
			slider_prev = $(slider).children('li').last();
			activo_slider_principal = $(slider).children('li').last().index();
		};

		$($('#slider-principal-contenedor-botones a')[activo_slider_principal_anterior]).removeClass('slider-principal-boton-seleccionado');
		$($('#slider-principal-contenedor-botones a')[activo_slider_principal]).addClass('slider-principal-boton-seleccionado');

		$(slider_element).css({'left':'0px', 'z-index':'5'}).delay(velocidad_slider + (velocidad_slider/3)).queue(function(next){
			$(this).removeClass('slider-principal-seleccionado').css({'z-index':'0'});
			flag1_slider_principal = 0;
			next();
		});
		$(slider_prev).css({'left':(0 - $(slider).width()).toString()+'px', 'z-index':'10'}).stop().animate({'left':'50px'}, velocidad_slider).animate({'left':'0px'}, velocidad_slider/3).queue(function(next){
			$(this).addClass('slider-principal-seleccionado').css({'z-index':'10'});
			flag2_slider_principal = 0;
			next();
		});

		timeout_slider_principal = setTimeout(slider_principal_post, pausa_slider);
	};

	if (event) 
	{
		event.preventDefault();
	};
}