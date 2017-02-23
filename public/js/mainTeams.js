$(document).ready(function(){
	// LISTADO DE DEPORTES DEPENDIENDO EL TIPO DE PARTICIPACIÓN SELECCIONADO ========================
	//===============================================================================================
	$('#typeOfParticipation').on('change', function() { 
		$("#sport").empty();

		if ($('#typeOfParticipation').val()=="Conjunto") {
			$.ajax({
				type: 'GET',
				url: 'json/conjunto.json',
				dataType: 'json',
				success: function (data) {
					var array = data[1].CONJUNTO;
					for (var i = 0; i < array.length; i++) {
						$("#sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#typeOfParticipation').val()=="Equipo") {
			$.ajax({
				type: 'GET',
				url: 'json/equipo.json',
				dataType: 'json',
				success: function (data) {
					var array = data[1].EQUIPO;
					for (var i = 0; i < array.length; i++) {
						$("#sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#typeOfParticipation').val()=="Individual") {
			$.ajax({
				type: 'GET',
				url: 'json/individual.json',
				dataType: 'json',
				success: function (data) {
					var array = data[1].INDIVIDUAL;
					for (var i = 0; i < array.length; i++) {
						$("#sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	});


	// LISTADO DE AFILIADOS DEPENDIENDO GÉNERO Y CATEGORÍA SELECCIONADOS ============================
	//===============================================================================================

	// Asigna un atributo categoría a las opciones del select de Miembros del equipo (Agregar)
	$("#members option").each(function(){
		if (moment().diff( $(this).data('birthdate'), 'years') > 0 && moment().diff( $(this).data('birthdate'), 'years') <= 30){
			$(this).attr('data-category', 'A');
		} else if (moment().diff( $(this).data('birthdate'), 'years') > 30 && moment().diff( $(this).data('birthdate'), 'years') <= 40){
			$(this).attr('data-category', 'B');
		} else if (moment().diff( $(this).data('birthdate'), 'years') > 40 && moment().diff( $(this).data('birthdate'), 'years') <= 50){
			$(this).attr('data-category', 'C');
		} else if (moment().diff( $(this).data('birthdate'), 'years') > 50){
			$(this).attr('data-category', 'D');
		} else {
			$(this).attr('data-category', 'Ninguno');
		}

		$("#members").selectpicker("refresh");
	});

	// Asigna un atributo categoría a las opciones del select de Miembros del equipo (Editar)
	$("#mod_members_list option").each(function(){
		if (moment().diff( $(this).data('birthdate'), 'years') > 0 && moment().diff( $(this).data('birthdate'), 'years') <= 30){
			$(this).attr('data-category', 'A');
		} else if (moment().diff( $(this).data('birthdate'), 'years') > 30 && moment().diff( $(this).data('birthdate'), 'years') <= 40){
			$(this).attr('data-category', 'B');
		} else if (moment().diff( $(this).data('birthdate'), 'years') > 40 && moment().diff( $(this).data('birthdate'), 'years') <= 50){
			$(this).attr('data-category', 'C');
		} else if (moment().diff( $(this).data('birthdate'), 'years') > 50){
			$(this).attr('data-category', 'D');
		} else {
			$(this).attr('data-category', 'Ninguno');
		}

		$("#mod_members_list").selectpicker("refresh");
	});


	function filterMembers(){
		$("#members").selectpicker('deselectAll');
		
		$("#members option").each(function(){
			$(this).show(); // Hace visibles todas las opciones, refrescando la lista
			if ($(this).data('category') != $('#category').val()) {
				$(this).hide();
			} else if ($('#gender').val() != 'Mi') { // Si el género del equipo no es Mixto
				if ($(this).data('gender') != $('#gender').val()) {
					$(this).hide();
				}
			}
			$("#members").selectpicker("refresh");
		});
	}

	$('#category, #gender').on('change', function(){
		filterMembers();
	});

	// Recorre el select de equipos en el formulario Modificar
	function filterModMembers(){
		$("#mod_members_list option").each(function(){
			$(this).show(); // Hace visibles todas las opciones, refrescando la lista
			if ($(this).data('category') != $('#mod_category').val()) {
				$(this).hide();
			} else if ($('#mod_gender').val() != 'Mi') { // Si el género del equipo no es Mixto
				if ($(this).data('gender') != $('#mod_gender').val()) {
					$(this).hide();
				}
			}
			$("#mod_members_list").selectpicker("refresh");
		});
	}

	// LISTADO DE ZONAS =============================================================================
	//===============================================================================================
	$.ajax({ 
		type: 'GET', 
		url: 'json/zones.json', 
		dataType: 'json',
		success: function (data) {
			var array = data[1].ZONA;
			for (var i = 0; i < array.length; i++) {
				$("#zone_list").append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});

	$('#zone_list').on('change', function() { 
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
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
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
				url: '/read-team/'+dataId,
				dataType: 'json',
				success: function (data) {

					$("#button_update").attr("id", dataId);

					$("#mod_gender_list").append($('<option>', {value: data.gender, text: data.gender}));
					$("#mod_typeOfParticipation_list").append($('<option>', {value: data.typeOfParticipation, text: data.typeOfParticipation}));
					$("#mod_sport_list").append($('<option>', {value: data.sport, text: data.sport}));
					$("#mod_category_list").append($('<option>', {value: data.category, text: data.category}));
					$("#mod_zone_list").append($('<option>', {value: data.zone, text: data.zone}));
					$("#mod_municipality_list").append($('<option>', {value: data.municipality, text: data.municipality}));

					// Selecciona las opciones del select multiple
					$('#mod_members_list').selectpicker('val', data.members);

					filterModMembers();
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