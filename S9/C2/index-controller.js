
/*
var x = true; // booleano
var y = false; // booleano

if(x || y) { // esto es un o, es más fexible
  console.log("esto es cierto, por eso estoy aquí");
}else{
  console.log("EStoy en el else");
}

if(x && y) { // esto es un y, es restrictivo
  console.log("esto es cierto, por eso estoy aquí");
}else{
  console.log("EStoy en el else");
}*/

/*
if (y) {
  console.log("esto es cierto, por eso estoy aquí");
}else{
  console.log("EStoy en el else");
}*/

var numeros_pares = [2, 4, 6, 8, 10];
console.log(numeros_pares);

// imprimo un elemento del arreglo
console.log(numeros_pares[0]);


var frutas = ["Pera", "Manzana", "Piña", "Fresa"];

//console.log(frutas);
//console.log(frutas.length);

for(var i = 0; i < frutas.length; i++){
  console.log("Fruta #"+ i + " " + frutas[i]);
}

// remove
frutas.splice(0, 3);
console.log(frutas);

//push
frutas.push("Mango");
console.log(frutas);



//Objetos
var fruta = {
  nombre: "Limon",
  sabor: "acido",
  peso: 1
};

var canasta = {
  precio: 100,
  frutas: [
      {
        nombre: "Limon",
        sabor: "acido",
        peso: 1
      },
      {
        nombre: "Pera",
        sabor: "dulce",
        peso: 2
      }
  ]
};


console.log(canasta);

// esto es una funcion, uso y declaracion
console.log(suma(5,10));

function suma(x, y){
  return x + y;
};
