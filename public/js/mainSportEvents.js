$(document).ready(function(){
	// OBTENCIÓN LISTADO DE MUNICIPIOS ==============================================================
	//===============================================================================================
	$.ajax({ 
		type: 'GET', 
		url: 'json/municipalities.json', 
		dataType: 'json',
		success: function (data) {
			var array = data[1].municipality;
			for (var i = 0; i < array.length; i++) {
				$("#municipalitySindical_list, #mod_municipalitySindical_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
			};
		},
		error:function(msg) {
			console.log(msg+" Listado de objetos fallido");
		}
	});

	// CAMPOS VISIBLES DEPENDIENDO DE LA FASE SELECCIONADA ==========================================
	//===============================================================================================
	function visualizeFields(phaseVal){
		if (phaseVal == "Municipal") {
			$('.participantsJoinedsField').show();
			$('.sportField').hide();
			$('.typeOfParticipationField').hide();
			$('.genderField').hide();
			$('.categoryField').hide();
			$('.teamsField').hide();
		} else if (phaseVal == "Interzonal") {
			$('.participantsJoinedsField').hide();
			$('.typeOfParticipationField').show();
			$('.sportField').show();
			$('.genderField').show();
			$('.categoryField').show();
			$('.teamsField').show();
		}
	}

	$('#phase').on('change', function(){
		visualizeFields($('#phase').val());
	})

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
					$("#sport").selectpicker("refresh");
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
					$("#sport").selectpicker("refresh");
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
					$("#sport").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	});

	$('#mod_typeOfParticipation').on('change', function() { 
		$("#mod_sport").empty();

		if ($('#mod_typeOfParticipation').val()=="Conjunto") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/conjunto.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].CONJUNTO;
					for (var i = 0; i < array.length; i++) {
						$("#mod_sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_sport").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_typeOfParticipation').val()=="Equipo") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/equipo.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].EQUIPO;
					for (var i = 0; i < array.length; i++) {
						$("#mod_sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_sport").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		} else if ($('#mod_typeOfParticipation').val()=="Individual") {
			$.ajax({ 
				type: 'GET', 
				url: 'json/individual.json', 
				dataType: 'json',
				success: function (data) {
					var array = data[1].INDIVIDUAL;
					for (var i = 0; i < array.length; i++) {
						$("#mod_sport" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
					};
					$("#mod_sport").selectpicker("refresh");
				},
				error:function(msg) {
					console.log(msg+" Listado de objetos fallido");
				}
			});
		}
	});

	// LISTADO DE EQUIPOS PARTICIPANTES DEPENDIENDO EL DEPORTE, GÉNERO O CATEGORÍA SELECCIONADOS ====
	//===============================================================================================
	function filterTeams(){
		$("#teams").selectpicker('deselectAll');
		$("#teams option").each(function(){
			$(this).show(); // Hace visibles todas las opciones, refrescando la lista
			if (
				$(this).data('sport') != $('#sport').val() ||
				$(this).data('gender') != $('#gender').val() ||
				$(this).data('category') != $('#category').val()
				) 
			{
				$(this).hide();
			}
			$("#teams").selectpicker("refresh");
		});
	}

	$('#typeOfParticipation, #sport, #gender, #category').on('change', function(){
		filterTeams();
	});

	// Recorre el select de equipos en el formulario Modificar
	function filterModTeams(){
		$("#mod_teams option").each(function(){
			$(this).show(); // Hace visibles todas las opciones, refrescando la lista
			if (
				$(this).data('sport') != $('#mod_sport').val() ||
				$(this).data('gender') != $('#mod_gender').val() ||
				$(this).data('category') != $('#mod_category').val()
				) 
			{
				$(this).hide();
			}
			$("#mod_teams").selectpicker("refresh");
		});
	}

	// EVENTOS BOTONES CRUD =========================================================================
	//===============================================================================================

	// Al dar click en el boton Agregar...
	$("#add-eventsSports").click(function(){

		visualizeFields($('#phase').val())
		
		$(".table-eventsSports").hide(100);
		$(".form-eventSport").show(100);
		$("#form-add-eventSport").show(100);
		$("#form-modify-eventSport").hide(100);

	});


	// Al dar click en el boton Listar, o en el botón Cancelar...
	$(".list-eventsSports").click(function(){
		
		$(".form-eventSport").hide(100);
		$("#form-add-eventSport").hide(100);
		$("#form-modify-eventSport").hide(100);
		$(".table-eventsSports").show(100);

	});

	/*
	* Los eventos de los botones Editar y Eliminar se deben declarar diferente debido a que el uso
	* de los scripts de fresh-table causaban un efecto inesperado en el jquery usado antiguamente
	*/
	tableButtonEvent = {
		// Al dar click en el boton Editar...
		edit: function(dataId) {

			$(".table-eventsSports").hide(100);
			$(".form-eventSport").show(100);
			$("#form-add-eventSport").hide(100);
			$("#form-modify-eventSport").show(100);

			$("#mod_phase option").each(function(){
				$(this).remove();
			});
			$("#mod_typeOfParticipation option").each(function(){
				$(this).remove();
			});
			$("#mod_gender option").each(function(){
				$(this).remove();
			});
			$("#mod_category option").each(function(){
				$(this).remove();
			});

			$.ajax({ 
				type: 'GET', 
				url: '/read-sportEvent/'+dataId,
				dataType: 'json',
				success: function (data) {	   			
					$("#button_update").attr("id", dataId);

					$("#mod_phase").append($('<option>', {value: data.phase, text: data.phase}));
					$('#mod_participantsJoineds').selectpicker('val', data.participantsJoineds); // Selecciona las opciones del select multiple
					$("#mod_nameEvent").val(data.nameEvent);
					$("#mod_sport").append($('<option>', {value: data.sport, text: data.sport}));
					$("#mod_category").append($('<option>', {value: data.category, text: data.category}));
					$("#mod_startDate").val(moment(data.startDate).format('YYYY-MM-DD'));
					$("#mod_endDate").val(moment(data.endDate).format('YYYY-MM-DD'));
					$("#mod_typeOfParticipation").append($('<option>', {value: data.typeOfParticipation, text: data.typeOfParticipation}));
					$("#mod_gender").append($('<option>', {value: data.gender, text: data.gender}));
					$('#mod_teams').selectpicker('val', data.teams); // Selecciona las opciones del select multiple

					$("#mod_phase, #mod_sport, #mod_typeOfParticipation, #mod_category, #mod_gender").selectpicker("refresh");
					
					filterModTeams();
				},
				error:function(msg) {
					// body...
					console.log(msg+"Peticion de datos fallida");
				}
			});

			// El timeout asegura que se cargue el dato correctamente
			setTimeout(function(){
				visualizeFields($("#mod_phase").val());
			}, 1000);
		},

		// Al dar click en el boton Eliminar...
		remove: function(dataId) {
			/*var clase = "."+dataId; //Cada fila de la tabla posee una clase propia
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
					}
				},
				error:function(msg){
					console.log(msg+"Error al eliminar");
				}
			});*/
		}
	}


	// Al dar click en el boton Actualizar...
	$('.modify-eventSport').click(function(){

		var dataId = this.id;
		$('#frm-modify-eventSport').attr("action", "update-sportEvent/"+dataId);
		$('#frm-modify-eventSport').submit();
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

	for (var i = 0; i < allTextLines.length; i++) {
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