//Argumentos
function suma(a) {
  //parametros
  return a + 2;
}
let resultado = suma(15); //Argumentos es decir le pasamos un argumento al parametro
console.log(resultado);

//Argumentos
function sumas(b, c) {
  //parametros
  return b + c;
}
let resultados = sumas(15, 90); //Argumentos es decir le pasamos un argumento al parametro
console.log(resultados);

console.log(typeof resultados);
//
//
//para accedera todos los elemento de la funcion
function resta(e, u) {
  console.log(arguments);
  return e + u;
}
let resultadoR = resta(15, 90, 54, 34, 2, 2, 6, 7);
console.log(resultadoR);

console.log(typeof resultadoR);
