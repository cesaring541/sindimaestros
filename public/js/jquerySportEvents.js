$(document).ready(function(){

  // Al dar click en el boton Editar...
  $('.show-modify-form').click(function(){
    var dataId = this.id;

    $.ajax({ 
      type: 'GET', 
      url: '/read-sportEvent/'+$(this).attr("id"),
      dataType: 'json',
      success: function (data) {
        $("#button_update").attr("id", dataId);

        $("#mod_code").val(data.code);
        $("#mod_username").val(data.username);
        $("#mod_email").val(data.email);
        $("#mod_firstname").val(data.firstname);
        $("#mod_lastname").val(data.lastname);
        $("#roles_list2 option[value='"+data.role+"']").attr("selected","selected");
        $("#status_list option[value='"+data.status+"']").attr("selected","selected");
      },
      error:function(msg) {
        // body...
        console.log(msg+"Peticion de datos fallida");
      }
    });
  });


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


  // Al dar click en el boton Eliminar...
  $('.delete-user').click(function(){

    var dataId = this.id;
    var clase = "."+dataId; //Cada fila de la tabla posee una clase propia
    $.ajax({
        type    : 'get',
        url     : '/destroyUser/' + dataId, //Funcion de borrado
        success : function(response) {
          console.log(response);
          if ( response === 'error') {
                alert('Error al eliminar usuario');
            } else if (response === 'success') {
                demo.initChartist();
                 $(clase).remove(); 
                 alert("Usuario eliminado satisfactoriamente");   
            /** $.notify({
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