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
  productosEnCarro.splice(id, 1);
  localStorage.setItem("productosEnCarro", JSON.stringify(productosEnCarro));
  cartRender();
}

//PONER EN CSS QUE EL ARTICLIE SUBCOLLECTIONS_CONTAINER TENGA COMO MAXIMO 400 * 509 o 500*615

function listRender(collectionArray, idHtml) {
  let aux = "";
  for (let i = 0; i < collectionArray.length; i++) {
    aux =
      aux +
      `<article class = "subcollections_container">
    <div class = "subcollections_items">
    <img class = "subcollections_img" src=" ${collectionArray[i].imagen}" alt="">
    <p>
    <span class ="subcollections_title">  ${collectionArray[i].titulo}  </span> <br>
    <span class="subcolecctions_text">
    ${collectionArray[i].sipnosis} <br>
    El precio es $${collectionArray[i].precio}
    </span>
    </p> 
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
    <div class = "d-flex justify-content-between align-items-center p-3 w-345 h-45">
    <p class ="mb-0">  ${productosEnCarro[i].titulo}  </p> <br>
    <p class="mb-0">
    $${productosEnCarro[i].precio} <br>
    </p>
    <p onclick = "borrarCarro(${i}) "role="button">🗑️</p>
    </div> 
    </article>
    `;
  }
  document.getElementById("carrito").innerHTML = aux;
}

/* Async - Await */

const renderSherlock = async () => {
  const resp = await fetch("../../JSON/sherlock.json");
  const sherlockArray = await resp.json();
  document.getElementById("sherlock") && listRender(sherlockArray, "sherlock");
};
const renderEsdla = async () => {
  const resp = await fetch("../../JSON/esdla.json");
  const esdlaArray = await resp.json();
  document.getElementById("esdla") && listRender(esdlaArray, "esdla");
};
const renderWitcher = async () => {
  const resp = await fetch("../../JSON/witcher.json");
  const witcherArray = await resp.json();
  document.getElementById("witcher") && listRender(witcherArray, "witcher");
};
const renderPoe = async () => {
  const resp = await fetch("../../JSON/poe.json");
  const poeArray = await resp.json();
  document.getElementById("poe") && listRender(poeArray, "poe");
};

renderSherlock();
renderEsdla();
renderWitcher();
renderPoe();

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
