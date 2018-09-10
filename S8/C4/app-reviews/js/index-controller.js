$(document).ready(function(){
  console.log("Hola mundo");


  var tops = ['Revenge', 'Personal interest', 'liga de la justicia','venom', 'Peter pan'];
  for (var i = 0; i < tops.length; i++) {
    $('#top10').append('<li class="list-group-item"><p>'+tops[i]+'</p></li>');
  }


  $('#guardar').click(function(e){
    console.log($('.navbar'));
    console.log($('#nombre'));
  });

});
