$(document).ready(function () {
  let agregarPresupuesto = document.getElementById("agregarPresupuesto");
  let presupuesto = document.querySelector("#presupuesto");
  let totalPresupuesto = document.getElementById("totalPresupuesto");
  let presupuestoMonto;
  let ingresarNuevaEntrada = [];
  console.log(ingresarNuevaEntrada);
  let sumaTotalPresup;
  

  agregarPresupuesto.addEventListener("click", function () {
    let presupuestoNuevo = document.getElementById("presupuesto").value;
    let nuevoValor = parseInt(presupuestoNuevo);
    let add;
    if (nuevoValor <= 0) {
      alert('Debe ingresar un monto mayor a 0');
      presupuesto.innerHTML = " ";
    } else {
        add = ingresarNuevaEntrada.push(nuevoValor);
        sumaTotalPresup = ingresarNuevaEntrada.reduce((x, y) => {return x + y}, 0);
        console.log(sumaTotalPresup);
        document.getElementById("totalPresupuesto").innerText = sumaTotalPresup;
        return sumaTotalPresup;
    }
  });
});


