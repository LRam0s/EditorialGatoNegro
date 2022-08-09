let aux = localStorage.getItem("productosEnCarro");
let productosEnCarro;
if (!aux) {
  productosEnCarro = [];
} else {
  productosEnCarro = JSON.parse(aux);
  cartRender();
}

/* Funciones con toastify*/
function agregarCarrito(producto) {
  Toastify({
    text: "Se agregó al carrito!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "bottom",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#3d9253",
      fontSize: "20px",
    },
  }).showToast();
  productosEnCarro.push(producto);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  cartRender();
}

function borrarCarro(id) {
  Swal.fire({
    title: "¿Desea borrar este producto de su carrito?",
    showDenyButton: true,
    confirmButtonText: "Borrar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("El producto ha sido eliminado del carrito.", "", "success"),
        productosEnCarro.splice(id, 1);
      localStorage.setItem(
        "productosEnCarro",
        JSON.stringify(productosEnCarro)
      );
      cartRender();
    } else if (result.isDenied) {
      Swal.fire("El producto no ha sido eliminado", "", "info");
    }
  });
}
function borrarCompleto() {
  productosEnCarro = [];
  cartRender();
}

function listRender(collectionArray, idHtml, mod) {
  let aux = "";
  for (let i = 0; i < collectionArray.length; i++) {
    aux =
      aux +
      `<article class = "subcollections_container">
    <div class = "subcollections_items">
    <img class = "subcollections_img" src=" ${collectionArray[i].imagen}" alt="">
    <p class="subcolecctions_text${mod}">
    <span class ="subcollections_title">  ${collectionArray[i].titulo}  </span> <br>
    <span class="subcolecctions_text">
    ${collectionArray[i].sipnosis} <br>
    </span>
    </p> 
    <span class="subcolecctions_text--price">
    Precio: $${collectionArray[i].precio}
    </span>
    <input onclick = "agregarCarrito({titulo: '${collectionArray[i].titulo}', precio: ${collectionArray[i].precio}})"  class = "button" type="button" value="Agregar al carrito" ></input>
    </div>
    </article>
    `;
  }
  document.getElementById(idHtml).innerHTML = aux;
}

function cartRender() {
  let aux = "";
  for (let i = 0; i < productosEnCarro.length; i++) {
    aux =
      aux +
      `
    <article class = "border  2px solid">
    <div class = "d-flex justify-content-between align-items-center p-3 w-345 h-45" style="
    width: 360px">
    <p class ="mb-0">  ${productosEnCarro[i].titulo}  </p> <br>
    <div class "d-flex justify-content-end">
    <p class="mb-0">
    $${productosEnCarro[i].precio}
    </p>
    <p onclick = "borrarCarro(${i}) "role="button" class="d-flex justify-content-center">🗑️</p>
    </div >
    </div> 
    </article>
    `;
  }
  document.getElementById("carrito").innerHTML = aux;
  totalCart();
}

function sumaTotal() {
  if (productosEnCarro) {
    let cont = 0;
    for (let i = 0; i < productosEnCarro.length; i++) {
      cont = cont + productosEnCarro[i].precio;
    }
    return cont;
  }
}

function totalCart() {
  let aux = "";
  let total = sumaTotal();
  aux =
    aux +
    `<h3> Total: $ ${total}</h3>
    `;
  document.getElementById("totalCart").innerHTML = aux;
}

/* Async - Await */

const renderSherlock = async () => {
  const resp = await fetch("../../JSON/sherlock.json");
  const sherlockArray = await resp.json();
  document.getElementById("sherlock") &&
    listRender(sherlockArray, "sherlock", "--sherlock");
};
const renderEsdla = async () => {
  const resp = await fetch("../../JSON/esdla.json");
  const esdlaArray = await resp.json();
  document.getElementById("esdla") &&
    listRender(esdlaArray, "esdla", "--esdla");
};
const renderWitcher = async () => {
  const resp = await fetch("../../JSON/witcher.json");
  const witcherArray = await resp.json();
  document.getElementById("witcher") &&
    listRender(witcherArray, "witcher", "--witcher");
};
const renderPoe = async () => {
  const resp = await fetch("../../JSON/poe.json");
  const poeArray = await resp.json();
  document.getElementById("poe") && listRender(poeArray, "poe", "--poe");
};
const renderAll = async () => {
  const resp = await fetch("../../JSON/all.json");
  const allArray = await resp.json();
  document.getElementById("all") && listRender(allArray, "all", "--all");
};

renderSherlock();
renderEsdla();
renderWitcher();
renderPoe();
renderAll();

/* Sweet alert */
function launchingAlert() {
  Swal.fire({
    title:
      "Ingrese su correo electrónico para que le avisemos cuando este disponible.",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showDenyButton: true,
    confirmButtonText: "Confirmar",
    denyButtonText: `No me interesa`,
    showLoaderOnConfirm: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Su correo ha sido registrado.", "", "success");
    } else if (result.isDenied) {
      Swal.fire(
        "No se preocupe, puede ingresar desde colecciones cuando este disponible.",
        "",
        "info"
      );
    }
  });
}

function contactAlert() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Tus datos han sido guardados. Nos comunicaremos a la brevedad.",
    showConfirmButton: false,
    timer: 2000,
  });
}
