$(document).ready(function(){

	$.ajax({ 
 		type: 'GET', 
 		url: 'json/roles.json', 
 		dataType: 'json',
 		success: function (data) {
 			var array =data[1].rol;
 			for (var i = 0; i < array.length; i++) {
 				$("#roles_list, #roles_list2").append("<option value="+ array[i] +">" + array[i] + "</option>");
 			}; 
 		},
 		error:function(msg) {
 			// body...
 			console.log(msg+" Listado de roles fallido");
 		}
 	}); 	
	
	$("select[name=role]").change(function(){
    if( $('select[name=role]').val() === 'Estudiante' ){
    	$('#attendant, #attendant2').show();
    	$('input[name=nameAttendant1]').prop('required',true);
    	$('input[name=phoneAttendant1]').prop('required',true);
    	$('input[name=addressAttendant1]').prop('required',true);
    	$('input[name=cellphoneAttendant1]').prop('required',true);
    } else {
    	$('#attendant, #attendant2').hide();
    	$('input[name=nameAttendant1]').prop('required',false);
    	$('input[name=phoneAttendant1]').prop('required',false);
    	$('input[name=addressAttendant1]').prop('required',false);
    	$('input[name=cellphoneAttendant1]').prop('required',false);
    }
  });


	$('input[type=password]').keyup(function() {
		// declaramos la variable
		var pswd = $(this).val();
		
		// validamos la longitud de carateres
		if ( pswd.length < 8 ) {
			$('#length').removeClass('bg-success').addClass('bg-warning');
		} else {
			$('#length').removeClass('bg-warning').addClass('bg-success');
		}
		
		// validamos la letra
		if ( pswd.match(/[A-z]/) ) {
			$('#letter').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#letter').removeClass('bg-success').addClass('bg-warning');
		}
		
		//validamos la letra mayuscula
		if ( pswd.match(/[A-Z]/) ) {
			$('#capital').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#capital').removeClass('bg-success').addClass('bg-warning');
		}

		//validamos el numero
		if ( pswd.match(/\d/) ) {
			$('#number').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#number').removeClass('bg-success').addClass('bg-warning');
		}

		//validamos caracter especial
		if(pswd.match(/\W/)){
			$('#symbol').removeClass('bg-warning').addClass('bg-success');
		} else {
			$('#symbol').removeClass('bg-success').addClass('bg-warning');	
		}
	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	});

	$('#nameUser').blur(function() {
		var name = $(this).val();
		$.ajax({ 
			type: 'GET', 
		  url: 'getUserName/'+name, 
   		dataType: 'json',
   		success: function (data) {
   			if (!data) {
   				$('#msgUsername').show();
   			}
   			else{
   				$('#msgUsername').hide();
   			}
   		},
   		error:function(msg) {
   			// body...
		   	console.log(msg);
		  }
		});
	});

	$('#Email').blur(function() {
		var email = $(this).val();
		$.ajax({
			type: 'GET',
   		url: 'getEmail/'+email,
   		dataType: 'json',
   		success: function (data) {
   			if (!data) {
   				$('#msgEmail').show();
		   	} else {
		   		$('#msgEmail').hide();
		   	}
		  },
		  error:function(msg) {
		  	// body...
		  	console.log(msg);
		  }
		});
	});

	// Al dar click en el boton Agregar...
	$("#add-user").click(function(){
		$(".table-users").hide(100);
		$(".form-user").show(100);
		$("#form-add-user").show(100);
		$("#form-modify-user").hide(100);
	});


	// Al dar click en el boton Listar...
	$(".list-users").click(function(){
		
		$(".form-user").hide(100);
		$("#form-add-user").hide(100);
		$("#form-modify-user").hide(100);
		$(".table-users").show(100);

	});

	/*
	* Los eventos de los botones Editar y Eliminar se deben declarar diferente debido a que el uso
	* de los scripts de fresh-table causaban un efecto inesperado en el jquery usado antiguamente
	*/
	tableButtonEvent = {
		// Al dar click en el boton Editar...
		edit: function(dataId) {

			$(".table-users").hide(100);
			$(".form-user").show(100);
			$("#form-add-user").hide(100);
			$("#form-modify-user").show(100);

	   	$.ajax({ 
	   		type: 'GET', 
	   		url: '/get-user/'+dataId,
	   		dataType: 'json',
	   		success: function (data) {
	   			user = data.local;
	   			
	   			$("#button_update").attr("id", dataId);

	   			$("#mod_code").val(user.code);
	   			$("#mod_email").val(user.email);
	   			$("#mod_firstname").val(user.firstname);
	   			$("#mod_lastname").val(user.lastname);
	   			$("#roles_list2 option[value='"+user.role+"']").attr("selected","selected");
	   			$("#mod_status option[value='"+user.status+"']").attr("selected","selected");
	   			if(user.role==="Estudiante"){
	   				$('#mod_attendant, #mod_attendant2').show();
	   				$.ajax({ 
				   		type: 'GET', 
				   		url: 'getAttendants/'+dataId, 
				   		dataType: 'json',
				   		success: function (data) {
				   			data.forEach(function(item,key) {
				   				$("#mod_nameAttendant"+(key+1)).val(item.name);
				   				$("#mod_phoneAttendant"+(key+1)).val(item.phone);
				   				$("#mod_addressAttendant"+(key+1)).val(item.address);
				   				$("#mod_cellphoneAttendant"+(key+1)).val(item.cellphone);
				   				$("#idAttendant"+(key+1)).val(item._id);
				   			});
				   		},
				   		error:function(msg) {
				   			// body...
				   			console.log(msg);
				   		}
				   	}); 
	   			}
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
	$('.modify-user').click(function(){

		var dataId = this.id;
		$('#frm-modify-user').attr("action", "modifyUser/"+dataId);		

		$('#frm-modify-user').submit();
	});


	// Al dar click en el boton Cancelar...
	$("#cancel-modify").click(function(){
		
		$(".form-user").hide(100);
		$("#form-add-user").hide(100);
		$("#form-modify-user").hide(100);
		$(".table-users").show(100);

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