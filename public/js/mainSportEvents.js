$(document).ready(function(){
	$.ajax({ 
 		type: 'GET', 
 		url: 'json/municipalities.json', 
 		dataType: 'json',
 		success: function (data) {
 			var array = data[1].municipality;
 			for (var i = 0; i < array.length; i++) {
 				$("#municipality_list, #mod_municipality_list, #mod_municipalityWorking_list, #municipalityWorking_list, #municipalitySindical_list, #mod_municipalitySindical_list" ).append("<option value="+ array[i] +">" + array[i] + "</option>");
 			};
 		},
 		error:function(msg) {
 			console.log(msg+" Listado de objetos fallido");
 		}
 	});

 	$('#typeOfParticipation').on('change', function() { 
 		$("#sport").empty();	
 		//$("#sport option:selected").removeAttr("selected");
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
 		}else if ($('#typeOfParticipation').val()=="Equipo") {
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
 		}else if($('#typeOfParticipation').val()=="Individual") {
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

	// Al dar click en el boton Agregar...
	$("#add-eventsSports").click(function(){
		$(".table-eventsSports").hide(100);
		$(".form-eventSport").show(100);
		$("#form-add-eventSport").show(100);
		$("#form-modify-eventSport").hide(100);
	});


	// Al dar click en el boton Listar...
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

	   	$.ajax({ 
	   		type: 'GET', 
	   		url: '/read-sportEvent/'+dataId,
	   		dataType: 'json',
	   		success: function (data) {	   			
	   			$("#button_update").attr("id", dataId);

	   			$("#mod_nameEvent").val(data.nameEvent);
	   			$("#mod_sport").val(data.sport);
	   			$("#mod_category").val(data.category);
	   			$("#mod_startDate").val(data.startDate);
	   			$("#mod_endDate").val(data.endDate);
	   			$("#mod_numberOfTeams").val(data.numberOfTeams);
	   			$("#mod_typeOfParticipation").val(data.typeOfParticipation);
	   			$("#mod_gender").val(data.gender);
	   			
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
	$('.modify-eventSport').click(function(){

		var dataId = this.id;
		$('#frm-modify-eventSport').attr("action", "update-sportEvent/"+dataId);		

		$('#frm-modify-eventSport').submit();
	});


	// Al dar click en el boton Cancelar...
	$("#cancel-modify").click(function(){
		
		$(".form-eventSport").hide(100);
		$("#form-add-eventSport").hide(100);
		$("#form-modify-eventSport").hide(100);
		$(".table-eventsSports").show(100);

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