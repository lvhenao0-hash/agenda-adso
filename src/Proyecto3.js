const edad = 18;
const mensaje = edad >= 18
? "Mayor de edad"
: "Menor de edad";
console.log(mensaje); // Mayor de edad

const aprendiz = {
nombre: "Carolina",
ficha: 3223876,
saludar: function() {
console.log(`Hola, soy ${this.nombre}`);
},
mostrarInfo: function() {
console.log(`Ficha: ${this.ficha}`);
}
};
aprendiz.saludar(); // Hola, soy Carolina
aprendiz.mostrarInfo(); // Ficha: 3223876

const fichas = [3223876, 3144585,
3169892];
for (const f of fichas) {
console.log(`Ficha: ${f}`);
}
// Ficha: 3223876
// Ficha: 3144585
// Ficha: 3169892