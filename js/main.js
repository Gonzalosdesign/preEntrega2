/* PROGRAMA
- detalle la cantidad de ingresos
- detalle cada ingreso
- detalle la cantidad de egresos
- detalle cada egreso
- establezca un rango de iportes para filtrar los ingresos
*/

let saldo = 0;
const ingresos = [];
const egresos = [];

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

function Ingresar (){
    let cantidadIngresos = parseInt(prompt("Detalle la cantidad de ingresos totales"));
    for (i = 0; i < cantidadIngresos; i++){
        let ingreso = new Ingresos (parseFloat(prompt("Importe")), prompt("Detalle"), new Date());
        saldo = saldo+ingreso.importe;
        console.log(`Importe: ${ingreso.importe}, descripción: ${ingreso.descripcion}, Fecha: ${ingreso.fecha}`);
        console.log(`Saldo luego del ingreso: ${saldo}`);
        ingresos.push(ingreso);
    }
}

function Egresar () {
    let cantidadEgresos = parseInt(prompt("Detalle la cantidad de egresos totales"));
    for (i = 0; i < cantidadEgresos; i++){
        let egreso = new Egresos (parseFloat(prompt("Importe")), prompt("Detalle"), new Date());
        saldo = saldo-egreso.importe;
        console.log(`Importe: ${egreso.importe}, descripción: ${egreso.descripcion}, Fecha: ${egreso.fecha}`);
        console.log(`Saldo luego del egreso: ${saldo}`);
        egresos.push(egreso);
    }
}
function filtrar() {
    alert("Para buscar un ingreso detalle el importe mínimo y luego el máximo");
    let minFiltro = parseFloat(prompt ("ingrese el importe mínimo"));
    let maxFiltro = parseFloat(prompt ("ingrese el importe máximo"));
    const filtrados = ingresos.filter((el) => el.importe > minFiltro && el.importe < maxFiltro);
    console.log(`Reultados de la búsqueda, ingresos entre ${minFiltro} y ${maxFiltro}`);
    for (let it of filtrados) {
        console.log(`Importe: ${it.importe}, descripción: ${it.descripcion}, Fecha: ${it.fecha}`);
    };
};

console.log(`Saldo inicial: ${saldo}`);
alert("Detalle sus ingresos y egresos. Utilice la consola para ver su saldo y busque movimientos dentro de un rango de importes.");
Ingresar();
Egresar();
filtrar();