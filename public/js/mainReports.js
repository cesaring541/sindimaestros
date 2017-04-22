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

	$("#municipality_list").change(function(){
		$.ajax({ 
		    type: 'POST', 
		    url: './app/reportsRoutes/search-reports',
		    dataType: 'json',
		    data: {"municipality":$("#municipality_list").val()},
		    	success: function (data) {
	        		if (data = true) {
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