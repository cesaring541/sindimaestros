$(document).ready(function(){
	// EVENTOS BOTONES CRUD =========================================================================
	//===============================================================================================

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
			$("#form-modify-eventSport").show(100);

			$.ajax({ 
				type: 'GET', 
				url: '/read-sportEvent/'+dataId,
				dataType: 'json',
				success: function (data) {
					$("#button_update").attr("id", dataId);

					$("#genderField").text(data.gender);

					$('#mod_participantsJoineds').selectpicker('val', data.participantsJoineds); // Selecciona las opciones del select multiple
					$('#mod_teams').selectpicker('val', data.teams); // Selecciona las opciones del select multiple
				},
				error:function(msg) {
					// body...
					console.log(msg+"Peticion de datos fallida");
				}
			});
		}
	}


	// Al dar click en el boton Actualizar...
	$('.modify-eventSport').click(function(){

		var dataId = this.id;
		$('#frm-modify-eventSport').attr("action", "update-sportEventInscriptions/"+dataId);
		$('#frm-modify-eventSport').submit();
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