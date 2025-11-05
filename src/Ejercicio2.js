
const nombre = "Vanessa";
const aprendiz = {
    ficha: 3169901
};
console.log("==================");
console.log("SISTEMA DE NOTAS SENA");
console.log("==================")
console.log(`Ficha: ${aprendiz.ficha}`);
const notas = [4.0, 1.5, 3.8, 1.0, 2.5];

const promedio = (notas [0] + notas[1] + notas[2] + notas[3])/ 4;

console.log(`Aprendiz: ${nombre}`);
console.log("==================")
console.log(`Promedio: ${promedio.toFixed(2)}`);
console.log(`Estado: ${promedio >= 3 ? 'Aprobado' : 'Reprobado'}`);


