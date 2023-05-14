/* PROGRAMA
// - agregar objetos
- imprimir objetos en el DOM
- buscar objetos (buscar movimientos)
// - sumar objetos (mostrar saldo)
*/


let saldo = 0;
console.log(`Saldo inicial: ${saldo}`);
const ingresos = [];
const egresos = [];

alert("Detalle sus ingresos y egresos. Utilice la consola para ver su saldo y busque movimientos dentro de un rango de importes.");

function Ingresos (importe, descripcion, fecha){
    this.importe = importe;
    this.descripcion = descripcion;
    this.fecha = fecha;
}

function Egresos (importe, descripcion, fecha){
    this.importe = importe;
    this.descripcion = descripcion;
    this.fecha = fecha;
}

function ingresarIngresos () {
    let ingreso = new Ingresos (parseFloat(prompt("Importe")), prompt("Detalle"), new Date());
    saldo = saldo+ingreso.importe;
    console.log(`Importe: ${ingreso.importe}, descripción: ${ingreso.descripcion}, Fecha: ${ingreso.fecha}`);
    console.log(`Saldo luego del ingreso: ${saldo}`);
    ingresos.push(ingreso);
}

function ingresarEgresos (){
    let egreso = new Egresos (parseFloat(prompt("Importe")), prompt("Detalle"), new Date());
    saldo = saldo-egreso.importe;
    console.log(`Importe: ${egreso.importe}, descripción: ${egreso.descripcion}, Fecha: ${egreso.fecha}`);
    console.log(`Saldo luego del egreso: ${saldo}`);
    egresos.push(egreso);
}

let cantidadIngresos = parseInt(prompt("Detalle la cantidad de ingresos totales"));
for (i = 0; i < cantidadIngresos; i++){
    ingresarIngresos();
}
let cantidadEgresos = parseInt(prompt("Detalle la cantidad de egresos totales"));
for (i = 0; i < cantidadEgresos; i++){
    ingresarEgresos();
}
console.log(`Arreglo con todos los ingresos: ${ingresos}`);
console.log(`Arreglo con todos los egresos: ${egresos}`);


// let minBuscado = parseFloat(prompt("ingrese el mínimo buscado"));
// let maxBuscado = parseFloat(prompt("ingrese el máximo buscado"));
