/* =========================================================================
   TODO LO QUE CAMBIA DE UN CLIENTE A OTRO ESTÁ ACÁ.
   Textos, contacto, redes y fotos de Neo Design Lanús. Los componentes no se tocan.
   Las imágenes van en public/img/ y se escriben sin "/" adelante ni extensión:
   "img/cocinas/01" usa img/cocinas/01.webp (800 px) y, si dice grande: true,
   img/cocinas/01-g.webp (1600 px) para verla ampliada.
   Los textos salen de la web anterior (neodesignlanus.com.ar, hecha en Wix).
   ========================================================================= */

/** Dirección de la página de KRSp para el crédito del pie. Vacía hasta que exista. */
export const SITIO_KRSP = "";

export const sitio = {
  nombre: "Neo Design",
  /** Segunda línea del logo en el header */
  bajada: "LANÚS · MUEBLES A MEDIDA",
  /** Nombre completo (pie, Google) */
  nombreCompleto: "Neo Design Lanús",
  /** URL final publicada (con / al final). Se usa para SEO y vista previa. */
  url: "https://vgparedes.github.io/neo-design-lanus-web/",
  titulo: "Neo Design Lanús · Muebles de melamina a medida",
  descripcion:
    "Diseñamos, fabricamos e instalamos muebles de melamina a medida en Lanús: cocinas, placares, dormitorios, comercios y oficinas. Envíos a todo el país.",
};

/* ---------- Páginas: ruta, texto del menú y datos para Google / WhatsApp ----------
   Cada página es un archivo en src/paginas/ y un "case" en src/App.tsx. Ver LEEME.md. */
export const paginas = {
  "": { menu: "Inicio", titulo: sitio.titulo, descripcion: sitio.descripcion },
  hogar: {
    menu: "Hogar",
    titulo: "Hogar · Neo Design Lanús",
    descripcion: "Cocinas, placares, dormitorios, baños, espejos, sillones y mesas a medida. Mirá trabajos reales hechos en nuestro taller de Lanús Este.",
  },
  comercios: {
    menu: "Comercios y oficinas",
    titulo: "Comercios y oficinas · Neo Design Lanús",
    descripcion: "Mostradores, recibidores, estanterías con luz LED y amoblamiento integral de oficinas y consultorios, diseñados y fabricados a medida en Lanús.",
  },
  "proyectos-inmobiliarios": {
    menu: "Proyectos inmobiliarios",
    titulo: "Proyectos inmobiliarios · Neo Design Lanús",
    descripcion: "Cocinas y placares para edificios y grandes emprendimientos. Acompañamos a constructores y arquitectos desde los planos hasta la instalación.",
  },
  decoracion: {
    menu: "Decoración",
    titulo: "Decoración · Neo Design Lanús",
    descripcion: "Organizadores, percheros, espejos y accesorios para la casa. Consultá precio y disponibilidad por WhatsApp a Neo Design Lanús.",
  },
  contacto: {
    menu: "Contacto",
    titulo: "Contacto · Neo Design Lanús",
    descripcion: "Pedí tu presupuesto de muebles a medida. Escribinos por WhatsApp o acercate al taller: Gral. Ferré 2101, esquina Margarita Weild, Lanús Este.",
  },
} satisfies Record<string, { menu: string; titulo: string; descripcion: string }>;
export type Ruta = keyof typeof paginas;

export const contacto = {
  whatsapp: "5491164444340", // solo números, con 549 adelante
  /* Los teléfonos y mails NUNCA se muestran escritos en la página (los levantan los bots
     de spam): van como botones con "etiqueta". El número y la dirección quedan solo en el link. */
  mails: [
    { etiqueta: "Mandar un mail", direccion: "neodesignlanus@gmail.com" },
    { etiqueta: "Mail alternativo", direccion: "rubentdu@gmail.com" }, // figuraba en la web anterior
  ],
  telefonos: [
    { etiqueta: "WhatsApp", numero: "5491164444340" },
    { etiqueta: "WhatsApp, otra línea", numero: "5491123097332" },
  ],
  direccion: "Gral. Ferré 2101, esq. Margarita Weild",
  localidad: "Lanús Este, Buenos Aires",
  mapa: "https://www.google.com/maps/search/?api=1&query=General+Ferr%C3%A9+2101%2C+Lan%C3%BAs+Este%2C+Buenos+Aires",
  temas: ["Cocina", "Placard o vestidor", "Dormitorio", "Comercio u oficina", "Proyecto inmobiliario", "Otro"],
  redes: [
    { nombre: "Instagram", url: "https://www.instagram.com/neodesignlanus/" },
    { nombre: "Facebook", url: "https://www.facebook.com/neodesignlanus/" },
  ],
};

/** Menú. "#seccion" lleva a una sección del inicio; "hogar/" a otra página (sin "/" adelante). */
export const nav = [
  { texto: "Hogar", href: "hogar/", ruta: "hogar" },
  { texto: "Comercios y oficinas", href: "comercios/", ruta: "comercios" },
  { texto: "Proyectos", href: "proyectos-inmobiliarios/", ruta: "proyectos-inmobiliarios" },
  { texto: "Decoración", href: "decoracion/", ruta: "decoracion" },
  { texto: "Nosotros", href: "#nosotros", ruta: "" },
] as { texto: string; href: string; ruta: Ruta }[];

/* ============================== INICIO ============================== */

export const hero = {
  etiqueta: "Muebles en melamina a medida · Lanús Este",
  /** Cada elemento es una línea. La palabra de "acento" va en itálica y en color. */
  titulo: ["Diseñamos,", "producimos", "e instalamos."],
  acento: "instalamos.",
  bajada:
    "Amoblamientos para el hogar, oficinas y negocios, con un estilo original y moderno. Nuestra carta de presentación: la recomendación de nuestros clientes.",
  accion: { texto: "Ver trabajos", href: "hogar/" },
  accion2: "Pedir presupuesto",
  /** Foto de la derecha: base sin extensión; se usan portada-640/1080/1280.webp */
  foto: "img/portada",
  fotoAlt: "Cocina con bajo mesada en madera clara y alacenas negras",
  fotoEpigrafe: "Cocina · Bajo mesada en paraíso laqueado + alacenas Rauvisio negro",
};

/** Las 4 grandes líneas de trabajo: tarjetas que se ensanchan al elegirlas. */
export const rubros = {
  etiqueta: "Qué hacemos",
  titulo: "Un mueble para cada espacio",
  intro: "Cocinas, placares, dormitorios y living; también locales, consultorios, oficinas y edificios enteros.",
  acento: "edificios enteros",
  lista: [
    { nombre: "Hogar", detalle: "Cocinas, placares, dormitorios, baños, espejos, sillones y mesas.", href: "hogar/", imagen: "img/cocinas/02" },
    { nombre: "Comercios y oficinas", detalle: "Mostradores, recibidores, estanterías con luz LED, escritorios y bibliotecas.", href: "comercios/", imagen: "img/comercios/08" },
    { nombre: "Proyectos inmobiliarios", detalle: "Cocinas y placares para edificios, junto a constructores y arquitectos.", href: "proyectos-inmobiliarios/", imagen: "img/proyectos/10" },
    { nombre: "Decoración", detalle: "Organizadores, percheros y accesorios para completar cada ambiente.", href: "decoracion/", imagen: "img/decoracion/01" },
  ],
};

/** Cómo trabajamos: lista numerada a la derecha, título fijo a la izquierda. */
export const proceso = {
  etiqueta: "Cómo trabajamos",
  titulo: "Del plano a tu casa",
  lista: [
    { nombre: "Diseño", descripcion: "Te asesoramos y sugerimos soluciones para aprovechar cada centímetro." },
    { nombre: "Producción", descripcion: "Fabricamos en nuestro taller de Lanús con melaminas Egger y herrajes Häfele." },
    { nombre: "Instalación", descripcion: "Nuestro equipo arma e instala cada mueble y lo deja listo para usar." },
    { nombre: "Envíos", descripcion: "Hacemos envíos a todo el país." },
  ],
};

export const nosotros = {
  etiqueta: "Nosotros",
  titulo: "Taller propio en Lanús Este",
  imagen: "img/nosotros/01",
  imagenAlt: "Dos personas del equipo armando un placard en una obra",
  intro: "Nuestro sello distintivo es la perfección en los detalles y la garantía en cada trabajo.",
  acento: "la perfección en los detalles",
  apoyo:
    "Contamos con un equipo responsable y de absoluta confianza que trabaja codo a codo en cada nuevo desafío. Nos capacitamos siempre para ofrecer la última tecnología en herrajes y accesorios.",
  principios: [
    { titulo: "Estilo original y moderno", detalle: "Diseños pensados para tu espacio, no muebles de catálogo." },
    { titulo: "Materiales de primera", detalle: "Melaminas Egger y herrajes Häfele, nacionales e importados." },
    { titulo: "Garantía", detalle: "Respondemos por cada trabajo realizado." },
  ],
  /** Fotos chicas del taller debajo del texto */
  fotos: [
    { src: "img/nosotros/02", alt: "Frente del taller de Neo Design en Lanús Este" },
    { src: "img/nosotros/03", alt: "Pintando una pieza en el taller" },
  ],
};

export const contactoSeccion = {
  etiqueta: "Presupuesto sin cargo",
  titulo: "Contanos tu idea",
  acento: "idea",
  intro: "Mandanos las medidas, una foto del lugar o una idea, y te respondemos a la brevedad.",
  boton: "Escribinos",
  modalEtiqueta: "Nuevo mensaje",
  modalTitulo: "¿Qué mueble necesitás?",
  temaPregunta: "¿Para qué ambiente es?",
  campos: { nombre: "Nombre", zona: "Barrio o localidad", mail: "Mail", mensaje: "Mensaje (medidas, colores, ideas)", opcional: "opcional" },
  nota: "Se abre WhatsApp con el mensaje armado. No guardamos tus datos.",
  enviar: "Enviar por WhatsApp",
  cancelar: "Cancelar",
  error: "Completá tu nombre y el mensaje para armarlo.",
};

/* ============================== PÁGINAS ============================== */

/** Primer panel de cada página (título, bajada y 3 fotos de muestra). */
export const paneles = {
  hogar: {
    etiqueta: "Hogar",
    titulo: "Para todos tus ambientes.",
    acento: "ambientes.",
    bajada: "Cocinas, placares, dormitorios, baños, espejos, sillones y mesas. Todo lo que ves acá lo hicimos nosotros.",
    fotos: ["img/cocinas/02", "img/placares/02", "img/sillones/01"],
  },
  comercios: {
    etiqueta: "Comercios y oficinas",
    titulo: "Locales que dan ganas de entrar.",
    acento: "entrar.",
    bajada: "Hacemos instalaciones para negocios: recibidores, mostradores, estanterías e iluminación LED. Y amoblamientos integrales de oficina: escritorios, bibliotecas y archivos.",
    fotos: ["img/comercios/08", "img/comercios/23", "img/comercios/10"],
  },
  "proyectos-inmobiliarios": {
    etiqueta: "Proyectos inmobiliarios",
    titulo: "Cocinas y placares para edificios.",
    acento: "edificios.",
    bajada: "Producimos e instalamos amoblamientos integrales de cocina y placares para grandes emprendimientos inmobiliarios.",
    fotos: ["img/proyectos/10", "img/proyectos/07", "img/proyectos/11"],
  },
  decoracion: {
    etiqueta: "Decoración",
    titulo: "Los detalles que completan la casa.",
    acento: "completan",
    bajada: "Organizadores, percheros, espejos y accesorios. Consultanos precio y disponibilidad por WhatsApp.",
    fotos: ["img/decoracion/01", "img/decoracion/18", "img/decoracion/10"],
  },
};

/** Filtros de la galería de Hogar: cada uno usa la lista de fotos con su mismo nombre. */
export const ambientes = [
  { id: "cocinas", nombre: "Cocinas" },
  { id: "placares", nombre: "Placares y vestidores" },
  { id: "dormitorios", nombre: "Dormitorios" },
  { id: "sala", nombre: "Living" },
  { id: "escritorios", nombre: "Escritorios" },
  { id: "banos", nombre: "Baños" },
  { id: "espejos", nombre: "Espejos" },
  { id: "sillones", nombre: "Sillones" },
  { id: "mesas", nombre: "Mesas y sillas" },
] as const;

/** Textos de la página de proyectos inmobiliarios (la lista numerada debajo del panel). */
export const proyectos = {
  etiqueta: "Cómo acompañamos",
  titulo: "Junto a constructores y arquitectos",
  puntos: [
    { nombre: "Desde los planos", descripcion: "Acompañamos todo el proceso creativo y de diseño de planos, asesorando y sugiriendo soluciones basadas en nuestra experiencia." },
    { nombre: "Materiales de primera línea", descripcion: "Trabajamos con materiales nacionales e importados de primera línea." },
    { nombre: "Herrajes al día", descripcion: "Nos capacitamos para ofrecer la tecnología más nueva en herrajes y accesorios." },
    { nombre: "Equipo de confianza", descripcion: "Un equipo responsable que trabaja codo a codo en cada obra. Juntos ofrecemos la mejor calidad y servicio." },
  ],
};

export const contactoPagina = {
  etiqueta: "Contacto",
  titulo: "Contactanos para ver la calidad de nuestros muebles.",
  acento: "calidad",
  bajada: "Escribinos con tu consulta y te contestamos a la brevedad. También podés acercarte al taller.",
  dondeTitulo: "Dónde estamos",
  verMapa: "Ver en el mapa",
  telefonosTitulo: "WhatsApp",
  mailTitulo: "Mail",
  redesTitulo: "Redes",
};

export const galeriaTextos = {
  todo: "Todo",
  fotos: "fotos",
  ampliar: "Ampliar foto",
  anterior: "Foto anterior",
  siguiente: "Foto siguiente",
  cerrar: "Cerrar",
  consultar: "Consultar por WhatsApp",
  /** Mensaje armado al consultar desde una foto. Lleva el link a la foto: WhatsApp muestra
   *  su miniatura arriba del mensaje, así el dueño sabe cuál es. Si la foto no tiene título,
   *  se usa el nombre del ambiente o de la página. */
  mensaje: ({ grupo, titulo, detalle, link, producto = false }: { grupo: string; titulo?: string; detalle?: string; link: string; producto?: boolean }) =>
    [
      `Hola! Vi en la web este ${producto ? "producto" : "trabajo"} de *${grupo}* y me interesa${titulo ? ":" : " algo parecido."}`,
      titulo && `*${titulo}*`,
      detalle,
      link,
      producto ? "¿Me podrían pasar precio y si lo tienen disponible? ¡Gracias!" : "¿Me podrían pasar precio y tiempo de entrega? ¡Gracias!",
    ].filter(Boolean).join("\n"),
  ctaTitulo: "¿Querés algo así para tu espacio?",
  ctaTexto: "Mandanos medidas o una foto y te pasamos presupuesto.",
};

export const pie = {
  lema: "Diseñamos, producimos e instalamos muebles de melamina a medida desde nuestro taller de Lanús Este.",
  secciones: "Secciones",
  donde: "Visitanos",
  comoLlegar: "Cómo llegar",
  escribinos: "Escribinos",
  derechos: "Neo Design Lanús. Todos los derechos reservados.",
  volver: "Volver arriba",
};

/* ============================== FOTOS ==============================
   Una lista por ambiente o página. src sin extensión; w y h son las medidas
   de la versión de 800 px (sirven para que la grilla no salte al cargar).
   t = título y d = detalle (opcionales, se ven al ampliar la foto).
   Para sumar una foto: guardala como WebP de 800 px en la carpeta y agregá su línea. */
export type Foto = { src: string; w: number; h: number; grande?: boolean; t?: string; d?: string };

/* Cada foto tiene su propia dirección (/foto/sillones-03/) con su vista previa para WhatsApp.
   Al compilar se arma una página chiquita por foto que lleva a su galería con la foto abierta.
   Para eso cada carpeta de fotos dice en qué página está. */
export const paginaDeFotos: Record<string, Ruta> = {
  cocinas: "hogar", dormitorios: "hogar", escritorios: "hogar", sala: "hogar", placares: "hogar",
  banos: "hogar", espejos: "hogar", sillones: "hogar", mesas: "hogar",
  comercios: "comercios", proyectos: "proyectos-inmobiliarios", decoracion: "decoracion",
};
/** "img/sillones/03" -> "sillones-03" */
export const idFoto = (src: string) => src.replace(/^img\//, "").replace(/\//g, "-");
/** Dirección pública de la página de una foto (la que va en el mensaje de WhatsApp) */
export const linkFoto = (src: string) => `${sitio.url}foto/${idFoto(src)}/`;

export const fotos = {
  cocinas: [
    { src: "img/cocinas/01", w: 720, h: 1006, grande: true },
    { src: "img/cocinas/02", w: 800, h: 600, grande: true, t: "Bajo mesada en paraíso laqueado + alacenas Rauvisio negro" },
    { src: "img/cocinas/03", w: 800, h: 449, grande: true },
  ],
  dormitorios: [
    { src: "img/dormitorios/01", w: 800, h: 600, grande: true, t: "Cama box Queen con cajones y luz perimetral", d: "Mesas de luz espejadas y respaldo capitoné con tachas." },
    { src: "img/dormitorios/02", w: 780, h: 1040, grande: true, t: "Dormitorio juvenil" },
  ],
  escritorios: [
    { src: "img/escritorios/01", w: 768, h: 1024, grande: true },
    { src: "img/escritorios/02", w: 800, h: 600, grande: true },
  ],
  sala: [
    { src: "img/sala/01", w: 800, h: 600, grande: true },
    { src: "img/sala/02", w: 800, h: 600, grande: true },
    { src: "img/sala/03", w: 800, h: 600, grande: true },
  ],
  placares: [
    { src: "img/placares/01", w: 800, h: 600, grande: true },
    { src: "img/placares/02", w: 800, h: 1259, grande: true },
    { src: "img/placares/03", w: 768, h: 1024, grande: true },
    { src: "img/placares/04", w: 800, h: 990, grande: true },
    { src: "img/placares/05", w: 800, h: 992, grande: true },
    { src: "img/placares/06", w: 768, h: 1024, grande: true },
    { src: "img/placares/07", w: 768, h: 1024, grande: true },
    { src: "img/placares/08", w: 800, h: 842 },
    { src: "img/placares/09", w: 768, h: 1024, grande: true },
    { src: "img/placares/10", w: 800, h: 1020, grande: true },
    { src: "img/placares/11", w: 720, h: 1280, grande: true },
    { src: "img/placares/12", w: 800, h: 1067, grande: true },
    { src: "img/placares/13", w: 800, h: 1137, grande: true },
    { src: "img/placares/14", w: 800, h: 752 },
    { src: "img/placares/15", w: 800, h: 1141, grande: true },
    { src: "img/placares/16", w: 800, h: 989, grande: true },
    { src: "img/placares/17", w: 800, h: 549 },
    { src: "img/placares/18", w: 800, h: 747, grande: true },
    { src: "img/placares/19", w: 550, h: 993 },
    { src: "img/placares/20", w: 778, h: 740 },
    { src: "img/placares/21", w: 800, h: 1309, grande: true },
    { src: "img/placares/22", w: 800, h: 1067, grande: true },
    { src: "img/placares/23", w: 800, h: 1131, grande: true },
    { src: "img/placares/24", w: 800, h: 884, grande: true },
    { src: "img/placares/25", w: 800, h: 933, grande: true },
    { src: "img/placares/26", w: 577, h: 1036, grande: true },
  ],
  banos: [
    { src: "img/banos/01", w: 800, h: 507 },
    { src: "img/banos/02", w: 800, h: 1067, grande: true },
    { src: "img/banos/03", w: 800, h: 1066, grande: true },
    { src: "img/banos/04", w: 768, h: 1024, grande: true },
    { src: "img/banos/05", w: 800, h: 1067, grande: true },
    { src: "img/banos/06", w: 768, h: 1024, grande: true },
    { src: "img/banos/07", w: 800, h: 1067, grande: true },
    { src: "img/banos/08", w: 800, h: 1070, grande: true },
    { src: "img/banos/09", w: 720, h: 1280, grande: true },
    { src: "img/banos/10", w: 800, h: 1067, grande: true },
    { src: "img/banos/11", w: 308, h: 410 },
    { src: "img/banos/12", w: 800, h: 1067, grande: true },
    { src: "img/banos/13", w: 800, h: 1007, grande: true },
    { src: "img/banos/14", w: 768, h: 1024, grande: true },
    { src: "img/banos/15", w: 768, h: 1024, grande: true },
    { src: "img/banos/16", w: 800, h: 891, grande: true },
    { src: "img/banos/17", w: 800, h: 449, grande: true },
    { src: "img/banos/18", w: 800, h: 600, grande: true },
    { src: "img/banos/19", w: 800, h: 1067, grande: true },
    { src: "img/banos/20", w: 720, h: 1280, grande: true },
    { src: "img/banos/21", w: 792, h: 1024, grande: true },
    { src: "img/banos/22", w: 800, h: 670, grande: true },
    { src: "img/banos/23", w: 768, h: 1024, grande: true },
    { src: "img/banos/24", w: 768, h: 1024, grande: true },
  ],
  espejos: [
    { src: "img/espejos/01", w: 800, h: 1149, grande: true },
    { src: "img/espejos/02", w: 768, h: 1024, grande: true },
    { src: "img/espejos/03", w: 705, h: 1193, grande: true },
    { src: "img/espejos/04", w: 800, h: 1067, grande: true },
    { src: "img/espejos/05", w: 576, h: 1024, grande: true },
    { src: "img/espejos/06", w: 800, h: 1232, grande: true },
    { src: "img/espejos/07", w: 332, h: 508 },
    { src: "img/espejos/08", w: 698, h: 933 },
    { src: "img/espejos/09", w: 780, h: 1040, grande: true },
    { src: "img/espejos/10", w: 800, h: 1067, grande: true },
    { src: "img/espejos/11", w: 701, h: 1213, grande: true },
    { src: "img/espejos/12", w: 800, h: 366, grande: true },
    { src: "img/espejos/13", w: 768, h: 1024, grande: true },
    { src: "img/espejos/14", w: 800, h: 747 },
    { src: "img/espejos/15", w: 465, h: 620 },
    { src: "img/espejos/16", w: 584, h: 1040, grande: true },
    { src: "img/espejos/17", w: 800, h: 1423, grande: true },
    { src: "img/espejos/18", w: 720, h: 1280, grande: true },
    { src: "img/espejos/19", w: 640, h: 800 },
    { src: "img/espejos/20", w: 800, h: 1424, grande: true },
    { src: "img/espejos/21", w: 800, h: 1067, grande: true },
    { src: "img/espejos/22", w: 800, h: 658, grande: true },
    { src: "img/espejos/23", w: 530, h: 1280, grande: true },
    { src: "img/espejos/24", w: 736, h: 1280, grande: true },
    { src: "img/espejos/25", w: 630, h: 1040, grande: true },
  ],
  sillones: [
    { src: "img/sillones/01", w: 800, h: 1067, grande: true },
    { src: "img/sillones/02", w: 800, h: 450, grande: true, t: "Sillón Victoriano con capitoné" },
    { src: "img/sillones/03", w: 800, h: 579, grande: true, t: "Sillón Chesterfield 3 cuerpos (2.00 m de frente)", d: "Tapizado en pana. Patas cromadas." },
    { src: "img/sillones/04", w: 800, h: 450, grande: true, t: "Sillón Chesterfield en L", d: "Tapizado en pana. Medidas: 2.70 m x 1.80 m." },
    { src: "img/sillones/05", w: 576, h: 1024, grande: true },
    { src: "img/sillones/06", w: 800, h: 378, grande: true },
    { src: "img/sillones/07", w: 800, h: 450, grande: true, t: "Sillón Victoriano 4 cuerpos + 2 sillones de 1 cuerpo + camastro", d: "Tapizados en pana. Patas cromadas." },
    { src: "img/sillones/08", w: 800, h: 600, grande: true },
    { src: "img/sillones/09", w: 800, h: 494, grande: true },
    { src: "img/sillones/10", w: 800, h: 600, grande: true },
    { src: "img/sillones/11", w: 483, h: 274, t: "Sillón Italiano 3 cuerpos con camastro", d: "Tapizado en pana. Patas de madera." },
    { src: "img/sillones/12", w: 768, h: 1024, grande: true, t: "Sillón Chesterfield 3 cuerpos + camastro", d: "Tapizado en pana antimanchas (2.00 m de frente). Camastro con capitoné en el asiento." },
    { src: "img/sillones/13", w: 800, h: 525, t: "Sillón esquinero con 2 camastros", d: "Tapizado en lino antimanchas. Patas cromadas. Medidas: 2.30 m x 2.30 m." },
    { src: "img/sillones/14", w: 800, h: 450, grande: true, t: "Sillón Chesterfield 3 cuerpos" },
    { src: "img/sillones/15", w: 800, h: 360, grande: true },
    { src: "img/sillones/16", w: 800, h: 312, grande: true, t: "Sillón Chesterfield 4 cuerpos + Chesterfield 2 cuerpos", d: "Tapizados en pana. Patas cromadas. 2.40 m y 1.60 m de frente." },
    { src: "img/sillones/17", w: 720, h: 605, t: "Sillón Italiano 3 cuerpos con camastro", d: "Tapizado en chenille. Patas de madera." },
    { src: "img/sillones/18", w: 800, h: 455, grande: true, t: "Sillón Victoriano 2 cuerpos (1.60 m de frente)", d: "Tapizado en chenille." },
    { src: "img/sillones/19", w: 800, h: 508, grande: true, t: "Sillón Chesterfield con cama catre", d: "2.30 m de frente." },
    { src: "img/sillones/20", w: 800, h: 520, grande: true, t: "Sillón Italiano 3 cuerpos con camastro", d: "Tapizado en chenille. Patas de madera." },
    { src: "img/sillones/21", w: 800, h: 747, grande: true, t: "Sillón Victoriano 1 cuerpo", d: "Tapizado en chenille. Patas cromadas." },
    { src: "img/sillones/22", w: 800, h: 523, grande: true, t: "Sillón Chesterfield 3 cuerpos", d: "Tapizado en talampaya. Patas cromadas." },
    { src: "img/sillones/23", w: 800, h: 360, grande: true },
    { src: "img/sillones/24", w: 800, h: 600, grande: true, t: "Sillón Chesterfield 3 cuerpos", d: "Tapizado en pana. Patas cromadas." },
    { src: "img/sillones/25", w: 800, h: 600, grande: true },
    { src: "img/sillones/26", w: 800, h: 669 },
    { src: "img/sillones/27", w: 800, h: 489, grande: true },
  ],
  mesas: [
    { src: "img/mesas/01", w: 800, h: 622 },
    { src: "img/mesas/02", w: 800, h: 600, grande: true },
    { src: "img/mesas/03", w: 800, h: 1073, grande: true, t: "Silla Isabella tapizada en Chenille" },
    { src: "img/mesas/04", w: 800, h: 816, grande: true },
    { src: "img/mesas/05", w: 576, h: 1024, grande: true },
    { src: "img/mesas/06", w: 800, h: 1069, grande: true, t: "Silla Abril respaldo tapizado en Chenille" },
    { src: "img/mesas/07", w: 800, h: 951, grande: true },
    { src: "img/mesas/08", w: 651, h: 1024, grande: true },
    { src: "img/mesas/09", w: 591, h: 1024, grande: true },
    { src: "img/mesas/10", w: 800, h: 554, t: "Mesa color. Patas de hierro negras + 6 sillas Isabella" },
    { src: "img/mesas/11", w: 800, h: 931, grande: true, t: "Mesa cantos de aluminio + 6 sillas Abril tapizadas" },
    { src: "img/mesas/12", w: 720, h: 548 },
    { src: "img/mesas/13", w: 800, h: 1039, grande: true },
    { src: "img/mesas/14", w: 800, h: 704, t: "Mesa color. Patas de hierro blancas + 4 sillas Eames" },
    { src: "img/mesas/15", w: 800, h: 991, grande: true },
    { src: "img/mesas/16", w: 576, h: 1024, grande: true },
    { src: "img/mesas/17", w: 800, h: 958, grande: true, t: "Mesa redonda  + 2 sillones Eames" },
    { src: "img/mesas/18", w: 800, h: 1042, grande: true },
    { src: "img/mesas/19", w: 800, h: 762, grande: true },
    { src: "img/mesas/20", w: 800, h: 1067, grande: true },
    { src: "img/mesas/21", w: 800, h: 1067, grande: true, t: "Silla Agostina" },
    { src: "img/mesas/22", w: 800, h: 871, grande: true },
    { src: "img/mesas/23", w: 800, h: 600, grande: true, t: "Mesa color patas cromadas" },
    { src: "img/mesas/24", w: 585, h: 1040, grande: true },
    { src: "img/mesas/25", w: 800, h: 687, grande: true, t: "Mesa color patas hierro negras" },
    { src: "img/mesas/26", w: 576, h: 1280, grande: true },
  ],
  comercios: [
    { src: "img/comercios/01", w: 800, h: 466, grande: true },
    { src: "img/comercios/02", w: 800, h: 659, grande: true },
    { src: "img/comercios/03", w: 678, h: 871 },
    { src: "img/comercios/04", w: 800, h: 700 },
    { src: "img/comercios/05", w: 800, h: 1504, grande: true },
    { src: "img/comercios/06", w: 768, h: 1024, grande: true },
    { src: "img/comercios/07", w: 584, h: 858 },
    { src: "img/comercios/08", w: 800, h: 600, grande: true },
    { src: "img/comercios/09", w: 800, h: 1067, grande: true },
    { src: "img/comercios/10", w: 800, h: 600, grande: true, t: "Consultorio psicológico" },
    { src: "img/comercios/11", w: 800, h: 600, grande: true },
    { src: "img/comercios/12", w: 576, h: 1024, grande: true },
    { src: "img/comercios/13", w: 800, h: 1423, grande: true },
    { src: "img/comercios/14", w: 666, h: 802 },
    { src: "img/comercios/15", w: 800, h: 1067, grande: true },
    { src: "img/comercios/16", w: 800, h: 1423, grande: true },
    { src: "img/comercios/17", w: 800, h: 600, grande: true, t: "Muebles consultorio psicológico" },
    { src: "img/comercios/18", w: 800, h: 598, grande: true },
    { src: "img/comercios/19", w: 584, h: 1040, grande: true },
    { src: "img/comercios/20", w: 618, h: 690 },
    { src: "img/comercios/21", w: 796, h: 576 },
    { src: "img/comercios/22", w: 800, h: 600, grande: true, t: "Consultorio psicológico" },
    { src: "img/comercios/23", w: 694, h: 680 },
    { src: "img/comercios/24", w: 699, h: 853 },
  ],
  decoracion: [
    { src: "img/decoracion/01", w: 768, h: 1024, grande: true, t: "Organizador acrílico - maquillaje y joyas" },
    { src: "img/decoracion/02", w: 444, h: 392, t: "Caramelera de vidrio con patas" },
    { src: "img/decoracion/03", w: 800, h: 901, grande: true, t: "Organizador plástico multiuso" },
    { src: "img/decoracion/04", w: 768, h: 1024, grande: true, t: "Organizador acrílico - maquillaje y joyas" },
    { src: "img/decoracion/05", w: 800, h: 415, grande: true, t: "Perchero pared 3 ganchos triples" },
    { src: "img/decoracion/06", w: 452, h: 452, t: "Espejo doble con aumento" },
    { src: "img/decoracion/07", w: 768, h: 1024, grande: true, t: "Organizador acrílico - maquillaje y joyas" },
    { src: "img/decoracion/08", w: 403, h: 405, t: "Set 5 bowls vidrio con tapa" },
    { src: "img/decoracion/09", w: 768, h: 1024, grande: true, t: "Perchero pared 3 ganchos triples" },
    { src: "img/decoracion/10", w: 800, h: 800, grande: true, t: "Escurridor platos y frutas" },
    { src: "img/decoracion/11", w: 800, h: 730, grande: true, t: "Organizador plástico multiuso" },
    { src: "img/decoracion/12", w: 800, h: 1008, grande: true, t: "Organizador plástico multiuso" },
    { src: "img/decoracion/13", w: 768, h: 1024, grande: true, t: "Organizador acrílico - maquillaje y joyas" },
    { src: "img/decoracion/14", w: 703, h: 724, t: "Organizador plástico multiuso" },
    { src: "img/decoracion/15", w: 800, h: 482, grande: true, t: "Perchero pared 4 ganchos triples" },
    { src: "img/decoracion/16", w: 800, h: 776, grande: true, t: "Escurridor platos y frutas" },
    { src: "img/decoracion/17", w: 452, h: 452, t: "Cajas de tela con tapa y manija" },
    { src: "img/decoracion/18", w: 768, h: 1024, grande: true, t: "Perchero pared cromado" },
    { src: "img/decoracion/19", w: 438, h: 438, t: "Organizador de zapatos" },
    { src: "img/decoracion/20", w: 800, h: 800, t: "Batidor automático café, huevo, leche" },
    { src: "img/decoracion/21", w: 452, h: 452, t: "Espejo doble con aumento" },
    { src: "img/decoracion/22", w: 500, h: 487, t: "Escurridor platos y frutas" },
    { src: "img/decoracion/23", w: 560, h: 557, t: "Péndulo" },
    { src: "img/decoracion/24", w: 537, h: 550, t: "Set 5 bowls vidrio con tapa" },
  ],
  proyectos: [
    { src: "img/proyectos/01", w: 800, h: 708 },
    { src: "img/proyectos/02", w: 800, h: 600, grande: true },
    { src: "img/proyectos/03", w: 800, h: 600, grande: true },
    { src: "img/proyectos/04", w: 800, h: 600, grande: true },
    { src: "img/proyectos/05", w: 800, h: 600 },
    { src: "img/proyectos/06", w: 800, h: 599 },
    { src: "img/proyectos/07", w: 780, h: 1040, grande: true },
    { src: "img/proyectos/08", w: 780, h: 1040, grande: true },
    { src: "img/proyectos/09", w: 800, h: 600 },
    { src: "img/proyectos/10", w: 800, h: 600, grande: true },
    { src: "img/proyectos/11", w: 800, h: 600, grande: true },
    { src: "img/proyectos/12", w: 780, h: 1040, grande: true },
  ],
  nosotros: [
    { src: "img/nosotros/01", w: 800, h: 683, grande: true },
    { src: "img/nosotros/02", w: 800, h: 600, grande: true },
    { src: "img/nosotros/03", w: 800, h: 946, grande: true },
    { src: "img/nosotros/04", w: 800, h: 600, grande: true },
  ],
} satisfies Record<string, Foto[]>;
