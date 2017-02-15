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

        $("#mod_nameEvent").val(data.nameEvent);
        $("#mod_startDate").val(data.startDate);
        $("#mod_typeOfParticipation option[value='"+data.typeOfParticipation+"']").attr("selected","selected");
        $("#mod_category option[value='"+data.category+"']").attr("selected","selected");
        $("#mod_endDate").val(data.endDate);
        $("#mod_gender option[value='"+data.gender+"']").attr("selected","selected");
      },
      error:function(msg) {
        // body...
        console.log(msg+" Peticion de datos fallida");
      }
    });
  });


  // Al dar click en el boton Actualizar...
  $('.modify-obj').click(function(){

    var dataId = this.id;
    
    $('#frm-modify-obj').attr("action", "update-sportEvent/"+dataId);   

    $('#frm-modify-obj').submit();
  });
});