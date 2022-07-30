/* Creación de objetos */
class Colección {
  constructor(titulo, sipnosis, precio) {
    this.titulo = titulo;
    this.sipnosis = sipnosis;
    this.precio = precio;
  }
}

const sherlock1 = new Colección(
  "Estudio en escarlata - El signo de los cuatro",
  "Estudio en escarlata es el arranque para nuestrainmortal dupla de héroes: Holmes y Watson.",
  2000
);
const sherlock2 = new Colección(
  /*  (new Image().src = "./img/Libro.jpg"), */
  "Las aventuras de Sherlock Holmes",
  "Siguen las aventuras de estos entrañables personajes",
  1500
);
const sherlock3 = new Colección(
  /* (new Image().src = "./img/Libro.jpg"), */
  "El sabueso de los Baskerville - Memorias de Sherlock Holmes",
  "Se encuentran con un sabueso infernal en una historia en la que se mezcla la ciencia con la magia.",
  2000
);
const sherlock4 = new Colección(
  /* (new Image().src = "./img/Libro.jpg"), */
  "La reaparición de Sherlock Holmes",
  "Sherlock vuelve de la muerte, trayendo consigo nuevas aventuras.",
  1500
);
const sherlock5 = new Colección(
  /* (new Image().src = "./img/Libro.jpg"), */
  "Recuerdos de Sherlock Holmes",
  "Los casos se intensifican al igual que los vicios de Sherlock y la preocupación de Watson",
  1500
);
const sherlock6 = new Colección(
  /* (new Image().src = "./img/Libro.jpg"), */
  "El archivo de Sherlock Holmes",
  "El cúlmine de las aventuras de nuestro gran detective junto a su fiel compañero",
  1500
);

/* Arrays de objetos */
let sherlock;
const sherlockArray = [
  sherlock1,
  sherlock2,
  sherlock3,
  sherlock4,
  sherlock5,
  sherlock6,
];
/* Agregar al carrito */
let productosEnCarro = [];

/* Transferir objetos al DOM */

const sherlockContainer = document.getElementById("sherlock");
const container = document.createElement("div");

/* Funcion para transferir los objetos al dom de todas las colecciones */
function productList(producto, coleccion) {
  for (producto of coleccion) {
    let container = document.createElement("div");
    container.innerHTML = `   <article class = "subcollections_container">
      <div class = "subcollections_items">
      <p>
      <span class ="subcollections_title">  ${producto.titulo}  </span> <br>
      <span class="subcolecctions_text">
      ${producto.sipnosis} <br>
      El precio es $${producto.precio}
      </span>
      </p> 
      <input onclick = "agregarCarrito({ titulo: ${producto.titulo} , precio:${producto.precio} })" class = "button" type="button" value="Agregar al carrito" ></input>
      </div>
      </article>
      `;
    sherlockContainer.appendChild(container);
  }
}

productList(sherlock, sherlockArray);
/* Definicion de variables */
/* const boton = document.getElementsByClassName("button"); */

function agregarCarrito(producto) {
  productosEnCarro.push(producto);
  alert(productosEnCarro);
}

/* boton.addEventListener("click", () => {
  alert("has apretado el boton");
}); */
/* onclick = "agregarCarrito({titulo:  ${producto.titulo}, precio: ${producto.precio})" */

//NO ENTIENDO PORQUE NO ANDA EL PUTO EVENT LISTENER O EL CLIK Y LA CONCHA DE TU MADRE
