$(document).ready(function () {

	$("#acordeon").accordion();


	//Declarando variables
	var detalle01 =	$("#detalle-01");
	var detalle02 =	$("#detalle-02");
	var detalle03 =	$("#detalle-03");
	var detalle04 =	$("#detalle-04");
	var detalle05 =	$("#detalle-05");
	var detalle06 =	$("#detalle-06");
	var detalle07 =	$("#detalle-07");
	var detalle08 =	$("#detalle-08");
	var detalle09 =	$("#detalle-09");
	var detalle10 =	$("#detalle-10");
	var detalle11 =	$("#detalle-11");
	var detalle12 =	$("#detalle-12");
    
	//Animando Mostrar Detalles
	detalle01.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		 70
		);
	 });

	 detalle02.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle03.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle04.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle05.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle06.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle07.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle08.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle09.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle10.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle11.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		  70
		);
	 });

	 detalle12.click(function (e) {
		e.preventDefault();
		$("html, body").animate(
		  {
			scrollTop: 0,
		  },
		 70 
		);
	 });


	//Mostrar detalles
    detalle01.click(function(){
		$("#info-detalles-01").show("fade");
		$("#info-detalles-01").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");

	});


	 detalle02 =	$("#detalle-02").click(function(){
		$("#info-detalles-02").show("fade");
		$("#info-detalles-02").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle03 =	$("#detalle-03").click(function(){
		$("#info-detalles-03").show("fade");
		$("#info-detalle-03").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle04 =	$("#detalle-04").click(function(){
		$("#info-detalles-04").show("fade");
		$("#info-detalles-04").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle05 =	$("#detalle-05").click(function(){
		$("#info-detalles-05").show("fade");
		$("#info-detalles-05").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

    detalle06 =	$("#detalle-06").click(function(){
		$("#info-detalles-06").show("fade");
		$("#info-detalles-06").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle07 =	$("#detalle-07").click(function(){
		$("#info-detalles-07").show("fade");
		$("#info-detalles-07").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle08 =	$("#detalle-08").click(function(){
		$("#info-detalles-08").show("fade");
		$("#info-detalles-08").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle09 =	$("#detalle-09").click(function(){
		$("#info-detalles-09").show("fade");
		$("#info-detalles-09").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle10 =	$("#detalle-10").click(function(){
		$("#info-detalles-10").show("fade");
		$("#info-detalles-10").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

    detalle11 =	$("#detalle-11").click(function(){
		$("#info-detalles-11").show("fade");
		$("#info-detalles-11").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	 detalle12 =	$("#detalle-12").click(function(){
		$("#info-detalles-12").show("fade");
		$("#info-detalles-12").css("opacity","1").css("overflow-x", "hidden").css("overflow-y","auto");
		 
	});

	
	//Boton cerrar Mostrar
	$("#cerrar-ventana").click(function(){
		$("#info-detalles-01").hide("fold","faster");
	});

	$("#cerrar-ventana-02").click(function(){
		$("#info-detalles-02").hide("fold","fast");
	});

	$("#cerrar-ventana-03").click(function(){
		$("#info-detalles-03").hide("fold","fast");
	});

	$("#cerrar-ventana-03").click(function(){
		$("#info-detalles-03").hide("fold","fast");
	});

	$("#cerrar-ventana-04").click(function(){
		$("#info-detalles-04").hide("fold","fast");
	});

	$("#cerrar-ventana-04").click(function(){
		$("#info-detalles-04").hide("fold","fast");
	});

	$("#cerrar-ventana-05").click(function(){
		$("#info-detalles-05").hide("fold","fast");
	});

	$("#cerrar-ventana-05").click(function(){
		$("#info-detalles-05").hide("fade","fast");
	});

	$("#cerrar-ventana-06").click(function(){
		$("#info-detalles-06").hide("fold","fast");
	});

	$("#cerrar-ventana-07").click(function(){
		$("#info-detalles-07").hide("fold","fast");
	});

	$("#cerrar-ventana-08").click(function(){
		$("#info-detalles-08").hide("fold","fast");
	});

	$("#cerrar-ventana-09").click(function(){
		$("#info-detalles-09").hide("fold","fast");
	});

	$("#cerrar-ventana-10").click(function(){
		$("#info-detalles-10").hide("fold","fast");
	});

	$("#cerrar-ventana-11").click(function(){
		$("#info-detalles-11").hide("fold","fast");
	});

	$("#cerrar-ventana-12").click(function(){
		$("#info-detalles-12").hide("fold","fast");
	});

   //Boton X cerrar
   var cerrarBotonX = $(".fa-times");

   cerrarBotonX.click(function(){
		$("#info-detalles-01").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-02").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-03").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-04").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-05").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-06").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-07").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-08").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-09").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-10").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-11").hide("fade","fast");
	});

	cerrarBotonX.click(function(){
		$("#info-detalles-12").hide("fade","fast");
	});	
	

	//
	$(document).ready(function () {
		//Scroll para subir al inicio de la web
		$(".btn-subirarriba").click(function (e) {
		  e.preventDefault();
		  $("html, body").animate(
			{
			  scrollTop: 0,
			},
			500
		  );
	  
		  return false;
		});
	  
		var ScrollMenu = $(".videosScroll");
		ScrollMenu.click(function (e) {
		  e.preventDefault();
		  $("html, body").animate(
			{
			  scrollTop: 1500,
			},
			800
		  );
		});
	  
		var ScrollMenu = $(".cursoTradingScroll");
		ScrollMenu.click(function (e) {
		  e.preventDefault();
		  $("html, body").animate(
			{
			  scrollTop: 12000,
			},
			4000
		  );
		});
	  
		var ScrollMenu = $(".paquetesScroll");
		ScrollMenu.click(function (e) {
		  e.preventDefault();
		  $("html, body").animate(
			{
			  scrollTop: 13650,
			},
			5500
		  );
		});

		var ScrollMenu = $(".blogScroll");
		ScrollMenu.click(function (e) {
		  e.preventDefault();
		  $("html, body").animate(
			{
			  scrollTop: 14700,
			},
			6000
		  );
		});

		var ScrollMenu = $(".miseccScroll");
		ScrollMenu.click(function (e) {
		  e.preventDefault();
		  $("html, body").animate(
			{
			  scrollTop: 15480,
			},
			6500
		  );
		});

		var ScrollMenu = $(".sobremiScroll");
		ScrollMenu.click(function (e) {
		  e.preventDefault();
		  $("html, body").animate(
			{
			  scrollTop: 6400,
			},
			7000
		  );
		});


	  
		let animado = document.querySelectorAll(".animado");
	  
		function mostrarScroll() {
		  let scrollTop = document.documentElement.scrollTop;
		  for (var i = 0; i < animado.length; i++) {
			let alturaAnimado = animado[i].offsetTop;
			if (alturaAnimado - 200 < scrollTop) {
			  animado[i].style.opacity = 1;
			  animado[i].classList.add("mostrarArriba");
			}
		  }
		}
	  
		window.addEventListener("scroll", mostrarScroll);
	  });
	  
	  //	Swal.fire("Bienvenido!", "D'ARMANDO EMPANADAS!", "success");


	  function enviarCorreo(){
		$(".alerta_correo").css('display', 'none');
		$(".alerta_mensaje").css('display', 'none');
		$('.alerta_correcto').css('display','none');
		$('.alerta_incorrecto').css('display','none');
		var correo = $("#correo").val();
		var mensaje = $("#mensaje").val();
		var valido = 1;
		var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		if(!validacion_correo.test(correo)){
			$(".alerta_correo").css('display', 'block');
			valido = 0;
		}
		if(mensaje.length <= 5 ){
			$(".alerta_mensaje").css('display', 'block');
			valido = 0;
		}
	
		if (valido == 1) {
			var datos = 'correo=' + correo + '&mensaje=' + mensaje;
			$.ajax({
				type: "POST",
				url: "enviar.php",
				data: datos,
				success: function(res) {
					if (parseInt(res) == 1) {
						$('.alerta_correcto').css('display','block');
					}else{
						$('.alerta_incorrecto').css('display','block');
					}
				},
				error: function(res) {
					$('.alerta_incorrecto').css('display','block');
				}
			});
		}
	}
});


