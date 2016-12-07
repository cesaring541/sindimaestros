$(document).ready(function(){

	
	// Al dar click en el boton Listar...
	$(".list-table").click(function(){
		
		$("#frm-modify").hide(100);
		$("#form-modify").hide(100);
		$(".table-info").show(100);

	});

	/*
	* Los eventos de los botones Editar y Eliminar se deben declarar diferente debido a que el uso
	* de los scripts de fresh-table causaban un efecto inesperado en el jquery usado antiguamente
	*/
	tableButtonEvent = {
		// Al dar click en el boton Editar...
		edit: function(dataId) {

			$(".table-info").hide(100);
			$("#frm-modify").show(100);
			$("#form-modify").show(100);

			$.ajax({ 
		   		type: 'GET', 
		   		url: '/read-joined/'+dataId,
		   		dataType: 'json',
		   		success: function (data) {
		   			
		   			$(".nameField").text(data.fullName);
		   			$("#nameField").val(data._id);
		   		},
		   		error:function(msg) {
		   			// body...
		   			console.log(msg+"Peticion de datos fallida");
		   		}
		   	});
	   	}
	}


	// Al dar click en el boton Cancelar...
	$(".cancel-modify").click(function(){
		
		$("#frm-modify").hide(100);
		$("#form-modify").hide(100);
		$(".table-info").show(100);

	});
});