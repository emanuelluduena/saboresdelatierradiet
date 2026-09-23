// ===== FAVICON =====
const favicon = document.createElement("link");
favicon.rel = "icon";
favicon.type = "image/jpeg";
favicon.href = "img/logo-redondo.jpg";
document.head.appendChild(favicon);


/* =====================================
   HEADER (se inserta en todas las páginas)
   ===================================== */
const headerPrincipal = document.getElementById("header-principal");

if (headerPrincipal) {
  headerPrincipal.innerHTML = `
    <img class="logo-texto" src="img/logo_transparente.png" alt="Sabores de la Tierra">

    <img class="logo-redondo" src="img/logo-redondo.jpg" alt="Logo Sabores de la Tierra">

    <nav>
      <a href="index.html">Inicio</a>
      <a href="productos.html">Productos</a>
      <a href="nosotros.html">Nosotros</a>
      <div class="buscador-header" id="buscador-header">
        <button class="buscador-toggle" onclick="toggleBuscadorHeader()" aria-label="Buscar productos">
          <i class="ti ti-search"></i>
        </button>
        <input
          type="text"
          id="buscador"
          class="buscador-input"
          placeholder="Buscar productos..."
          oninput="onBuscadorHeaderInput(this.value)"
          onkeydown="onBuscadorHeaderKeydown(event)"
        >
      </div>
      <a href="#" class="nav-carrito" onclick="abrirCarrito(); return false;">
        <span>Carrito</span>
        <div class="carrito-icono">
          <span class="icono">🛒</span>
          <span class="contador" id="contador-carrito">0</span>
        </div>
      </a>
    </nav>
  `;
}

/* =====================================
   BUSCADOR DEL HEADER
   ===================================== */
function toggleBuscadorHeader() {
  const cont = document.getElementById("buscador-header");
  if (!cont) return;
  cont.classList.toggle("activo");
  if (cont.classList.contains("activo")) {
    const input = document.getElementById("buscador");
    if (input) input.focus();
  }
}

function onBuscadorHeaderInput(valor) {
  // Si estamos en index.html existe el contenedor de resultados
  if (document.getElementById("resultados-busqueda")) {
    buscarProductos(valor);
  }
}

function onBuscadorHeaderKeydown(evento) {
  if (evento.key !== "Enter") return;
  const valor = evento.target.value.trim();
  if (!valor) return;

  // Si NO estamos en index.html, redirige ahí con la búsqueda
  if (!document.getElementById("resultados-busqueda")) {
    window.location.href = "index.html?buscar=" + encodeURIComponent(valor);
  }
}

function aplicarBusquedaDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("buscar");
  if (!query) return;

  const input = document.getElementById("buscador");
  const cont = document.getElementById("buscador-header");
  if (input) {
    input.value = query;
    if (cont) cont.classList.add("activo");
    buscarProductos(query);
  }
}


/* =====================================
   WHATSAPP
   ===================================== */
function abrirWhatsApp() {
  const telefono = "5493515426971";
  const mensaje = "Hola, quiero hacer una consulta";
  const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
}

/* =====================================
   CATEGORÍAS
   ===================================== */
const categorias = [
  { nombre: "Semillas que Nutren", url: "semillas.html", icono: "ti-plant-2" },
  { nombre: "El Snack Perfecto", url: "frutos-secos.html", icono: "ti-tools-kitchen-2" },
  { nombre: "La Cocina Empieza Acá", url: "Harinas.html", icono: "ti-building-store" },
  { nombre: "Dulce Consentido", url: "Reposteria.html", icono: "ti-cake" },
  { nombre: "Recargá", url: "suplementos.html", icono: "ti-bolt" },
  { nombre: "Mañanas que Cargan", url: "granolas.html", icono: "ti-sun" },
  { nombre: "Fresquísimos", url: "congelados.html", icono: "ti-snowflake" },
  { nombre: "El Cajón Sorpresa", url: "el-cajon-sorpresa.html", icono: "ti-gift" },
  { nombre: "Infusiones & Cafés", url: "cafes.html", icono: "ti-coffee" },
  { nombre: "Endulzantes & Naturales", url: "endulzantes.html", icono: "ti-bottle" },
  { nombre: "El Rincón del Chocolate", url: "chocolates.html", icono: "ti-candy" },
  { nombre: "Novedades", url: "productos-nuevos.html", icono: "ti-sparkles" },
];

/* =====================================
   PRODUCTOS (se cargan desde Supabase)
   ===================================== */
const SUPABASE_URL = "https://cqbguypqwwcvyakxlfxw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYmd1eXBxd3djdnlha3hsZnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNDI3NjIsImV4cCI6MjEwNTYxODc2Mn0.d6EwyOvPpgKh7sHlMQ1wDGJj8ZUscYN9ogFUwnv54Bc";

let productos = [];

async function cargarProductos() {
  try {
    const resp = await fetch(
      `${SUPABASE_URL}/rest/v1/productos?select=*&order=nombre`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      }
    );
    if (!resp.ok) throw new Error("Error al cargar productos: " + resp.status);
    const data = await resp.json();
    // Normaliza el precio (viene como string/numeric desde Postgres) a number
    return data.map(p => ({ ...p, precio: Number(p.precio) }));
  } catch (err) {
    console.error("No se pudieron cargar los productos desde Supabase:", err);
    return [];
  }
}

/* =====================================
   RENDERIZADO CATEGORÍAS
   ===================================== */
const gridCategorias = document.querySelector(".categorias-grid");

if (gridCategorias) {
  categorias.forEach(cat => {
    gridCategorias.innerHTML += `
      <a href="${cat.url}" class="categoria-card">
        <div class="categoria-icono">
          <i class="ti ${cat.icono}"></i>
        </div>
        <span>${cat.nombre}</span>
      </a>
    `;
  });
}

/* =====================================
   CARRUSEL DE PRODUCTOS - INFINITO
   ===================================== */
function crearCarrusel(idContenedor, listaProductos) {
  const wrapper = document.getElementById(idContenedor);
  if (!wrapper || listaProductos.length === 0) return;

  let lista = listaProductos;
  while (lista.length < 3) lista = [...lista, ...listaProductos];

  const GAP = 0;
  const anchoWrapper = wrapper.parentElement.offsetWidth || window.innerWidth;
  const ANCHO_CENTRO  = Math.round(anchoWrapper * 0.40);
  const ANCHO_LATERAL = Math.round((anchoWrapper - ANCHO_CENTRO) / 2);
  const PASO = ANCHO_LATERAL + GAP;

  const listaTriple = [...lista, ...lista, ...lista];
  const offsetInicial = lista.length;

  wrapper.style.cssText = `
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    overflow: visible;
    padding: 20px 0 10px 0;
    box-sizing: border-box;
  `;
  wrapper.parentElement.style.overflow = "hidden";

  const track = document.createElement("div");
  track.style.cssText = `
    display: flex;
    gap: ${GAP}px;
    align-items: center;
    will-change: transform;
  `;

  function crearCard(producto) {
    const card = document.createElement("article");
    card.className = "producto card-foto carrusel-card";
    card.style.cssText = `
      flex-shrink: 0;
      width: ${ANCHO_LATERAL}px;
      opacity: 0.6;
      transform: scale(0.9);
      box-sizing: border-box;
      background-image: url('${producto.imagen}');
      transition: width 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
    `;
    card.innerHTML = `
      
      <div class="card-contenido">
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <p class="card-desc">${producto.descripcion}</p>
        ${producto.contenido ? `<p class="card-contiene"><strong>Contiene:</strong> ${producto.contenido}</p>` : ""}
        <button class="btn-producto"
          data-nombre="${producto.nombre}"
          data-precio="${producto.precio}"
          onclick="agregarAlCarrito(this)">
          Agregar al carrito
        </button>
      </div>
    `;
    return card;
  }

  listaTriple.forEach(p => track.appendChild(crearCard(p)));
  wrapper.appendChild(track);

  let pos = offsetInicial + 1;
  let bloqueado = false;

  function calcularOffset(p) {
    return p * PASO - ANCHO_LATERAL - GAP + (ANCHO_LATERAL - ANCHO_CENTRO) / 2;
  }

  function aplicarEstilos(animado) {
    track.style.transition = animado ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(-${calcularOffset(pos)}px)`;

    const cards = track.querySelectorAll(".carrusel-card");
    cards.forEach((card, i) => {
      if (i === pos) {
        card.style.width = ANCHO_CENTRO + "px";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else if (i === pos - 1 || i === pos + 1) {
        card.style.width = ANCHO_LATERAL + "px";
        card.style.opacity = "0.6";
        card.style.transform = "scale(0.9)";
      } else {
        card.style.width = ANCHO_LATERAL + "px";
        card.style.opacity = "0";
        card.style.transform = "scale(0.85)";
      }
    });
  }

  function pausarTodosLosVideos() {
    const iframes = track.querySelectorAll("iframe");
    iframes.forEach(iframe => {
      const src = iframe.src;
      iframe.src = "";
      iframe.src = src;
    });
  }

  function mover(dir) {
    if (bloqueado) return;
    bloqueado = true;
    pausarTodosLosVideos();
    pos += dir;
    aplicarEstilos(true);

    setTimeout(() => {
      if (pos >= lista.length * 2) {
        pos -= lista.length;
        aplicarEstilos(false);
      }
      if (pos < lista.length) {
        pos += lista.length;
        aplicarEstilos(false);
      }
      bloqueado = false;
    }, 510);
  }

  const btnIzq = document.createElement("button");
  btnIzq.className = "carrusel-prod-btn";
  btnIzq.innerHTML = "&#8592;";
  btnIzq.style.cssText = "position:absolute;left:8px;top:50%;transform:translateY(-50%);z-index:10;";

  const btnDer = document.createElement("button");
  btnDer.className = "carrusel-prod-btn";
  btnDer.innerHTML = "&#8594;";
  btnDer.style.cssText = "position:absolute;right:8px;top:50%;transform:translateY(-50%);z-index:10;";

  wrapper.appendChild(btnIzq);
  wrapper.appendChild(btnDer);

  aplicarEstilos(false);

  // DOTS indicadores
  const dotsContainer = document.createElement("div");
  dotsContainer.style.cssText = "text-align:center; padding: 12px 0; position: relative; z-index: 5;";

  lista.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.style.cssText = `
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ccc;
      margin: 0 4px;
      cursor: pointer;
      transition: background 0.3s;
    `;
    dot.onclick = () => {
      pos = lista.length + i + 1;
      aplicarEstilos(true);
      actualizarDots();
    };
    dotsContainer.appendChild(dot);
  });

  function actualizarDots() {
    const dots = dotsContainer.querySelectorAll("span");
    const posReal = ((pos - 1) % lista.length + lista.length) % lista.length;
    dots.forEach((dot, i) => {
      dot.style.background = i === posReal ? "#2BBDA8" : "#ccc";
    });
  }

  function moverConDots(dir) {
    mover(dir);
    setTimeout(actualizarDots, 520);
  }

  // ===== DESLIZAR CON EL DEDO (swipe) =====
  let touchInicioX = 0;
  let touchFinX = 0;

  wrapper.addEventListener("touchstart", (e) => {
    touchInicioX = e.changedTouches[0].screenX;
  }, { passive: true });

  wrapper.addEventListener("touchend", (e) => {
    touchFinX = e.changedTouches[0].screenX;
    const distancia = touchFinX - touchInicioX;
    if (distancia < -40) {
      moverConDots(1);      // deslizó a la izquierda → siguiente
      reiniciarAutoPlay();  // reinicia los 4 segundos
    } else if (distancia > 40) {
      moverConDots(-1);     // deslizó a la derecha → anterior
      reiniciarAutoPlay();
    }
  }, { passive: true });

  btnIzq.onclick = () => moverConDots(-1);
  btnDer.onclick = () => moverConDots(1);

  actualizarDots();
  let autoPlay = setInterval(() => moverConDots(1), 4000);

  function reiniciarAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => moverConDots(1), 4000);
  }

  wrapper.insertAdjacentElement("afterend", dotsContainer);
}

function renderizarProductoCategoria(producto, contenedorCategoria) {
  // Card con variantes
  if (producto.variantes) {
    const variantesHTML = producto.variantes.map(v => `
      <div class="variante-fila">
        <span class="variante-etiqueta">${v.etiqueta}</span>
        <span class="variante-precio">$${v.precio}</span>
        <button class="btn-variante"
          data-nombre="${producto.nombre} x ${v.etiqueta}"
          data-precio="${v.precio}"
          onclick="agregarAlCarrito(this)">
          Agregar
        </button>
      </div>
    `).join("");

    contenedorCategoria.innerHTML += `
      <article class="producto card-foto" style="background-image:url('${producto.imagen}');">
        <div class="card-contenido">
          <h3>${producto.nombre}</h3>
          <p class="card-desc">${producto.descripcion}</p>
          <div class="variantes-lista">
            ${variantesHTML}
          </div>
        </div>
      </article>
    `;

  // Card normal (sin variantes)
  } else {
    contenedorCategoria.innerHTML += `
      <article class="producto card-foto" style="background-image:url('${producto.imagen}');">
        
        <div class="card-contenido">
          <h3>${producto.nombre}</h3>
          <p class="precio">$${producto.precio}</p>
          <p class="card-desc">${producto.descripcion}</p>
          ${producto.contenido ? `<p class="card-contiene"><strong>Contiene:</strong> ${producto.contenido}</p>` : ""}
          <button class="btn-producto"
            data-nombre="${producto.nombre}"
            data-precio="${producto.precio}"
            onclick="agregarAlCarrito(this)">
            Agregar al carrito
          </button>
        </div>
      </article>
    `;
  }
}

async function inicializarProductos() {
  productos = await cargarProductos();

  const destacados = productos.filter(p => p.destacado === true);
  crearCarrusel("productos-destacados", destacados);

  if (typeof categoriaActual !== "undefined") {
    const contenedorCategoria = document.getElementById("productos-categoria");
    if (contenedorCategoria) {
      productos
        .filter(p => p.categoria === categoriaActual)
        .forEach(producto => renderizarProductoCategoria(producto, contenedorCategoria));
    }
  }


  if (typeof aplicarBusquedaDesdeURL === "function") aplicarBusquedaDesdeURL();
}

inicializarProductos();

/* =====================================
   CARRITO
   ===================================== */
let carrito = [];

function agregarAlCarrito(boton) {
  const nombre = boton.dataset.nombre.trim();
  const precio = Number(boton.dataset.precio);

  const productoExistente = carrito.find(item => item.nombre === nombre);

  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  actualizarCarrito();
  guardarCarrito();

  const itemActual = carrito.find(item => item.nombre === nombre);
  const subtotal = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  mostrarAviso(nombre, itemActual.cantidad, subtotal);
}

function abrirCarrito() {
  document.getElementById("carrito-panel").classList.add("activo");
  document.getElementById("carrito-overlay").classList.add("activo");
}

function cerrarCarrito() {
  document.getElementById("carrito-panel").classList.remove("activo");
  document.getElementById("carrito-overlay").classList.remove("activo");
}

function actualizarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  const contador = document.getElementById("contador-carrito");
  const totalSpan = document.getElementById("carrito-total");

  if (!carritoItems || !totalSpan) return;

  carritoItems.innerHTML = "";

  if (carrito.length === 0) {
    carritoItems.innerHTML = '<p class="carrito-vacio">El carrito está vacío</p>';
    if (contador) contador.textContent = 0;
    totalSpan.textContent = totalSpan.tagName === "STRONG" ? "Total: $0" : "0";
    return;
  }

  let total = 0;

  carrito.forEach(item => {
    total += item.precio * item.cantidad;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("carrito-item");
    itemDiv.innerHTML = `
      <span>${item.nombre}</span>
      <div class="controles-cantidad">
        <button onclick="restarCantidad('${item.nombre}')">−</button>
        <span>${item.cantidad}</span>
        <button onclick="sumarCantidad('${item.nombre}')">+</button>
      </div>
      <span>$${item.precio * item.cantidad}</span>
      <button onclick="eliminarProducto('${item.nombre}')" class="btn-eliminar">🗑️</button>
    `;

    carritoItems.appendChild(itemDiv);
  });

  if (contador) contador.textContent = carrito.reduce((sum, i) => sum + i.cantidad, 0);
  totalSpan.textContent = total;
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("click", function(e) {
  const boton = e.target.closest("#btn-finalizar-compra");
  if (!boton) return;

  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
    return;
  }

  let textoPedido = "Hola 👋, quiero finalizar mi compra en Sabores de la Tierra.\n\n";
  textoPedido += "Mi pedido:\n";

  let total = 0;
  carrito.forEach(item => {
    textoPedido += `- ${item.nombre} | Cantidad: ${item.cantidad} | Precio: $${item.precio * item.cantidad}\n`;
    total += item.precio * item.cantidad;
  });

  textoPedido += `\nTotal: $${total}\n\n`;
  textoPedido += "Por favor, coordinemos el pago y el envío.";

  const mensaje = encodeURIComponent(textoPedido);
  window.open(`https://wa.me/5493515426971?text=${mensaje}`, "_blank");
});

/* =====================================
   CARRUSEL INSTAGRAM
   ===================================== */

   function crearCarruselInstagram() {
  const wrapper = document.getElementById("carrusel-viewport");
  if (!wrapper) return;

  const itemsOriginales = Array.from(wrapper.querySelectorAll(".carrusel-item"));
  if (itemsOriginales.length === 0) return;

  // Quita el track original y reconstruye todo desde JS
  const trackViejo = document.getElementById("carrusel-track");
  if (trackViejo) trackViejo.remove();

  const lista = itemsOriginales;
  const total = lista.length;

  const anchoWrapper = wrapper.parentElement.offsetWidth || window.innerWidth;
  const esMobile = anchoWrapper < 600;

  const PORC_CENTRO  = esMobile ? 0.85 : 0.38;
  const PORC_LATERAL = esMobile ? 0.15 : 0.28;

  const ANCHO_CENTRO  = Math.round(anchoWrapper * PORC_CENTRO);
  const ANCHO_LATERAL = Math.round(anchoWrapper * PORC_LATERAL);
  const PASO = ANCHO_LATERAL;
  const GAP = 0;

  const ALTO_CARD = esMobile ? Math.round(ANCHO_CENTRO * 1.5) : 500;

  // Triple para loop infinito
  const listaTriple = [...lista, ...lista, ...lista];
  const offsetInicial = total;

  wrapper.style.cssText = `
    position: relative;
    overflow: hidden;
    flex: 1;
    padding: 10px 0;
  `;

  const track = document.createElement("div");
  track.style.cssText = `
    display: flex;
    gap: ${GAP}px;
    align-items: center;
    will-change: transform;
  `;

  listaTriple.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "insta-card";
    card.style.cssText = `
      flex-shrink: 0;
      width: ${ANCHO_LATERAL}px;
      height: ${ALTO_CARD}px;
      opacity: 0.5;
      transform: scale(0.88);
      transition: width 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
      overflow: hidden;
      border-radius: 12px;
    `;
    card.appendChild(item.cloneNode(true));
    track.appendChild(card);
  });

  wrapper.appendChild(track);

  let pos = offsetInicial + 1;
  let bloqueado = false;

  function calcularOffset(p) {
    return p * PASO - ANCHO_LATERAL - GAP + (ANCHO_LATERAL - ANCHO_CENTRO) / 2;
  }

  function aplicarEstilos(animado) {
    track.style.transition = animado ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(-${calcularOffset(pos)}px)`;

    const cards = track.querySelectorAll(".insta-card");
    cards.forEach((card, i) => {
      if (i === pos) {
        card.style.width = ANCHO_CENTRO + "px";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else if (i === pos - 1 || i === pos + 1) {
        card.style.width = ANCHO_LATERAL + "px";
        card.style.opacity = "0.5";
        card.style.transform = "scale(0.88)";
      } else {
        card.style.width = ANCHO_LATERAL + "px";
        card.style.opacity = "0";
        card.style.transform = "scale(0.85)";
      }
    });

    // Reinicializa los embeds de Instagram visibles
    if (window.instgrm) window.instgrm.Embeds.process();
  }

  function pausarTodosLosVideos() {
    const iframes = track.querySelectorAll("iframe");
    iframes.forEach(iframe => {
      const src = iframe.src;
      iframe.src = "";
      iframe.src = src;
    });
  }

  function mover(dir) {
    if (bloqueado) return;
    bloqueado = true;
    pausarTodosLosVideos();
    pos += dir;
    aplicarEstilos(true);

    setTimeout(() => {
      if (pos >= total * 2) { pos -= total; aplicarEstilos(false); }
      if (pos < total)      { pos += total; aplicarEstilos(false); }
      bloqueado = false;
    }, 510);
  }

  window.moverCarrusel = mover;

  // Swipe con el dedo
  let touchStartX = 0;
  wrapper.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  wrapper.addEventListener("touchend", e => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (diff < -40) mover(1);
    else if (diff > 40) mover(-1);
  }, { passive: true });

  aplicarEstilos(false);

  // Autoplay cada 4 segundos
  let autoPlay = setInterval(() => mover(1), 4000);

  function detenerAutoPlay() {
    clearInterval(autoPlay);
  }

  wrapper.addEventListener("touchstart", detenerAutoPlay, { passive: true });
  wrapper.addEventListener("mouseenter", detenerAutoPlay);
  wrapper.addEventListener("click", detenerAutoPlay);
}

// Espera que los embeds de Instagram carguen antes de iniciar
window.addEventListener("load", crearCarruselInstagram);

function cargarCarrito() {
  const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
  if (carritoGuardado) {
    carrito = carritoGuardado;
    actualizarCarrito();
  }
}

function sumarCantidad(nombre) {
  const producto = carrito.find(item => item.nombre === nombre);
  if (producto) {
    producto.cantidad++;
    guardarCarrito();
    actualizarCarrito();
  }
}

function restarCantidad(nombre) {
  const producto = carrito.find(item => item.nombre === nombre);
  if (producto && producto.cantidad > 1) {
    producto.cantidad--;
    guardarCarrito();
    actualizarCarrito();
  }
}

function eliminarProducto(nombre) {
  carrito = carrito.filter(item => item.nombre !== nombre);
  guardarCarrito();
  actualizarCarrito();
}

/* =====================================
   INICIAR
   ===================================== */
cargarCarrito();
// aplicarBusquedaDesdeURL() se llama despues de que los productos terminan de cargar
// (ver inicializarProductos, mas arriba), para no buscar sobre un array vacio.

/* =====================================
   BUSCADOR
   ===================================== */
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function buscarProductos(texto) {
  const query = normalizar(texto.trim());
  const resultadosDiv = document.getElementById("resultados-busqueda");
  const gridResultados = document.getElementById("grid-resultados");

  if (query === "") {
    resultadosDiv.style.display = "none";
    gridResultados.innerHTML = "";
    return;
  }

  const encontrados = productos.filter(p => {
    const enNombre = normalizar(p.nombre || "").includes(query);
    const enDescripcion = normalizar(p.descripcion || "").includes(query);
    const enContenido = p.contenido ? normalizar(p.contenido).includes(query) : false;
    return enNombre || enDescripcion || enContenido;
  });

  gridResultados.innerHTML = "";

  if (encontrados.length === 0) {
    gridResultados.innerHTML = "<p style='text-align:center;color:#888;'>No encontramos productos para esa búsqueda.</p>";
  } else {
    encontrados.forEach(producto => {
      gridResultados.innerHTML += `
        <article class="producto card-foto" style="background-image:url('${producto.imagen}');">
          
          <div class="card-contenido">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio}</p>
            <p class="card-desc">${producto.descripcion}</p>
            ${producto.contenido ? `<p class="card-contiene"><strong>Contiene:</strong> ${producto.contenido}</p>` : ""}
            <button class="btn-producto"
              data-nombre="${producto.nombre}"
              data-precio="${producto.precio}"
              onclick="agregarAlCarrito(this)">
              Agregar al carrito
            </button>
          </div>
        </article>
      `;
    });
  }

  resultadosDiv.style.display = "block";
}

function abrirVideo(url) {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;

  overlay.innerHTML = `
    <div style="position:relative; width:90%; max-width:560px;">
      <button onclick="this.closest('div').parentElement.remove()"
        style="position:absolute; top:-40px; right:0; background:#fff; border:none; border-radius:50%; width:32px; height:32px; font-size:1.2rem; cursor:pointer;">✕</button>
      <div style="position:relative; padding-bottom:56.25%; height:0;">
        <iframe src="${url}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
          style="position:absolute; top:0; left:0; width:100%; height:100%; border:0; border-radius:8px;"
          allow="autoplay; encrypted-media"
          allowfullscreen></iframe>
      </div>
    </div>
  `;

  overlay.onclick = function(e) {
    if (e.target === overlay) overlay.remove();
  };

  document.body.appendChild(overlay);
}
function mostrarAviso(nombre, cantidad, subtotal) {
  let cont = document.getElementById("avisos-carrito");
  if (!cont) {
    cont = document.createElement("div");
    cont.id = "avisos-carrito";
    cont.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 300px;
    `;
    document.body.appendChild(cont);
  }

  const aviso = document.createElement("div");
  aviso.style.cssText = `
    background: #fff;
    border-left: 5px solid #4a7c1f;
    border-radius: 8px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.18);
    padding: 14px 16px;
    font-size: 0.9rem;
    color: #333;
    opacity: 0;
    transform: translateX(60px);
    transition: opacity 0.35s ease, transform 0.35s ease;
  `;
  aviso.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <span style="font-size:1.1rem;">✅</span>
      <strong style="color:#4a7c1f;">Agregado al carrito</strong>
    </div>
    <div style="margin-bottom:4px;">${nombre} <span style="color:#888;">x${cantidad}</span></div>
    <div style="font-weight:600;">Subtotal: $${subtotal}</div>
  `;

  cont.appendChild(aviso);

  requestAnimationFrame(() => {
    aviso.style.opacity = "1";
    aviso.style.transform = "translateX(0)";
  });

  setTimeout(() => {
    aviso.style.opacity = "0";
    aviso.style.transform = "translateX(60px)";
    setTimeout(() => aviso.remove(), 400);
  }, 3000);
}

/* =====================================
   FOOTER (se inserta en todas las páginas)
   ===================================== */
const footerPrincipal = document.getElementById("footer-principal");

if (footerPrincipal) {
  footerPrincipal.innerHTML = `
    <div class="footer-datos">
      <p>📍
        <a href="https://maps.app.goo.gl/as6M8Drw7A7B4qcY6" target="_blank" class="footer-link">
          Independencia 1054-Nueva Córdoba-Córdoba Capital
        </a>
      </p>
      <p>📲 WhatsApp:
        <a href="https://wa.me/5493515426971" target="_blank">Escribinos</a>
      </p>
      <p>📸
        <a href="https://www.instagram.com/saboresdelatierradiet/" target="_blank" class="footer-link">
          @saboresdelatierradiet
        </a>
      </p>
    </div>

    <div class="footer-mapa">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.4995324815764!2d-64.19172682585365!3d-31.42791209680599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a28ecb3d95cd%3A0x199ee3917b3d1e98!2sIndependencia%201054%2C%20X5014IUV%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1780504772009!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="footer-credito">
      <a href="https://www.devkore.com.ar" target="_blank" class="footer-credito-link">
        <span class="footer-credito-dev">Dev</span><span class="footer-credito-kore">&lt;Kore&gt;</span>
      </a>
      <p class="footer-credito-slogan">Soluciones a medida, sin vueltas</p>
      <p class="footer-credito-url">www.devkore.com.ar</p>
    </div>
  `;
}

/* =====================================
   BARRA DE ANUNCIOS (se inserta arriba de todo)
   ===================================== */
const mensajesBarra = [
  "🚚 Envío gratis desde $40.000 en Córdoba Capital",
  "⏱️ Demora de 3 a 5 días hábiles",
  "📦 Enviamos a todo el país - Consultá tu envío",
  "📍 Independencia 1054 - Córdoba",
  "📲 Consultas por WhatsApp: 351 542 6971",
  "🥗 Consultá con nuestra nutricionista al 3516718415"
];

const barra = document.createElement("div");
barra.className = "barra-anuncios";

// se ponen los mensajes DOS veces para que el loop sea continuo
const contenido = [...mensajesBarra, ...mensajesBarra]
  .map(m => `<span>${m}</span>`)
  .join("");

barra.innerHTML = `<div class="barra-anuncios-track">${contenido}</div>`;

// la inserta como primer elemento del body (arriba de todo)
document.body.insertBefore(barra, document.body.firstChild);

/* =====================================
   ACORDEÓN (nutricionista)
   ===================================== */
function toggleAcordeon(boton) {
  const item = boton.parentElement;
  item.classList.toggle("activo");
} 
