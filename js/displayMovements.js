function displayPrint() {
    let display = document.getElementById("display");
    display.innerHTML = "";
    
    for ( const movimiento of ingresosTotales) {
        console.log(`Importe: ${movimiento.importe}, descripción: ${movimiento.descripcion}, Fecha: ${movimiento.fecha}`);
        
        let div = document.createElement("div");
        div.className = `busqueda`;
        div.innerHTML = `
        <h2>Importe: ${movimiento.importe}</h2>
        <h5>Descripción: descripción: ${movimiento.descripcion}</h5>
        <h6>Fecha: ${movimiento.fecha}</h6>
        `;
        display.append(div);
    };
}