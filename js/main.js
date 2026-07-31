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
  { nombre: "Semillas que Suman", url: "semillas.html", icono: "ti-plant-2" },
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
];

/* =====================================
   PRODUCTOS
   ===================================== */
const productos = [

  // ===== FRUTOS SECOS =====
  {
    nombre: "Castañas de Cajú x 1 kg",
    precio: 25000,
    descripcion: "Energía · Grasas saludables · Proteínas · Antioxidantes",
    imagen: "img/castanas.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Almendras x 1 kg",
    precio: 30000,
    descripcion: "Vitamina E · Calcio · Proteínas · Grasas saludables",
    imagen: "img/almendras.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Nueces x 1 kg",
    precio: 23000,
    descripcion: "Omega 3 · Antioxidantes · Proteínas · Energía",
    imagen: "img/nueces.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Pistachos x 500 g",
    precio: 25000,
    descripcion: "Proteínas · Hierro · Grasas buenas · Antioxidantes",
    imagen: "img/pistachos.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Maní con Sal x 1 kg",
    precio: 4000,
    descripcion: "Proteínas · Energía · Grasas saludables · Saciedad",
    imagen: "img/mani-con-sal.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Maní sin Sal x 1 kg",
    precio: 4000,
    descripcion: "Proteínas · Energía · Grasas saludables · Natural",
    imagen: "img/mani-sin-sal.jpg",
    categoria: "frutos-secos"
  },
  {
    nombre: "Mix Nevado x 1 kg",
    precio: 15000,
    descripcion: "Energía · Vitaminas · Antioxidantes · Natural",
    imagen: "img/mix-nevado.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Castañas · Maní · Arándanos · Semillas de girasol · Coco en escamas",
    video: "https://www.youtube.com/embed/0-cn79bhIpw"
  },
  {
    nombre: "Mix Clásico x 1 kg",
    precio: 13000,
    descripcion: "Energía · Proteínas · Fibra · Natural",
    imagen: "img/mix-clasico.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Pasas · Castañas · Maní"
  },
  {
    nombre: "Mix sin Pasas x 1 kg",
    precio: 16000,
    descripcion: "Energía · Proteínas · Grasas saludables · Natural",
    imagen: "img/mix-sin-pasas.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Castañas · Maní"
  },
  {
    nombre: "Mix sin Maní x 1 kg",
    precio: 16000,
    descripcion: "Energía · Antioxidantes · Vitaminas · Natural",
    imagen: "img/mix-sin-mani.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Pasas · Castañas"
  },
  {
    nombre: "Mix Tropical x 1 kg",
    precio: 15000,
    descripcion: "Energía · Vitaminas · Fibra · Natural",
    imagen: "img/mix-tropical.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Pasas · Castañas · Maní · Banana · Ananá",
    destacado: true
  },
  {
    nombre: "Mix Premium x 1 kg",
    precio: 27000,
    descripcion: "Omega 3 · Proteínas · Antioxidantes · Grasas saludables",
    imagen: "img/mix-premium.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Almendras · Castañas",
    destacado: true
  },
  {
    nombre: "Mix Salado x 1 kg",
    precio: 10000,
    descripcion: "Energía · Proteínas · Fibra · Saciedad",
    imagen: "img/mix-salado.jpg",
    categoria: "frutos-secos",
    contenido: "Nueces · Semillas de girasol · Semillas de zapallo · Maní salado · Maní saborizado · Maíz frito"
  },

  // ===== SEMILLAS =====
  {
    nombre: "Semillas de Girasol x 500 g",
    precio: 2250,
    descripcion: "Vitamina E · Grasas saludables · Antioxidantes · Energía",
    imagen: "img/semillas-girasol.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semilla de Sésamo Blanco x 500 g",
    precio: 4500,
    descripcion: "Calcio · Hierro · Grasas buenas · Antioxidantes",
    imagen: "img/sesamo-blanco.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semilla de Sésamo Negro x 500 g",
    precio: 6500,
    descripcion: "Antioxidantes · Calcio · Hierro · Antiinflamatorio",
    imagen: "img/sesamo-negro.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semilla de Sésamo Integral x 500 g",
    precio: 2000,
    descripcion: "Fibra · Calcio · Proteínas · Natural",
    imagen: "img/sesamo-integral.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semillas de Lino x 500 g",
    precio: 2100,
    descripcion: "Omega 3 · Fibra · Digestión · Antiinflamatorio",
    imagen: "img/semillas-lino.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semilla de Chía Premium x 500 g",
    precio: 5000,
    descripcion: "Omega 3 · Proteínas · Fibra · Saciedad",
    imagen: "img/chia-premium.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Mix de Semillas x 500 g",
    precio: 3000,
    descripcion: "Omega 3 · Fibra · Vitaminas · Natural",
    imagen: "img/mix-semillas.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semillas de Zapallo x 500 g",
    precio: 12000,
    descripcion: "Zinc · Magnesio · Proteínas · Antioxidantes",
    imagen: "img/semillas-zapallo.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semilla de Amaranto x 500 g",
    precio: 5000,
    descripcion: "Proteínas · Sin TACC · Hierro · Calcio",
    imagen: "img/amaranto.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semillas de Amapola x 500 g",
    precio: 11000,
    descripcion: "Calcio · Fibra · Grasas saludables · Antioxidantes",
    imagen: "img/semillas-amapola.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semilla de Psyllium x 500 g",
    precio: 11000,
    descripcion: "Fibra · Digestión · Saciedad · Sin TACC",
    imagen: "img/psyllium.jpg",
    categoria: "semillas"
  },
  {
    nombre: "Semilla de Quinoa Boliviana x 500 g",
    precio: 4000,
    descripcion: "Proteínas · Sin TACC · Hierro · Aminoácidos esenciales",
    imagen: "img/quinoa-boliviana.jpg",
    categoria: "semillas"
  },

  // ===== REPOSTERÍA =====
  {
    nombre: "Fécula de Maíz x 1 kg",
    precio: 4700,
    descripcion: "Sin TACC · Espesante · Liviana · Apta repostería",
    imagen: "img/fecula-maiz.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Fécula de Mandioca x 1 kg",
    precio: 4500,
    descripcion: "Sin TACC · Espesante · Digestiva · Apta repostería",
    imagen: "img/fecula-mandioca.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Azúcar Mascabo x 500 g",
    precio: 1700,
    descripcion: "Natural · Sin refinar · Hierro · Bajo procesamiento",
    imagen: "img/azucar-mascabo.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Azúcar Impalpable x 500 g",
    precio: 2900,
    descripcion: "Fina · Apta repostería · Decoración · Rellenos",
    imagen: "img/azucar-impalpable.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Polvo para Hornear x 250 g",
    precio: 3200,
    descripcion: "Leudante · Apta repostería · Sin tacc · Esponjado natural",
    imagen: "img/polvo-hornear.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Coco Rallado x 500 g",
    precio: 7500,
    descripcion: "Natural · Fibra · Energía · Apta repostería",
    imagen: "img/coco-rallado.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Leche de Coco en Polvo x 500 g",
    precio: 18000,
    descripcion: "Sin lactosa · Cremosa · Energía · Apta repostería",
    imagen: "img/leche-coco-polvo.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Cacao Amargo x 500 g",
    precio: 10000,
    descripcion: "Antioxidantes · Magnesio · Sin azúcar · Apta repostería",
    imagen: "img/cacao-amargo.jpg",
    categoria: "reposteria"
  },
  {
    nombre: "Azúcar de Coco x 500 g",
    precio: 8000,
    descripcion: "Bajo índice glucémico · Natural · Sin refinar · Energía",
    imagen: "img/azucar-coco.jpg",
    categoria: "reposteria"
  },

  // ===== HARINAS =====
  {
    nombre: "Harina de Coco x 1 kg",
    precio: 8000,
    descripcion: "Sin TACC · Fibra · Bajo índice glucémico · Apta repostería",
    imagen: "img/harina-coco.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Maní x 1 kg",
    precio: 4000,
    descripcion: "Proteínas · Sin TACC · Grasas saludables · Apta repostería",
    imagen: "img/harina-mani.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Centeno x 500 g",
    precio: 3000,
    descripcion: "Fibra · Hierro · Digestión · Energía sostenida",
    imagen: "img/harina-centeno.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Almendras sin Piel x 1 kg",
    precio: 7000,
    descripcion: "Sin TACC · Proteínas · Grasas buenas · Apta repostería",
    imagen: "img/harina-almendras-sin-piel.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Almendras con Piel x 1 kg",
    precio: 5500,
    descripcion: "Sin TACC · Fibra · Proteínas · Apta repostería",
    imagen: "img/harina-almendras-con-piel.jpg",
    categoria: "harinas",
    destacado: true
  },
  {
    nombre: "Harina de Algarroba Artesanal x 500 g",
    precio: 6500,
    descripcion: "Sin TACC · Antioxidantes · Fibra · Bajo índice glucémico",
    imagen: "img/harina-algarroba.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina a base de Pistacho x 500 g",
    precio: 13000,
    descripcion: "Sin TACC · Proteínas · Grasas buenas · Apta repostería",
    imagen: "img/harina-pistacho.jpg",
    categoria: "harinas",
    destacado: true
  },
  {
    nombre: "Harina de Arroz x 1 kg",
    precio: 2000,
    descripcion: "Sin TACC · Digestiva · Liviana · Apta repostería",
    imagen: "img/harina-arroz.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Avena x 1 kg",
    precio: 3000,
    descripcion: "Fibra · Proteínas · Energía · Saciedad",
    imagen: "img/harina-avena.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Trigo Sarraceno x 1 kg",
    precio: 7800,
    descripcion: "Sin TACC · Proteínas · Hierro · Antioxidantes",
    imagen: "img/harina-trigo-sarraceno.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Maíz Abatí x 1 kg",
    precio: 2300,
    descripcion: "Sin TACC · Energía · Fibra · Natural",
    imagen: "img/harina-maiz-abati.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Harina de Garbanzo x 1 kg",
    precio: 2300,
    descripcion: "Sin TACC · Proteínas · Hierro · Fibra",
    imagen: "img/harina-garbanzo.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Avena Instantánea x 1 kg",
    precio: 2700,
    descripcion: "Fibra · Energía sostenida · Saciedad · Bajo índice glucémico",
    imagen: "img/avena-instantanea-1kg.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Avena Tradicional x 1 kg",
    precio: 2700,
    descripcion: "Fibra · Energía · Saciedad · Natural",
    imagen: "img/avena-tradicional.jpg",
    categoria: "harinas"
  },
  {
    nombre: "Avena Gruesa x 1 kg",
    precio: 2700,
    descripcion: "Fibra · Energía sostenida · Digestión · Natural",
    imagen: "img/avena-gruesa.jpg",
    categoria: "harinas"
  },

  // ===== GRANOLAS =====
  {
    nombre: "Granola Clásica con Miel y Pasas x 1 kg",
    precio: 8000,
    descripcion: "Energía · Fibra · Antioxidantes · Sin conservantes",
    imagen: "img/granola-miel-pasas.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola Clásica con Miel sin Pasas x 1 kg",
    precio: 8000,
    descripcion: "Energía · Fibra · Natural · Sin conservantes",
    imagen: "img/granola-miel-sin-pasas.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola con Pasas Sátvika x 1 kg",
    precio: 8500,
    descripcion: "Natural · Energía · Fibra · Ingredientes seleccionados",
    imagen: "img/granola-pasas-satvika.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola con Pasta de Maní Sátvika x 1 kg",
    precio: 8500,
    descripcion: "Proteínas · Energía · Fibra · Sin conservantes",
    imagen: "img/granola-pasta-mani-satvika.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola Tutti Grani Premium x 1 kg",
    precio: 10000,
    descripcion: "Energía · Fibra · Ingredientes premium · Sin conservantes",
    imagen: "img/granola-tutti-grani-premium.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola Tutti Grani Proteica x 1 kg",
    precio: 10000,
    descripcion: "Proteínas · Energía · Fibra · Rendimiento",
    imagen: "img/granola-tutti-grani-proteica.jpg",
    categoria: "granolas"
  },
  {
    nombre: "Granola Tutti Grani Cacao y Coco x 1 kg",
    precio: 10000,
    descripcion: "Antioxidantes · Energía · Fibra · Sin conservantes",
    imagen: "img/granola-tutti-grani-cacao-coco.jpg",
    categoria: "granolas"
  },

  // ===== SUPLEMENTOS =====
  {
    nombre: "Vitamina C en Polvo (Ácido Ascórbico) x 300 g",
    precio: 8400,
    descripcion: "Inmunidad · Antioxidante · Colágeno · Absorción de hierro",
    imagen: "img/vitamina-c.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Cloruro de Magnesio blister x 10 unid de 33g cada uno",
    precio: 5000,
    descripcion: "Músculos · Sistema nervioso · Energía · Huesos",
    imagen: "img/cloruro-magnesio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Citrato de Calcio x 200 g",
    precio: 5600,
    descripcion: "Huesos · Dientes · Alta absorción · Sin lactosa",
    imagen: "img/citrato-calcio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Creatina Monohidrato x 300 g",
    precio: 15000,
    descripcion: "Fuerza · Rendimiento · Masa muscular · Recuperación",
    imagen: "img/creatina-300.jpg",
    categoria: "suplementos",
    destacado: true
  },
  {
    nombre: "Colágeno x 300 g",
    precio: 18000,
    descripcion: "Articulaciones · Piel · Pelo · Uñas · Recuperación",
    imagen: "img/colageno-300.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Citrato de Magnesio x 300 g",
    precio: 11000,
    descripcion: "Alta absorción · Músculos · Sueño · Sistema nervioso",
    imagen: "img/citrato-magnesio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Citrato de Potasio x 300 g",
    precio: 11000,
    descripcion: "Presión arterial · Músculos · Hidratación · Corazón",
    imagen: "img/citrato-potasio.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Maca Micropulverizada x 500 g",
    precio: 3000,
    descripcion: "Energía · Vitalidad · Hormonal · Resistencia",
    imagen: "img/maca.jpg",
    categoria: "suplementos"
  },
  {
    nombre: "Maca Negra Micropulverizada x 500 g",
    precio: 3500,
    descripcion: "Energía · Fertilidad · Rendimiento · Antioxidantes",
    imagen: "img/maca-negra.jpg",
    categoria: "suplementos"
  },

  // ===== OTROS =====
  {
    nombre: "Pasta de Maní x 1 kg",
    precio: 7500,
    descripcion: "Proteínas · Grasas saludables · Energía · Sin aditivos",
    imagen: "img/pasta-mani.jpg",
    categoria: "otros",
    destacado: true
  },
  {
    nombre: "Flor de Jamaica-Hibiscus x 350 g",
    precio: 12500,
    descripcion: "Antioxidantes · Diurética · Vitamina C · Antiinflamatoria",
    imagen: "img/flor-hibiscus.jpg",
    categoria: "otros",
    destacado: true
  },
  {
    nombre: "Manzanilla x 300 g",
    precio: 16000,
    descripcion: "Digestiva · Relajante · Antiinflamatoria · Natural",
    imagen: "img/manzanilla.jpg",
    categoria: "otros"
  },
  {
    nombre: "Clavo de Olor x 200 g",
    precio: 12000,
    descripcion: "Antioxidante · Digestivo · Antibacterial · Aromático",
    imagen: "img/clavo-de-olor.jpg",
    categoria: "otros"
  },
  {
    nombre: "Gelatina Sin Sabor x 300 g",
    precio: 12000,
    descripcion: "Colágeno · Articulaciones · Proteínas · Bajo en calorías",
    imagen: "img/gelatina-sin-sabor.jpg",
    categoria: "otros",
    destacado: true
  },
  {
    nombre: "Avena Instantánea x 2 kg",
    precio: 5000,
    descripcion: "Fibra · Energía sostenida · Saciedad · Bajo índice glucémico",
    imagen: "img/avena-instantanea-1kg.jpg",
    categoria: "otros",
    destacado: true
  },

  {
    nombre: "Jugo de Arándanos con chía x 1,5 Lt",
    precio: 0,
    descripcion: "Antioxidantes · Vitamina C · Natural · Sin conservantes",
    imagen: "img/jugo-arandanos-chia.jpg",
    categoria: "otros"
  },
  {
    nombre: "Jugo de Arándanos con Stevia x 1,5 Lt",
    precio: 0,
    descripcion: "Antioxidantes · Vitamina C · Sin azúcar · Con stevia",
    imagen: "img/jugo-arandanos-stevia.jpg",
    categoria: "otros"
  },

  {
    nombre: "Yogurt Natural sin azúcar x 250 g x 2",
    precio: 4500,
    descripcion: "Probióticos · Calcio · Natural · Sin conservantes",
    imagen: "img/yogurt-natural-sin-azucar.jpg",
    categoria: "otros"
  },
  {
    nombre: "Yogurt Natural Endulzado x 250 g x 2",
    precio: 4500,
    descripcion: "Probióticos · Calcio · Natural · Suavemente endulzado",
    imagen: "img/yogurt-natural-endulzado.jpg",
    categoria: "otros"
  },
  

// ===== CAFÉS =====
  {
    nombre: "Café Brasil Cabrales x 250 g",
    precio: 24000,
    descripcion: "Café de origen Brasil, tostado y molido · 250 g",
    imagen: "img/cafe-brasil-cabrales.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Café Perú Cabrales x 250 g",
    precio: 24000,
    descripcion: "Café de origen Perú, tostado y molido · 250 g",
    imagen: "img/cafe-peru-cabrales.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Café Colombia Cabrales x 250 g",
    precio: 24000,
    descripcion: "Café de origen Colombia, tostado y molido · 250 g",
    imagen: "img/cafe-colombia-cabrales.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Supercabrales x 250 g",
    precio: 17500,
    descripcion: "El clásico Supercabrales · 250 g",
    imagen: "img/supercabrales.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Descafeinado Cabrales x 250 g",
    precio: 22000,
    descripcion: "Café descafeinado Cabrales · 250 g",
    imagen: "img/descafeinado-cabrales.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Café de Mistol x 200 g",
    precio: 7500,
    descripcion: "Café artesanal de mistol · 200 g",
    imagen: "img/cafe-mistol.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Café de Algarroba x 200 g",
    precio: 7500,
    descripcion: "Café artesanal de algarroba · 200 g",
    imagen: "img/cafe-algarroba.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Café Italiano Cabrales x 250 g",
    precio: 24000,
    descripcion: "Café estilo italiano Cabrales · 250 g",
    imagen: "img/cafe-italiano-cabrales.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Café Prestige Cabrales x 250 g",
    precio: 22000,
    descripcion: "Café Prestige selección especial Cabrales · 250 g",
    imagen: "img/cafe-prestige-cabrales.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Yerba Tucangua x 500 g",
    precio: 2700,
    descripcion: "Natural · Digestiva · Aromática · Artesanal",
    imagen: "img/yerba-tucangua.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Yerba Kalena x 500 g",
    precio: 7200,
    descripcion: "Natural · Relajante · Aromática · Artesanal",
    imagen: "img/yerba-kalena.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Té Rojo x 250 g",
    precio: 1200,
    descripcion: "Digestivo · Antioxidantes · Depurativo · Natural",
    imagen: "img/te-rojo.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Té Verde x 250 g",
    precio: 1200,
    descripcion: "Antioxidantes · Energía · Metabolismo · Natural",
    imagen: "img/te-verde.jpg",
    categoria: "cafes"
  },
  {
    nombre: "Té Negro x 250 g",
    precio: 1200,
    descripcion: "Energía · Antioxidantes · Digestivo · Natural",
    imagen: "img/te-negro.jpg",
    categoria: "cafes"
  },





  // ===== CONGELADOS =====
  {
    nombre: "Mix de Frutos Rojos Congelados x 500 g",
    precio: 11000,
    descripcion: "Antioxidantes · Vitaminas · Natural",
    imagen: "img/mix-frutos-rojos.jpg",
    categoria: "congelados",
    destacado: true
  },

// ===== ENDULZANTES & NATURALES =====
  {
    nombre: "Miel",
    descripcion: "Natural · Sin aditivos · Energía · Antioxidantes",
    imagen: "img/miel.jpg",
    categoria: "endulzantes",
    variantes: [
      { etiqueta: "250 g", precio: 3500 },
      { etiqueta: "500 g", precio: 6000 },
      { etiqueta: "1 kg",  precio: 11000 }   
    ]
  },
  {
    nombre: "Aceite de Coco Neutro",
    descripcion: "Sin sabor · Cocción saludable · Grasas buenas · Natural",
    imagen: "img/aceite-coco-neutro.jpg",
    categoria: "endulzantes",
    variantes: [
      { etiqueta: "200 g", precio: 7000 },
      { etiqueta: "360 g", precio: 9300 }
    ]
  },
  {
    nombre: "Aceite de Coco Virgen",
    descripcion: "Extra virgen · Aroma natural · Grasas saludables · Sin refinar",
    imagen: "img/aceite-coco-virgen.jpg",
    categoria: "endulzantes",
    variantes: [
      { etiqueta: "200 g", precio: 10000 },
      { etiqueta: "360 g", precio: 16500 }
    ]
  },

  {
    nombre: "Aceite de Chía x 250 g",
    precio: 0,
    descripcion: "Omega 3 · Antioxidantes · Piel · Grasas saludables",
    imagen: "img/aceite-chia.jpg",
    categoria: "endulzantes"
  },
  {
    nombre: "Aceite de Lino x 250 g",
    precio: 0,
    descripcion: "Omega 3 · Antiinflamatorio · Corazón · Grasas saludables",
    imagen: "img/aceite-lino.jpg",
    categoria: "endulzantes"
  },
  {
    nombre: "Aceite de Sésamo x 250 g",
    precio: 0,
    descripcion: "Antioxidantes · Calcio · Grasas saludables · Natural",
    imagen: "img/aceite-sesamo.jpg",
    categoria: "endulzantes"
  },
  {
    nombre: "Aceite de Palta x 250 g",
    precio: 0,
    descripcion: "Vitamina E · Grasas saludables · Corazón · Natural",
    imagen: "img/aceite-palta.jpg",
    categoria: "endulzantes"
  },
  {
  nombre: "Aceite de Oliva Extra Virgen 1 Lt",
  precio: 15000,
  descripcion: "Primera Prensada · Natural · Sin Aditivos",
  imagen: "img/aceite-oliva-extra-virgen.jpg",
  categoria: "endulzantes",
  destacado: true
},

  // ===== CHOCOLATES =====
  {
    nombre: "Almendras con Chocolate x 100 g",
    precio: 4500,
    descripcion: "Almendras · Chocolate · Energía · Antioxidantes",
    imagen: "img/almendras-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Arándanos con Chocolate x 100 g",
    precio: 5500,
    descripcion: "Arándanos · Chocolate · Antioxidantes · Vitaminas",
    imagen: "img/arandanos-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Café con Chocolate x 100 g",
    precio: 5000,
    descripcion: "Café · Chocolate · Energía · Antioxidantes",
    imagen: "img/cafe-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Cereal con Chocolate x 100 g",
    precio: 4500,
    descripcion: "Cereal · Chocolate · Energía · Fibra",
    imagen: "img/cereal-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Maní con Chocolate x 100 g",
    precio: 3000,
    descripcion: "Maní · Chocolate · Proteínas · Energía",
    imagen: "img/mani-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Naranja con Chocolate x 100 g",
    precio: 5500,
    descripcion: "Naranja · Chocolate · Vitamina C · Antioxidantes",
    imagen: "img/naranja-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Pasas de Uva con Chocolate x 100 g",
    precio: 3500,
    descripcion: "Pasas · Chocolate · Hierro · Energía",
    imagen: "img/pasas-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Chocolate 70% x 100 g",
    precio: 6000,
    descripcion: "Cacao intenso · Antioxidantes · Bajo azúcar · Artesanal",
    imagen: "img/chocolate-70.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Chocolate 100% x 100 g",
    precio: 7700,
    descripcion: "Puro cacao · Sin azúcar · Antioxidantes · Intenso",
    imagen: "img/chocolate-100.jpg",
    categoria: "chocolates"
  },
   {
    nombre: "Medallones de chocolate semiamargo x 100 g",
    precio: 2400,
    descripcion: "Puro cacao · Sin azúcar · Antioxidantes · Intenso",
    imagen: "img/medallon-de-chocolate.jpg",
    categoria: "chocolates"
  },
  {
    nombre: "Chips de Chocolate Semiamargo x 250 g",
    precio: 5000,
    descripcion: "Repostería · Antioxidantes · Cacao intenso · Sin conservantes",
    imagen: "img/chips-chocolate-semiamargo.jpg",
    categoria: "chocolates"
  },


];

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

  function mover(dir) {
    if (bloqueado) return;
    bloqueado = true;
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

const destacados = productos.filter(p => p.destacado === true);
crearCarrusel("productos-destacados", destacados);

if (typeof categoriaActual !== "undefined") {
  const contenedorCategoria = document.getElementById("productos-categoria");
  if (contenedorCategoria) {
    productos
      .filter(p => p.categoria === categoriaActual)
      .forEach(producto => {

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

      });
  }
}

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
  const ANCHO_CENTRO  = Math.round(anchoWrapper * 0.38);
  const ANCHO_LATERAL = Math.round(anchoWrapper * 0.28);
  const PASO = ANCHO_LATERAL;
  const GAP = 0;

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
      height: 500px;
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

  function mover(dir) {
    if (bloqueado) return;
    bloqueado = true;
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
  wrapper.addEventListener("touchstart", () => {
    clearInterval(autoPlay);
    autoPlay = setInterval(() => mover(1), 4000);
  }, { passive: true });
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
    const enNombre = normalizar(p.nombre).includes(query);
    const enDescripcion = normalizar(p.descripcion).includes(query);
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

