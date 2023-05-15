/* PROGRAMA
script en desarrollo, por favor no evaluar! XD
*/

let saldo = 0;

function Movimientos (importe, descripcion, fecha){
    this.importe = importe;
    this.descripcion = descripcion;
    this.fecha = fecha;
}

let ingresos = document.getElementById("ingresos");
    ingresos.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let inputs = e.target.children;
    console.log(inputs[1].value);

    let Movimiento = new Movimientos (inputs[0].value, inputs[1].value, new Date());
    console.log(Movimiento.importe);
    
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Importe: ${Movimiento.importe}</h2>
    <h5>Descripción: ${Movimiento.descripcion}</h5>
    <h6>Fecha: ${Movimiento.fecha}</h6>
    `;
    document.body.append(div);

    saldo = (saldo + Movimiento.importe);
});

let saldoDisplay = document.getElementById("saldo");
    saldoDisplay.innerHTML = `<h3>Saldo: ${saldo}</h3>`;