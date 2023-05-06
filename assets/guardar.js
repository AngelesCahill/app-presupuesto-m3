    let borrar = document.getElementById(`${otroGasto.id}`);
      borrar.addEventListener("click", function () {
      console.log("eliminaras esta fila", otroGasto.id);
      console.log(otroObjGasto);
      objEliminado = otroGasto;
      objEliminado.id = otroGasto.id;
      objEliminado.nombre = 'Eliminado';
      objEliminado.valor = 0;
    });
