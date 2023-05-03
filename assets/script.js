$(document).ready(function () {
  let agregarPresupuesto = document.getElementById("agregarPresupuesto");
  let presupuesto = document.getElementById("presupuesto");
  let totalPresupuesto = document.getElementById("totalPresupuesto");
  let presupuestoMonto;
  let ingresarNuevaEntrada = [];
  console.log(ingresarNuevaEntrada);
  let sumaTotalPresup;
  

  agregarPresupuesto.addEventListener("click", function addIncome() {
    let presupuestoNuevo = document.getElementById("presupuesto").value;
    let nuevoValor = parseInt(presupuestoNuevo);
    let add = ingresarNuevaEntrada.push(nuevoValor);
    console.log(add);
    sumaTotalPresup = ingresarNuevaEntrada.reduce((x, y) => {
      return x + y;
    }, 0);
    console.log(sumaTotalPresup);
    document.getElementById("totalPresupuesto").innerText = sumaTotalPresup;
    document.getElementById('presupuesto') = "";
    return sumaTotalPresup;
  });

  console.log(sumaTotalPresup);
});


