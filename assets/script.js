$(document).ready(function () {
  let agregarPresupuesto = document.getElementById("agregarPresupuesto");
  let presupuesto = document.querySelector("#presupuesto");
  let totalPresupuesto = document.getElementById("totalPresupuesto");
  let ingresarNuevaEntrada = [];
  console.log(ingresarNuevaEntrada);
  let sumaTotalPresup;
  let sumarGastos;
  let nombreGasto = document.getElementById("nombreGasto");
  let montoGasto = document.getElementById("montoGasto");
  let agregarGasto = document.getElementById("agregarGasto");
  let datosGasto = document.getElementById('datosGasto');
  let gasto = {
    id: 0,
    nombre: nombreGasto.value,
    valor: parseInt(montoGasto.value),
  };
  let totalGastos = [];
  console.log(totalGastos);
  let otroGasto;
  
  //agregar presupuesto
  agregarPresupuesto.addEventListener("click", () => {
    let presupuestoNuevo = document.getElementById("presupuesto").value;
    let nuevoValor = parseInt(presupuestoNuevo);
    let add;
    
    if (nuevoValor <= 0) {
      alert('Debe ingresar un monto mayor a 0');
      presupuesto.innerHTML = "";
    } else {
      add = ingresarNuevaEntrada.push(nuevoValor);
      sumaTotalPresup = ingresarNuevaEntrada.reduce((x, y) => { return x + y }, 0);
      console.log(sumaTotalPresup);
      totalPresupuesto.innerText = sumaTotalPresup;
    }
    restarSaldo();
    return sumaTotalPresup;
  });
  // agregar gastos
  agregarGasto.addEventListener("click", () => {
    otroGasto = gasto;
    gasto = {
      id: gasto.id + 1,
      nombre: nombreGasto.value,
      valor: parseInt(montoGasto.value),
    };
    otroGasto.id = otroGasto.id + 1;
    otroGasto.nombre = nombreGasto.value;
    otroGasto.valor = parseInt(montoGasto.value);
    console.log(otroGasto);
    datosGasto.innerHTML += ` 
      <tr id=${otroGasto.id}>
        <td id="idGasto">${otroGasto.id}</td>
        <td id="valueGasto">${otroGasto.valor}</td>
        <td id="nameGasto">${otroGasto.nombre}</td>
        <td><button class="my-2 btn btn-danger" type="button" id="${otroGasto.id}" name="eliminar" title="eliminar"><i class="fas fa-trash"></i></button></td>
      </tr>
      <br>
    `;
    let add = totalGastos.push(otroGasto.valor);
    //sumar total gastos
    sumarGastos = totalGastos.reduce((x, y) => {return x + y}, 0);
    console.log(sumarGastos);
    if (sumarGastos > 0) {
      document.getElementById("totalGastos").innerText = sumarGastos;
    } else {
      document.getElementById("totalGastos").innerText = 'sin gastos';
    }
    restarSaldo();
    return sumarGastos;
  });
  function restarSaldo() {
    sumaTotalPresup = ingresarNuevaEntrada.reduce((x, y) => {return x + y}, 0);
    console.log(sumaTotalPresup);
    sumarGastos = totalGastos.reduce((x, y) => {return x + y}, 0);
    console.log(sumarGastos); 
    let saldoDisponible = sumaTotalPresup - sumarGastos;
    document.getElementById("saldo").innerText = saldoDisponible;
  };
  restarSaldo();
  
  let trash = document.getElementsByClassName("eliminar");
  let id = trash.id;
  let gastoEliminado = trash.addEventListener("click", () => {
    totalGastos.filter((otroGasto) => {
      if (otroGasto.id == id) {
        let filaABorrar = document.getElementById(trash.id);
        filaABorrar.remove();
        console.log(filaABorrar);
        return false;
      }
      return true;
    });
  });
});

//let gastos = totalGastos.push(gasto);
//console.log(totalGastos);