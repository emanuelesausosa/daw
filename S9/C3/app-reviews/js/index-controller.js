$(document).ready(function(){

  //console.log("Hola desde js");

  // 1. obtener mediante el id
  //console.log($('#email'));

  //2. obtener mediante la clase
  //console.log($('.form-group'));

  //3. obtener mediante el selector
  //console.log($('input'));

  //4. obtiene mediante el Nombres
  //console.log($('input[name=apellido]'));


  /*
  1.Eventos
  */
  $('#guardar').click(function(){

    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var password = $('#password').val();

    //alert("nombre:" + nombre + " email:"
    //+ email + "passw:" + password);

    // validamos que el nombre no sea nulo o vacío
    $('#nombreHelp').text("");
    $('#emailHelp').text("");

    //validamos
    if(!$('#nombre').val()){
      $('#nombreHelp').text("No puede dejar el Nombre nulo o vacío");
    }

    //validamos email
    if(!$('#email').val()){
      $('#emailHelp').text("No puede dejar el Email nulo o vacío");
    }else if(!validateEmail(email)) {
      $('#emailHelp').text("Email no válido");
    }
  });

  function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }












});
