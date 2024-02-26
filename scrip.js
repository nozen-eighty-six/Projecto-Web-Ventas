const d = document;
const $carrito = d.getElementById("carrito"),
  elementos1 = d.getElementById("lista-1"),
  lista = d.querySelector("#lista-carrito tbody"),
  vaciarCarritoBtn = d.getElementById("vaciar-carrito");

const insertarCarrito = (elObjecto) => {
  const row = d.createElement("tr");
  row.innerHTML = `
    <td>
    <img src=${elObjecto.image} width=100/>
    </td>
    <td>
    ${elObjecto.title}
    </td>
    <td>
    ${elObjecto.price}
    </td>
    <td>
    <a href="#" class="borrar" data-id=${elObjecto.id}>X</a>
    </td>
    `;
  lista.appendChild(row);
};

const leerDatosElemento = (el) => {
  const infoEl = {
    image: el.querySelector("img").src,
    title: el.querySelector("h3").textContent,
    price: el.querySelector(".precio").textContent,
    id: el.querySelector("a").getAttribute("data-id"),
  };

  insertarCarrito(infoEl);
};
/* 
const comprarElemento = () => {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
  }
};

const eliminarElemento = () => {
  e.preventDefault();

  let elemento, elementoId;

  if (e.target.classList.contains("borrar")) {
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement;
    elementoId = elemento.querySelector("a").getAttribute("data-id");
  }
};

const vaciarCarrito = () => {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  return false;
}; */

function cargarEventListeners() {
 // elementos1.addEventListener("click", comprarElemento);

  //$carrito.addEventListener("click", eliminarElemento);
  //vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

  d.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.matches(".agregar-barrito")) {
        e.preventDefault();
        console.log("Entrando a agregar");
      
      //if (e.target.classList.contains("agregar-carrito")) {
        const elemento = e.target.closest(".product");
        console.log(elemento);
        leerDatosElemento(elemento);
      //}
    }

    if (e.target.matches(".borrar")) {
      e.preventDefault();

      let elemento, elementoId;
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector("a").getAttribute("data-id");

    }

    if (e.target === vaciarCarritoBtn) {
      while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
      }
    }
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  cargarEventListeners();
});
