$(document).ready(function(){
	// EVENTOS BOTONES CRUD =========================================================================
	//===============================================================================================

	/*
	* Los eventos de los botones Editar y Eliminar se deben declarar diferente debido a que el uso
	* de los scripts de fresh-table causaban un efecto inesperado en el jquery usado antiguamente
	*/
	tableButtonEvent = {
		// Al dar click en el boton Editar...
		edit: function(dataId) {

			$(".table-eventsSports").hide(100);
			$(".form-eventSport").show(100);
			$("#form-modify-eventSport").show(100);

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
					$("#mod_category").val(data.category);
					$("#mod_startDate").val(moment(data.startDate).format('YYYY-MM-DD'));
					$("#mod_endDate").val(moment(data.endDate).format('YYYY-MM-DD'));
					$("#mod_typeOfParticipation").val(data.typeOfParticipation);
					$("#mod_gender").val(data.gender);
					$('#mod_teams').selectpicker('val', data.teams); // Selecciona las opciones del select multiple
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
		}
	}


	// Al dar click en el boton Actualizar...
	$('.modify-eventSport').click(function(){

		var dataId = this.id;
		$('#frm-modify-eventSport').attr("action", "update-sportEventInscription/"+dataId);
		$('#frm-modify-eventSport').submit();
	});


	// Al dar click en el boton Cancelar...
	$("#cancel-modify").click(function(){
		
		$(".form-eventSport").hide(100);
		$("#form-add-eventSport").hide(100);
		$("#form-modify-eventSport").hide(100);
		$(".table-eventsSports").show(100);

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