$(document).ready(function(){


  $('#guardar-post').click(function(){


// capturamos los valores del formulario
  var titulo = $('#titulo').val();
  var autor = $('#autor').val();
  var resumen = $('#resumen').val();
  var url = $('#url').val();

  //console.log(titulo + " " + autor + " "+ resumen + " " + url);
  //"seteamos" un objeto js para pasarlo al request
  var post = {
    Titulo: titulo,
    Autor: autor,
    Resumen: resumen,
    Url: url,
    Imagen: null,
    FechaPublicacion: null
  };

  // hacemos la peticion
  $.ajax({
    url: 'http://sosaemanuel-001-site2.htempurl.com/posts/new',
    method: 'POST',
    dataType: 'json',
    data: post,
    success: function(data){
      console.log(data);
      $('#titulo').val("");
      $('#autor').val("");
      $('#resumen').val("");
      $('#url').val("");
    },
    error: function(err){
      console.log(err);
    }
  });

  });

});
