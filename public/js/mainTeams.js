$(document).ready(function(){
	// LISTADO DE DEPORTES DEPENDIENDO EL TIPO DE PARTICIPACIÓN SELECCIONADO ========================
	//===============================================================================================
	$('#typeOfParticipation').on('change', function() { 
		$('#sport').find('option').remove(); // Elimina las opciones que pueda tener el select
		$("#sport").selectpicker('refresh');

		if ($('#typeOfParticipation').val() == "Conjunto") {
			$.ajax({
				type: 'GET',
				url: 'json/conjunto.json',
				dataType: 'json',
				success: function (data) {
					var array = data[1].CONJUNTO;
					for (var i = 0; i < array.length; i++) {
						$("#sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#sport").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#typeOfParticipation').val() == "Equipo") {
			$.ajax({
				type: 'GET',
				url: 'json/equipo.json',
				dataType: 'json',
				success: function (data) {
					var array = data[1].EQUIPO;
					for (var i = 0; i < array.length; i++) {
						$("#sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#sport").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#typeOfParticipation').val() == "Individual") {
			$.ajax({
				type: 'GET',
				url: 'json/individual.json',
				dataType: 'json',
				success: function (data) {
					var array = data[1].INDIVIDUAL;
					for (var i = 0; i < array.length; i++) {
						$("#sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#sport").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	});


	// LISTADO DE ZONAS =============================================================================
	//===============================================================================================
	
	$.ajax({ 
		type: 'GET', 
		url: 'json/zones.json', 
		dataType: 'json',
		success: function (data) {
			var array = data[1].ZONA;
			for (var i = 0; i < array.length; i++) {
				$("#zone").append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
			$("#zone").selectpicker('refresh');
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});

	$('#zone').on('change', function() { 
		$('#municipality').find('option').remove(); // Elimina las opciones que pueda tener el select
		$("#municipality").selectpicker('refresh');
		
		if ($('#zone').val() == "CENTRO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/centro.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CENTRO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "GUATEQUE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/guateque.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUATEQUE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "RICAURTE-BAJO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-bajo.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-BAJO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "RICAURTE-ALTO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/ricaurte-alto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].RICAURTE-ALTO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "TUNDAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tundama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNDAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "DUITAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/duitama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].DUITAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "VALDERRAMA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/valderrama.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].VALDERRAMA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "GARAGOA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/garagoa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GARAGOA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "GUTIERREZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/gutierrez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].GUTIERREZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "NORTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/norte.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].NORTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "SUGAMUXI") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sugamuxi.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SUGAMUXI;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "SOGAMOSO") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/sogamoso.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].SOGAMOSO;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "LENGUPA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/lengupa.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].LENGUPA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "OCCIDENTE") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/occidente.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].OCCIDENTE;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "MARQUEZ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/marquez.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].MARQUEZ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "PUERTO-BOYACÁ") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/puerto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].PUERTO-BOYACÁ;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "TUNJA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/tunja.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].TUNJA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});

		} else if ($('#zone').val() == "CHIQUINQUIRA") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/chiquinquira.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CHIQUINQUIRA;
					for (var i = 0; i < array.length; i++) {
						$("#municipality" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#municipality").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	});


	// LISTADO DE AFILIADOS DEPENDIENDO MUNICIPIO, GÉNERO Y CATEGORÍA SELECCIONADOS =================
	//===============================================================================================

	// Lista los afiliados de acuerdo al municipio, género y categoría seleccionados
	// en el formulario Añadir
	$('#municipality, #gender, #category').on('change', function(){
		$('#members').find('option').remove(); // Elimina las opciones que pueda tener el select
		$("#members").selectpicker('refresh');

		var mun = $('#municipality').val();
		var gen = $('#gender').val();
		var cat = $('#category').val();

		if (mun != "" && gen != "" && cat != "") {
			$.ajax({ 
				type: 'GET', 
				url: '/list-joineds/'+mun+'/'+gen+'/'+cat,
				dataType: 'json',
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						$("#members").append("<option value="+data[i]._id+">"+data[i].identityCard+" - "+data[i].fullName+"</option>");
					};
					$("#members").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	});

	// Lista los afiliados de acuerdo al municipio, género y categoría seleccionados
	// en el formulario Modificar
	function filterModMembers(){
		$('#mod_members').find('option').remove(); // Elimina las opciones que pueda tener el select
		$("#mod_members").selectpicker('refresh');

		var mun = $('#mod_municipality').val();
		var gen = $('#mod_gender').val();
		var cat = $('#mod_category').val();

		if (mun != "" && gen != "" && cat != "") {
			$.ajax({ 
				type: 'GET', 
				url: '/list-joineds/'+mun+'/'+gen+'/'+cat,
				dataType: 'json',
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						$("#mod_members").append("<option value="+data[i]._id+">"+data[i].identityCard+" - "+data[i].fullName+"</option>");
					};
					$("#mod_members").selectpicker('refresh');
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	}


	// BOTONES CRUD =================================================================================
	//===============================================================================================

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
				url: '/read-team/'+dataId,
				dataType: 'json',
				success: function (data) {

					$("#button_update").attr("id", dataId);

					$("#mod_gender").append($('<option>', {value: data.gender, text: data.gender}));
					$("#mod_typeOfParticipation").append($('<option>', {value: data.typeOfParticipation, text: data.typeOfParticipation}));
					$("#mod_sport").append($('<option>', {value: data.sport, text: data.sport}));
					$("#mod_category").append($('<option>', {value: data.category, text: data.category}));
					$("#mod_zone").append($('<option>', {value: data.zone, text: data.zone}));
					$("#mod_municipality").append($('<option>', {value: data.municipality, text: data.municipality}));

					filterModMembers();

					setTimeout(function() {
						// Selecciona las opciones del select multiple
						$('#mod_members').selectpicker('val', data.members);
					}, 2000);

					$('#mod_gender, #mod_typeOfParticipation, #mod_sport, #mod_category, #mod_zone, #mod_municipality, #mod_members').selectpicker('refresh');
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
		$('#form-modify').attr("action", "update-team/"+dataId);		
		$('#form-modify').submit();

	});
});