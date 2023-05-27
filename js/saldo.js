let saldo = 0;

function mostrarSaldo() {
    console.log(saldo);
    let saldoDisplay = document.getElementById("saldo");
    saldoDisplay.innerHTML = `<h3>Su saldo actual es de: ${saldo}</h3>`;
};