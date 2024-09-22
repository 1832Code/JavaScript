//Objectos es de Referencia
/*
Son una agrupacion de datos
*/
let nombre = "Darwin";
let number = 19;
let anime = "Super Campeones";

let personaje = {
  nombre: "Kin You",
  number: 20,
  anime: "Ben 10",
};
console.log(personaje);
console.log(personaje.nombre); //para acceder a una propiedad del objeto
console.log(personaje["anime"]); //para acceder a una propiedad del objeto

personaje.nombre = "Hola"; //para modificar un elemento del objeto

delete personaje.anime;//para eliminar un elemento del objeto
console.log(personaje);
