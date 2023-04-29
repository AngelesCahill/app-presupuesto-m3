let agregarPresupuesto = document.getElementById("agregarPresupuesto");
let presupuesto = document.getElementById("presupuesto");
let totalPresupuesto;
let presupuestoMonto;

function showValue() {
    let presupuesto = document.getElementById("presupuesto").value;
    let nuevoValor = parseInt(presupuesto);
    console.log(nuevoValor);
    document.getElementById("totalPresupuesto").innerText = nuevoValor;
    return nuevoValor;
};
let income = showValue();
console.log(income);