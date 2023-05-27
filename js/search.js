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
                <h5>Descripción: descripción: ${movimiento.descripcion}</h5>
                <h6>Fecha: ${movimiento.fecha}</h6>
                `;
                found.append(div);
            };
        });