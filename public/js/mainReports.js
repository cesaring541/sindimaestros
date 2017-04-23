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
	$("#municipality_list").change(function(){
		console.log($("#municipality_list").val());
		$.ajax({ 
		    type: 'POST', 
		    url: '/search-reports',
		    dataType: 'json',
		    data: {"municipality":$("#municipality_list").val()},
	    	success: function (data) {
	    		if (data = true) {
	      			window.location = '/reportes/Afiliados-por-municipio.csv';
	      		}else {
	      			console.log(msg+" Peticion de datos fallida");
	      		}
       		},
	    	error:function(msg) {
	        	console.log(msg+" Peticion de datos fallida");
	    	}
		});
	})

	//==========================================================================================================
	//
	//==========================================================================================================


	$.ajax({ 
		type: 'GET', 
		url: 'json/zones.json', 
		dataType: 'json',
		success: function (data) {
			var array = data[1].ZONA;
			for (var i = 0; i < array.length; i++) {
				$("#zone_list1").append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
			$("#zone_list1").selectpicker("refresh");
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});
	// ====================================================================================================
	// DESPLIEGUE DE MUNICIPIOS DE ACUERDO A ZONA SELECCIONADA ============================================

	$('#zone_list1').on('change', function() {

		refreshMunicipalities1();
	});
	function refreshMunicipalities1(){
		$("#municipality_list1").empty();
		
		if ($('#zone_list1').val()=="CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="GUATEQUE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/guateque.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUATEQUE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="RICAURTE-BAJO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-bajo.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-BAJO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="RICAURTE-ALTO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-alto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-ALTO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="TUNDAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tundama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNDAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="DUITAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/duitama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].DUITAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="VALDERRAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/valderrama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].VALDERRAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="GARAGOA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/garagoa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GARAGOA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="GUTIERREZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/gutierrez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUTIERREZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="NORTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/norte.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].NORTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="SUGAMUXI") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sugamuxi.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SUGAMUXI;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="SOGAMOSO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sogamoso.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SOGAMOSO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="LENGUPA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/lengupa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].LENGUPA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="OCCIDENTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/occidente.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].OCCIDENTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="MARQUEZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/marquez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].MARQUEZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="PUERTO-BOYACÁ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/puerto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].PUERTO-BOYACÁ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="TUNJA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tunja.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNJA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list1').val()=="CHIQUINQUIRA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/chiquinquira.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CHIQUINQUIRA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list1" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list1").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	}
	$("#gender").change(function(){

		$.ajax({ 
		    type: 'POST', 
		    url: '/search-reports-gender',
		    dataType: 'json',
		    data: {"municipality":$("#municipality_list1").val(), "gender":$("#gender").val()},
	    	success: function (data) {
	    		if (data = true) {
	      			window.location = '/reportes/Afiliados-por-genero.csv';

	      		}else {
	      			console.log(msg+" Peticion de datos fallida");
	      		}
       		},
	    	error:function(msg) {
	        	console.log(msg+" Peticion de datos fallida");
	    	}
		});
	})
		//==========================================================================================================
	//
	//==========================================================================================================


	$.ajax({ 
		type: 'GET', 
		url: 'json/zones.json', 
		dataType: 'json',
		success: function (data) {
			var array = data[1].ZONA;
			for (var i = 0; i < array.length; i++) {
				$("#zone_list2").append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
			$("#zone_list2").selectpicker("refresh");
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});
	// ====================================================================================================
	// DESPLIEGUE DE MUNICIPIOS DE ACUERDO A ZONA SELECCIONADA ============================================

	$('#zone_list2').on('change', function() {

		refreshMunicipalities2();
	});
	function refreshMunicipalities2(){
		$("#municipality_list2").empty();
		
		if ($('#zone_list2').val()=="CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="GUATEQUE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/guateque.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUATEQUE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="RICAURTE-BAJO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-bajo.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-BAJO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="RICAURTE-ALTO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-alto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-ALTO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="TUNDAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tundama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNDAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="DUITAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/duitama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].DUITAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="VALDERRAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/valderrama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].VALDERRAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="GARAGOA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/garagoa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GARAGOA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="GUTIERREZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/gutierrez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUTIERREZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="NORTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/norte.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].NORTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="SUGAMUXI") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sugamuxi.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SUGAMUXI;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="SOGAMOSO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sogamoso.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SOGAMOSO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="LENGUPA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/lengupa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].LENGUPA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="OCCIDENTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/occidente.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].OCCIDENTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="MARQUEZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/marquez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].MARQUEZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="PUERTO-BOYACÁ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/puerto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].PUERTO-BOYACÁ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="TUNJA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tunja.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNJA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list2').val()=="CHIQUINQUIRA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/chiquinquira.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CHIQUINQUIRA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list2" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list2").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	}
	$("#sel_Teaching").change(function(){

		$.ajax({ 
		    type: 'POST', 
		    url: '/search-reports-sel_Teaching',
		    dataType: 'json',
		    data: {"municipality":$("#municipality_list2").val(), "Teaching":$("#sel_Teaching").val()},
	    	success: function (data) {
	    		if (data = true) {
	      			window.location = '/reportes/Afiliados-por-decreto.csv';
	      			
	      		}else {
	      			console.log(msg+" Peticion de datos fallida");
	      		}
       		},
	    	error:function(msg) {
	        	console.log(msg+" Peticion de datos fallida");
	    	}
		});
	})


	$.ajax({ 
		type: 'GET', 
		url: 'json/zones.json', 
		dataType: 'json',
		success: function (data) {
			var array = data[1].ZONA;
			for (var i = 0; i < array.length; i++) {
				$("#zone_list3").append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
			$("#zone_list3").selectpicker("refresh");
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});
	// ====================================================================================================
	// DESPLIEGUE DE MUNICIPIOS DE ACUERDO A ZONA SELECCIONADA ============================================

	$('#zone_list3').on('change', function() {

		refreshMunicipalities3();
	});
	function refreshMunicipalities3(){
		$("#municipality_list3").empty();
		
		if ($('#zone_list3').val()=="CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="GUATEQUE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/guateque.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUATEQUE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="RICAURTE-BAJO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-bajo.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-BAJO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="RICAURTE-ALTO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-alto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-ALTO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="TUNDAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tundama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNDAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="DUITAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/duitama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].DUITAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="VALDERRAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/valderrama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].VALDERRAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="GARAGOA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/garagoa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GARAGOA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="GUTIERREZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/gutierrez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUTIERREZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="NORTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/norte.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].NORTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="SUGAMUXI") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sugamuxi.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SUGAMUXI;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="SOGAMOSO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sogamoso.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SOGAMOSO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="LENGUPA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/lengupa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].LENGUPA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="OCCIDENTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/occidente.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].OCCIDENTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="MARQUEZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/marquez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].MARQUEZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="PUERTO-BOYACÁ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/puerto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].PUERTO-BOYACÁ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="TUNJA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tunja.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNJA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#zone_list3').val()=="CHIQUINQUIRA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/chiquinquira.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CHIQUINQUIRA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality_list3" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality_list3").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	}
	$("#affiliationPaymentType").change(function(){
		$.ajax({ 
		    type: 'POST', 
		    url: '/search-reports-paymentType',
		    dataType: 'json',
		    data: {"municipality":$("#municipality_list3").val(), "affiliationPaymentType":$("#affiliationPaymentType").val()},
	    	success: function (data) {
	    		if (data = true) {
	      			window.location = '/reportes/Afiliados-por-pago.csv';
	      			
	      		}else {
	      			console.log(msg+" Peticion de datos fallida");
	      		}
       		},
	    	error:function(msg) {
	        	console.log(msg+" Peticion de datos fallida");
	    	}
		});
	})

});