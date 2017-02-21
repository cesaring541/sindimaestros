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
		$("#municipalitySindical").empty();
		
		if ($('#zone_list').val()=="CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
						$("#municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipalitySindical").selectpicker("refresh");
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
		$("#mod_municipalitySindical").empty();
		
		if ($('#mod_zone_list').val()=="CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
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
						$("#mod_municipalitySindical" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_municipalitySindical").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	}
	//======================================================================================================================
	//======================================================================================================================

	$.ajax({ 
 		type: 'GET', 
 		url: 'json/municipalities.json', 
 		dataType: 'json',
 		success: function (data) {
 			var array = data[1].municipality;
 			for (var i = 0; i < array.length; i++) {
 				$("#municipality_list, #mod_municipality_list, #mod_municipalityWorking_list, #municipalityWorking_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
 			};
 			$("#municipality_list, #mod_municipality_list, #mod_municipalityWorking_list, #municipalityWorking_list" ).selectpicker('refresh');
 		},
 		error:function(msg) {
 			console.log(msg+" Listado de objetos fallido");
 		}
 	});


	// Al dar click en el boton Agregar...
	$("#add-object").click(function(){
		$(".table-objects").hide(100);
		$("#form-add").show(100);
		$("#form-modify").hide(100);
	});


	// Al dar click en el boton Listar, o en los formularios al botón Cancelar
	$(".list-objects").click(function(){
		$(".table-objects").show(100);
		$("#form-add").hide(100);
		$("#form-modify").hide(100);
	});

	/*
	* Los eventos de los botones Editar y Eliminar se deben declarar diferente debido a que el uso
	* de los scripts de fresh-table causaban un efecto inesperado en el jquery usado antiguamente
	*/
	tableButtonEvent = {
		// Al dar click en el boton Editar...
		edit: function(dataId) {

			$(".table-objects").hide(100);
			$("#form-add").hide(100);
			$("#form-modify").show(100);

			$.ajax({
				type: 'GET', 
				url: '/read-joined/'+dataId,
				dataType: 'json',
				success: function (data) {
		   			
					$("#button_update").attr("id", dataId);

					$("#mod_identityCard").val(data.identityCard);
					$("#mod_fullName").val(data.fullName);
					$("#mod_birthdate").val(data.birthdate);
					$("#mod_address").val(data.address);
					$("#mod_email").val(data.email);
					$("#mod_rh_list option[value='"+data.rh+"']").attr("selected","selected");
					$("#mod_gender_list option[value='"+data.gender+"']").attr("selected","selected");
					$("#mod_municipality_list option[value='"+data.municipality+"']").attr("selected","selected");
					$("#mod_cellPhoneNumber").val(data.cellPhoneNumber);
					$("#mod_educationalInstitution").val(data.educationalInstitution);
					$("#mod_areaPerformance_list option[value='"+data.areaPerformance+"']").attr("selected","selected");
					$("#mod_university_list option[value='"+data.university+"']").attr("selected","selected");
					$("#mod_normalista_list option[value='"+data.normalista+"']").attr("selected","selected");
					$("#mod_specialist_list option[value='"+data.specialist+"']").attr("selected","selected");
					$("#mod_doctorate_list option[value='"+data.doctorate+"']").attr("selected","selected");
					$("#mod_typeOfAppointment_list option[value='"+data.typeOfAppointment+"']").attr("selected","selected");
					$("#mod_state_list option[value='"+data.state+"']").attr("selected","selected");
					$("#mod_municipalityWorking").val(data.municipalityWorking);
					$("#mod_degree").val(data.degree);
					$("#mod_professional_list option[value='"+data.professional+"']").attr("selected","selected");
					$("#mod_MasterDegree_list option[value='"+data.MasterDegree+"']").attr("selected","selected");
					$("#mod_promotionLadder").val(data.promotionLadder);
					$("#mod_Teaching_list option[value='"+data.Teaching+"']").attr("selected","selected");
					$("#mod_level_list option[value='"+data.level+"']").attr("selected","selected");
					$("#mod_municipalitySindical").val(data.municipalitySindical);
					$("#mod_affiliationPaymentType_list option[value='"+data.affiliationPaymentType+"']").attr("selected","selected");
					$("#mod_integraCommission_list option[value='"+data.integraCommission+"']").attr("selected","selected");
					$("#mod_Zone_list option[value='"+data.Zone+"']").attr("selected","selected");
					$("#mod_integraCommittee_list option[value='"+data.integraCommittee+"']").attr("selected","selected");
					$("#mod_delegateGeneralAssembly_list option[value='"+data.delegateGeneralAssembly+"']").attr("selected","selected");
					$("#mod_employeeClass_list option[value='"+data.employeeClass+"']").attr("selected","selected");


					$("#mod_professional_list, #mod_rh_list, #mod_gender_list, #mod_municipality_list, #mod_areaPerformance_list, #mod_university_list, #mod_normalista_list, #mod_specialist_list, #mod_doctorate_list, #mod_typeOfAppointment_list, #mod_state_list, #mod_MasterDegree_list, #mod_Teaching_list, #mod_level_list, #mod_affiliationPaymentType_list, #mod_integraCommission_list, #mod_Zone_list, #mod_integraCommittee_list, #mod_delegateGeneralAssembly_list, #mod_employeeClass_list").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+"Peticion de datos fallida");
				}
			});
		},

		// Al dar click en el boton Eliminar...
		remove: function(dataId) {
			/*var clase = "."+dataId; //Cada fila de la tabla posee una clase propia
			$.ajax({
	    		type : 'get',
	    		url : '/destroyUser/'+dataId, //Funcion de borrado
	    		success : function(response) {
	    			console.log(response);
			    	if ( response === 'error') {
			           	alert('Error al eliminar usuario');
			       	} else if (response === 'success') {
		        		demo.initChartist();
		        		$(clase).remove(); 
		        		alert("Usuario eliminado satisfactoriamente"); 
			        }
	    		},
	    		error:function(msg){
	    			console.log(msg+"Error eliminar usuario");
	    		}
			});*/
		}
	}


	// Al dar click en el boton Actualizar...
	$('.modify-object').click(function(){

		var dataId = this.id;
		$('#form-modify').attr("action", "update-joined/"+dataId);		
		$('#form-modify').submit();

	});
});


