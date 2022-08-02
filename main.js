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

const esdla1 = new Colección(
  "../../img/Libro.jpg",
  "El Hobbit",
  "Las aventuras de Bilbo Bolsón, en las que cuentan como un Hobbit de La Comarca sorprendió a todos y volvio ileso de una aventura fantástica",
  2500
);
const esdla2 = new Colección(
  "../../img/Libro.jpg",
  "El señor de los anillos - La comunidad del anillo",
  "Un anillo para gobernarlos a todos, una comunidad que se compromete a terminar con el mal que surge desde las fauces de Mordor",
  2000
);
const esdla3 = new Colección(
  "../../img/Libro.jpg",
  "El señor de los anillos - Las dos torres",
  "La separación de la comunidad, la traición del mago blanco, y la defensa de Rohan son los ejes de esta nueva entrega de la epopeya fantastica mas aclamada. ",
  2000
);
const esdla4 = new Colección(
  "../../img/Libro.jpg",
  "El señor de los anillos - El retorno del rey",
  "La batalla final esta aquí, el destino de la tierra media se define desde dos frentes, en los campos del Pelennor y dentro del mismo Mordor",
  2000
);

const witcher1 = new Colección(
  "../../img/Libro.jpg",
  "El último deseo",
  "Esta antología consta de ocho cuentos. Geralt de Rivia, tras ser herido en su lucha con la Estrige de Wizima, descansa en un templo. Durante ese lapso tiene recuerdos de eventos recientes de su vida, cada uno formando una historia en sí.",
  1800
);
const witcher2 = new Colección(
  "../../img/Libro.jpg",
  "La espada del destino",
  "Es el segundo libro en La saga del brujo de Andrzej Sapkowski. Las historias cortas en esta colección introducen algunos de los personajes que se convertirán en personajes principales en las novelas. ",
  1800
);
const witcher3 = new Colección(
  "../../img/Libro.jpg",
  "La sangre de los elfos",
  "Geralt huye con Ciri a Kaer Morhen, donde la pequeña heredera de Cintra aprende a luchar como un brujo junto con Geralt y el resto de los brujos que pasan el invierno en dicha fortaleza olvidada.",
  1800
);
const witcher4 = new Colección(
  "../../img/Libro.jpg",
  "Tiempo de odio",
  "Yennefer y Ciri se dirigen a Gors Velen. Allí pasarán a la isla de Thanedd, donde Yennefer participará en una reunión general de hechiceros para tratar el tema de la guerra y dejará a la niña en Aretusa.",
  1800
);
const witcher5 = new Colección(
  "../../img/Libro.jpg",
  "Bautismo de fuego",
  "Tras los incidentes de Thanned, las principales hechiceras supervivientes se reúnen con la idea de refundar un Consejo único que incluya a todas las practicantes de magia y con ánimo de influir en el futuro que surja una vez acabada la guerra, con el consiguiente espacio vacante para cuando llegue el momento de la incorporación de Ciri.",
  1800
);
const witcher6 = new Colección(
  "../../img/Libro.jpg",
  "La torre de la golondrina",
  "En esta ocasión, el punto de partida es la curación y recuperación de Ciri a manos de Vysogota de Corvo, un anciano eremita que vive en soledad oculto en un pantano, al que va explicando todas las aventuras y desventuras que ha sufrido para llegar moribunda y con la cara prácticamente destrozada ante él.",
  1800
);
const witcher7 = new Colección(
  "../../img/Libro.jpg",
  "	La dama del lago",
  "La saga de Geralt de Rivia llega a su final a partir de los relatos de algunos personajes surgidos a lo largo de los libros anteriores, que van recordando el pasado.",
  1800
);
const witcher8 = new Colección(
  "../../img/Libro.jpg",
  "Estación de tormentas",
  "Poco sabía el brujo Geralt de Rivia lo que le esperaba al acudir a la villa costera de Kerack. Primero fue acusado injustamente de desfalco, luego fue misteriosamente liberado bajo fianza, y finalmente descubrió que sus preciadas espadas, dejadas en depósito al entrar en la ciudad, habían desaparecido.",
  1800
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

const esdlaArray = [esdla1, esdla2, esdla3, esdla4];
const witcherArray = [
  witcher1,
  witcher2,
  witcher3,
  witcher4,
  witcher5,
  witcher6,
  witcher7,
  witcher8,
];

/* Funciones con toastify*/
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
document.getElementById("esdla") && listRender(esdlaArray, "esdla");
document.getElementById("witcher") && listRender(witcherArray, "witcher");

const productosEnCarro =
  JSON.parse(localStorage.getItem("productosEnCarro")) || [];

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
