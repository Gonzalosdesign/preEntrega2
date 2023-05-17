/* PROGRAMA
- detalle la cantidad de ingresos
- detalle cada ingreso para crear un objeto de la clase Ingresos
- detalle la cantidad de egresos
- detalle cada egreso para crear un objeto de la clase Egresos
- establezca un rango de importes para filtrar los ingresos y mostrar el resultado en alert
*/

let saldo = 0;
const ingresos = [];
const egresos = [];

class Ingresos {
    constructor(importe, descripcion, fecha) {
        this.importe = importe;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
};

class Egresos {
    constructor(importe, descripcion, fecha) {
        this.importe = importe;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
};

function Ingresar (){
    let cantidadIngresos = parseInt(prompt("Detalle la cantidad de movimientos (ingresos) totales"));
    for (i = 0; i < cantidadIngresos; i++){
        let ingreso = new Ingresos (parseFloat(prompt("Importe")), prompt("Detalle"), new Date());
        saldo = saldo+ingreso.importe;
        console.log(`Importe: ${ingreso.importe}, descripción: ${ingreso.descripcion}, Fecha: ${ingreso.fecha}`);
        console.log(`Saldo luego del ingreso: ${saldo}`);
        ingresos.push(ingreso);
    };
};

function Egresar () {
    let cantidadEgresos = parseInt(prompt("Detalle la cantidad de movimientos (egresos) totales"));
    for (i = 0; i < cantidadEgresos; i++){
        let egreso = new Egresos (parseFloat(prompt("Importe")), prompt("Detalle"), new Date());
        saldo = saldo-egreso.importe;
        console.log(`Importe: ${egreso.importe}, descripción: ${egreso.descripcion}, Fecha: ${egreso.fecha}`);
        console.log(`Saldo luego del egreso: ${saldo}`);
        egresos.push(egreso);
    };
};
function filtrar() {
    alert("Para buscar un ingreso detalle el importe mínimo y luego el máximo");
    let minFiltro = parseFloat(prompt ("ingrese el importe mínimo"));
    let maxFiltro = parseFloat(prompt ("ingrese el importe máximo"));
    const filtrados = ingresos.filter((el) => el.importe > minFiltro && el.importe < maxFiltro);
    console.log(`Resultados de la búsqueda, ingresos entre ${minFiltro} y ${maxFiltro}`);
    alert(`Resultados de la búsqueda, ingresos entre ${minFiltro} y ${maxFiltro}:`);
    for (let it of filtrados) {
        console.log(`Importe: ${it.importe}, descripción: ${it.descripcion}, Fecha: ${it.fecha}`);
        alert(`Importe: ${it.importe}, descripción: ${it.descripcion}, Fecha: ${it.fecha}`);
    };
};

console.log(`Saldo inicial: ${saldo}`);
alert("Detalle sus ingresos y egresos. Utilice la consola para ver su saldo y busque movimientos dentro de un rango de importes.");
Ingresar();
Egresar();
filtrar();