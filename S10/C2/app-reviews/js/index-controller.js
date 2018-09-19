$(document).ready(function(){


  $.ajax({
    url: 'http://sosaemanuel-001-site2.htempurl.com/posts/all',
    method: 'GET',
    dataType: 'json',
    success: function(data){
      //console.log(data);
      var top10 = $('#top10');

      for (var i = 0; i < data.length; i++) {
        top10.append('<li class="list-group-item"><p>'+ data[i].Titulo +'</p></li>');
      }

    },
    error: function(err){
      console.log(err);
    }
  });

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
    var passwordComfirm = $('#password-confirm').val();

    //alert("nombre:" + nombre + " email:"
    //+ email + "passw:" + password);

    // validamos que el nombre no sea nulo o vacío
    $('#nombreHelp').text("");
    $('#emailHelp').text("");
    $('#passwordHelp').text("");

    //validamos nombre
    if(!$('#nombre').val()){
      $('#nombreHelp').text("No puede dejar el Nombre nulo o vacío");
    }

    //validamos email
    if(!$('#email').val()){
      $('#emailHelp').text("No puede dejar el Email nulo o vacío");
    }else if(!validateEmail(email)) {
      $('#emailHelp').text("Email no válido");
    }

    //validar password
    //1. no vaya nulo o vacío
    if(!$('#password').val()){
      $('#passwordHelp').text("El password no puede ir nulo o vacío");
    }else if(password !== passwordComfirm) //2. validamos que confirma el password
     {
       $('#passwordHelp').text("La confirmación del password no coincide");
     }

  }); //fin click guardar

  $('#password-confirm').keyup(function(){

    var password = $('#password').val();
    var passwordConfirm = $('#password-confirm').val();

    if(password !== passwordConfirm){
      $('#passwordHelp').text("los passwords no coinciden");
    }else {
      $('#passwordHelp').text("");
    }


  }); //fin keyup password confirm

  function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }// fin validateEmail












}); // fin document ready
