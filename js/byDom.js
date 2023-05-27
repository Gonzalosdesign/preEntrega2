let ingresosTotales = []; //este arreglo acumula los objetos de los movimientosgit 

let saldo = 0;

function mostrarSaldo() {
    console.log(saldo);
    let saldoDisplay = document.getElementById("saldo");
    saldoDisplay.innerHTML = `<h3>Su saldo actual es de: ${saldo}</h3>`;
};

class Ingresos {
    constructor(id, importe, descripcion, fecha) {
        this.id = id;
        this.importe = importe;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
}

let formIngresos = document.getElementById("formIngresos");
    formIngresos.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let inputs = e.target.children;
    let ingreso = new Ingresos (ingresosTotales.length + 1, inputs[0].value, inputs[1].value, new Date());
    ingresosTotales.push(ingreso);//añade el objeto al arreglo
    saldo = saldo+parseFloat(ingreso.importe);
    mostrarSaldo();
    displayPrint();
});

let formBusqueda = document.getElementById("formBusqueda");
        formBusqueda.addEventListener("submit", (e) => {
            e.preventDefault();

            let inputs = e.target.children;
            let minFiltro = inputs[0].value;
            let maxFiltro = inputs[1].value;
            
            let filtrados = ingresosTotales.filter((el) => el.importe > minFiltro && el.importe < maxFiltro);
            console.log(filtrados);
            let found = document.getElementById("found");
            found.innerHTML = "";
            
            for ( const movimiento of filtrados) {
                console.log(`Importe: ${movimiento.importe}, descripción: ${movimiento.descripcion}, Fecha: ${movimiento.fecha}`);
                
                let div = document.createElement("div");
                div.className = `busqueda`;
                div.innerHTML = `
                <h2>Importe: ${movimiento.importe}</h2>
                <p>id: ${movimiento.id}</p>
                <h5>Descripción: descripción: ${movimiento.descripcion}</h5>
                <h6>Fecha: ${movimiento.fecha}</h6>
                `;
                found.append(div);
            };
        });


        function displayPrint() {
            let display = document.getElementById("display");
            display.innerHTML = "";
            
            for ( const movimiento of ingresosTotales) {
                console.log(`Importe: ${movimiento.importe}, descripción: ${movimiento.descripcion}, Fecha: ${movimiento.fecha}`);
                
                let div = document.createElement("div");
                div.className = `busqueda`;
                div.innerHTML = `
                <h2>Importe: ${movimiento.importe}</h2>
                <p>id: ${movimiento.id}</p>
                <h5>Descripción: descripción: ${movimiento.descripcion}</h5>
                <h6>Fecha: ${movimiento.fecha}</h6>
                `;
                display.append(div);
            };
        }