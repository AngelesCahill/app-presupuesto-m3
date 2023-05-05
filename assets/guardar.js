agregarGasto.addEventListener("click", () => {
  gasto = {
    id: gasto.id + 1,
    nombre: nombreGasto.value,
    valor: parseInt(montoGasto.value),
  };
  if (gasto.valor <= 0) {
    alert("El monto del Gasto debe ser mayor que 0");
  } else {
    nombreGasto.innerHTML = "";
    montoGasto.innerHTML = "";
    let gastos = totalGastos.push(gasto);
    console.log(totalGastos);
    addTabla();
  }
  return totalGastos;
});

const addTabla = (datos) => {
  totalGastos.forEach((datos) => {
    datosGasto.innerHTML += `
      <tr id=${datos.id}>
        <td id="idGasto">${datos.id}</td>
        <td id="valueGasto">${datos.valor}</td>
        <td id="nameGasto">${datos.nombre}</td>
        <td><button class="my-2 btn btn-danger" type="button" id="${datos.id}" name="eliminar" title="eliminar"><i class="fas fa-trash"></i></button></td>
      </tr>
      <br>
    `;
  });
};
