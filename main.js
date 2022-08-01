/* Creación de objetos */
class Colección {
  constructor(imagen, titulo, sipnosis, precio) {
    this.imagen = imagen;
    this.titulo = titulo;
    this.sipnosis = sipnosis;
    this.precio = precio;
  }
}

const sherlock1 = new Colección(
  "../../img/sherlock/escarlata.gif",
  "Estudio en escarlata - El signo de los cuatro",
  "Estudio en escarlata es el arranque para nuestrainmortal dupla de héroes: Holmes y Watson.",
  2000
);
const sherlock2 = new Colección(
  "../../img/sherlock/aventuras.jpg",
  "Las aventuras de Sherlock Holmes",
  "Siguen las aventuras de estos entrañables personajes",
  1500
);
const sherlock3 = new Colección(
  "../../img/sherlock/sabueso.jpg",
  "El sabueso de los Baskerville - Memorias de Sherlock Holmes",
  "Se encuentran con un sabueso infernal en una historia en la que se mezcla la ciencia con la magia.",
  2000
);
const sherlock4 = new Colección(
  "../../img/sherlock/reaparicion.jpg",
  "La reaparición de Sherlock Holmes",
  "Sherlock vuelve de la muerte, trayendo consigo nuevas aventuras.",
  1500
);
const sherlock5 = new Colección(
  "../../img/sherlock/valle.gif",
  "El valle del terror - Recuerdos de Sherlock Holmes",
  "Los casos se intensifican al igual que los vicios de Sherlock y la preocupación de Watson",
  1500
);
const sherlock6 = new Colección(
  "../../img/sherlock/archivo.webp",
  "El archivo de Sherlock Holmes",
  "El cúlmine de las aventuras de nuestro gran detective junto a su fiel compañero",
  1500
);

/* Arrays de objetos */
const sherlockArray = [
  sherlock1,
  sherlock2,
  sherlock3,
  sherlock4,
  sherlock5,
  sherlock6,
];

/* Funciones */
function agregarCarrito(producto) {
  Toastify({
    text: "Se agregó al carrito!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#3d9253",
      fontSize: "20px",
    },
  }).showToast();
  /* productosEnCarro.push(producto);
  alert(productosEnCarro); */
}

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
    <input onclick = "agregarCarrito()"  class = "button" type="button" value="Agregar al carrito" ></input>
    </div>
    </article>
    `;
  }
  document.getElementById(idHtml).innerHTML = aux;
}

/* Entrega operadores avanzados */

document.getElementById("sherlock") && listRender(sherlockArray, "sherlock");
const productosEncarro =
  JSON.parse(localStorage.getItem("productosEnCarro")) || [];

/* {titulo: ${collectionArray[i].titulo}, precio: $${collectionArray[i].precio}} */
/* {Titulo: ${collectionArray[i].titulo}, Precio: $${collectionArray[i].precio}} */

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
