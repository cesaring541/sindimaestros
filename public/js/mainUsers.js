$(document).ready(function(){

	$.ajax({ 
		type: 'GET', 
		url: 'json/zones.json', 
		dataType: 'json',
		success: function (data) {
			var array = data[1].ZONA;
			for (var i = 0; i < array.length; i++) {
				$("#zone_list, #mod_zone_list").append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
			$("#zone_list, #mod_zone_list").selectpicker("refresh");
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});

	$.ajax({
		type: 'GET',
		url: 'json/municipalities.json',
		dataType: 'json',
		success: function (data) {
			var array = data[1].municipality;
			for (var i = 0; i < array.length; i++) {
				$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
			$("#mod_municipality_list").selectpicker("refresh");
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});


	// ====================================================================================================
	// DESPLIEGUE DE MUNICIPIOS DE ACUERDO A ZONA SELECCIONADA ============================================

	$('#zone_list').on('change', function() { 
		refreshMunicipalities();
	});

	function refreshMunicipalities(){
		$("#municipality_list").empty();
		
		if ($('#zone_list').val()=="CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="GUATEQUE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/guateque.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUATEQUE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="RICAURTE-BAJO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-bajo.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-BAJO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="RICAURTE-ALTO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-alto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-ALTO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="TUNDAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tundama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNDAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="DUITAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/duitama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].DUITAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="VALDERRAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/valderrama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].VALDERRAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="GARAGOA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/garagoa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GARAGOA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="GUTIERREZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/gutierrez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUTIERREZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="NORTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/norte.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].NORTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="SUGAMUXI") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sugamuxi.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SUGAMUXI;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="SOGAMOSO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sogamoso.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SOGAMOSO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="LENGUPA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/lengupa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].LENGUPA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="OCCIDENTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/occidente.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].OCCIDENTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="MARQUEZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/marquez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].MARQUEZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="PUERTO-BOYACÁ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/puerto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].PUERTO-BOYACÁ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="TUNJA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tunja.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNJA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list').val()=="CHIQUINQUIRA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/chiquinquira.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CHIQUINQUIRA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	}


	$('#mod_zone_list').on('change', function() { 
		refreshModMunicipalities();
	});

	function refreshModMunicipalities(){
		$("#mod_municipality_list").empty();
		
		if ($('#mod_zone_list').val()=="CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="GUATEQUE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/guateque.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUATEQUE;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="RICAURTE-BAJO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-bajo.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-BAJO;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="RICAURTE-ALTO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-alto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-ALTO;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="TUNDAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tundama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNDAMA;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="DUITAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/duitama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].DUITAMA;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="VALDERRAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/valderrama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].VALDERRAMA;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="GARAGOA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/garagoa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GARAGOA;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="GUTIERREZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/gutierrez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUTIERREZ;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="NORTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/norte.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].NORTE;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="SUGAMUXI") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sugamuxi.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SUGAMUXI;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="SOGAMOSO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sogamoso.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SOGAMOSO;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="LENGUPA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/lengupa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].LENGUPA;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="OCCIDENTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/occidente.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].OCCIDENTE;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="MARQUEZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/marquez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].MARQUEZ;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="PUERTO-BOYACÁ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/puerto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].PUERTO-BOYACÁ;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="TUNJA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tunja.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNJA;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_zone_list').val()=="CHIQUINQUIRA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/chiquinquira.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CHIQUINQUIRA;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipality_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipality_list").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	}

	// ====================================================================================================
	

	$('input[type=password]').keyup(function() {
		// declaramos la variable
		var pswd = $(this).val();
		
		// validamos la longitud de carateres
		if ( pswd.length < 8 ) {
			$('#length').removeClass('bg-success').addClass('bg-warning');
		} else {
			$('#length').removeClass('bg-warning').addClass('bg-success');
		}
		
		// validamos la letra
		if ( pswd.match(/[A-z]/) ) {
			$('#letter').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#letter').removeClass('bg-success').addClass('bg-warning');
		}
		
		//validamos la letra mayuscula
		if ( pswd.match(/[A-Z]/) ) {
			$('#capital').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#capital').removeClass('bg-success').addClass('bg-warning');
		}

		//validamos el numero
		if ( pswd.match(/\d/) ) {
			$('#number').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#number').removeClass('bg-success').addClass('bg-warning');
		}

		//validamos caracter especial
		if(pswd.match(/\W/)){
			$('#symbol').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#symbol').removeClass('bg-success').addClass('bg-warning');	
		}
	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	});

	$('#nameUser').blur(function() {
		var name = $(this).val();
		$.ajax({ 
			type: 'GET', 
		  url: 'getUserName/'+name, 
   		dataType: 'json',
   		success: function (data) {
   			if (!data) {
   				$('#msgUsername').show();
   			}
   			else{
   				$('#msgUsername').hide();
   			}
   		},
   		error:function(msg) {
   			// body...
		   	console.log(msg);
		  }
		});
	});

	$('#Email').blur(function() {
		var email = $(this).val();
		$.ajax({
			type: 'GET',
   		url: 'getEmail/'+email,
   		dataType: 'json',
   		success: function (data) {
   			if (!data) {
   				$('#msgEmail').show();
		   	} else {
		   		$('#msgEmail').hide();
		   	}
		  },
		  error:function(msg) {
		  	// body...
		  	console.log(msg);
		  }
		});
	});

	// Al dar click en el boton Agregar...
	$("#add-user").click(function(){
		$(".table-users").hide(100);
		$(".form-user").show(100);
		$("#form-add-user").show(100);
		$("#form-modify-user").hide(100);
	});


	// Al dar click en el boton Listar...
	$(".list-users").click(function(){
		
		$(".form-user").hide(100);
		$("#form-add-user").hide(100);
		$("#form-modify-user").hide(100);
		$(".table-users").show(100);

	});

	/*
	* Los eventos de los botones Editar y Eliminar se deben declarar diferente debido a que el uso
	* de los scripts de fresh-table causaban un efecto inesperado en el jquery usado antiguamente
	*/
	tableButtonEvent = {
		// Al dar click en el boton Editar...
		edit: function(dataId) {

			$(".table-users").hide(100);
			$(".form-user").show(100);
			$("#form-add-user").hide(100);
			$("#form-modify-user").show(100);

	   	$.ajax({ 
	   		type: 'GET', 
	   		url: '/read-user/'+dataId,
	   		dataType: 'json',
	   		success: function (data) {	   			
	   			$("#button_update").attr("id", dataId);

	   			$("#mod_joined").val(data.joined);
	   			$("#mod_fullname").val(data.fullname);
	   			$("#mod_email").val(data.email);
	   			$("#mod_password").val(data.password);
	   			$("#mod_role option[value='"+data.role+"']").attr("selected","selected");
	   			$('#mod_zone_list').selectpicker('val', data.zone);
	   			$('#mod_municipality_list').selectpicker('val', data.municipality);
	   		},
	   		error:function(msg) {
	   			// body...
	   			console.log(msg+"Peticion de datos fallida");
	   		}
	   	});
		},

		// Al dar click en el boton Eliminar...
		remove: function(dataId) {
			var clase = "."+dataId; //Cada fila de la tabla posee una clase propia
			$.ajax({
    		type    : 'get',
    		url     : '/destroyUser/'+dataId, //Funcion de borrado
    		success : function(response) {
    			console.log(response);
		    	if ( response === 'error') {
           	alert('Error al eliminar usuario');
       		} else if (response === 'success') {
        		demo.initChartist();
        		$(clase).remove(); 
        		alert("Usuario eliminado satisfactoriamente");  	
	        	/**	$.notify({
            	icon: 'pe-7s-gift',
            	message: "<b>Objeto Eliminado</b>"
            },{
                type: 'info',
                timer: 4000
            })*/	 
          }
    		},
    		error:function(msg){
    			console.log(msg+"Error eliminar usuario");
    		}
			});			
		}
	}


	// Al dar click en el boton Actualizar...
	$('.modify-user').click(function(){

		var dataId = this.id;
		$('#frm-modify-user').attr("action", "update-user/"+dataId);		

		$('#frm-modify-user').submit();
	});


	// Al dar click en el boton Cancelar...
	$("#cancel-modify").click(function(){
		
		$(".form-user").hide(100);
		$("#form-add-user").hide(100);
		$("#form-modify-user").hide(100);
		$(".table-users").show(100);

	});


	//buscar
	$('#filtrar').keyup(function () {
 
        var rex = new RegExp($(this).val(), 'i');
        $('.buscar tr').hide();
        $('.buscar tr').filter(function () {
                        return rex.test($(this).text());
        }).show();
 
    });
});

function processData(allText) {
  var allTextLines = allText.split(/\r\n|\n/);
 
  var lines = [];

  for (var i=0; i<allTextLines.length; i++) {
    var user = allTextLines[i].split(';');
     $.ajax({
			type    : 'POST',
			url     : '/createUserCsv', //Funcion de borrado
			data 	: { code: user[0], username: user[3], email:user[5], password: user[4], role: user[7], firstname: user[2], lastname:user[1], status:user[6] },
			
			success : function(response) {
				console.log(response);
			},
			error:function(msg){
				console.log(msg+"Error eliminar usuario");
			}
		});
 	}
}