$(document).ready(function(){

	$.ajax({ 
 		type: 'GET', 
 		url: 'json/municipalities.json', 
 		dataType: 'json',
 		success: function (data) {
 			var array = data[1].municipality;
 			for (var i = 0; i < array.length; i++) {
 				$("#municipality_list, #mod_municipality_list").append("<option value="+ array[i] +">" + array[i] + "</option>");
 			};
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
	   		url: '/read-team/'+dataId,
	   		dataType: 'json',
	   		success: function (data) {

	   			// Si en el select múltiple hay miembros previamente seleccionados, los deselecciona
	   			//refrescando el select
	   			$("#mod_members_list option:selected").removeAttr("selected");
	   			
					$("#button_update").attr("id", dataId);

					$("#mod_name").val(data.name);
					$("#mod_zone_list option[value='"+data.zone+"']").attr("selected","selected");
					$("#mod_municipality_list option[value='"+data.municipality+"']").attr("selected","selected");

					// Selecciona las opciones del select multiple
					for (var i = 0; i < data.members.length; i++) {
						$("#mod_members_list option[value='" + data.members[i] + "']").prop("selected", true);
					}
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