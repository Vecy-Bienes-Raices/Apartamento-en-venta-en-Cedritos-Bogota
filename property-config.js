/**
 * 🌍 CONFIGURACIÓN UNIVERSAL VECY - PLANTILLA MAESTRA (LIMPIA)
 * 
 * INSTRUCCIONES:
 * No editar esta plantilla directamente si desea crear un nuevo inmueble.
 * Use el script 'generator_vecy.py' para generar una nueva ficha.
 */

const propertyConfig = {
  // 1. SEO (Para Google y compartir en redes)
  seo: {
    title: "Venta de Apartamento Amplio en Cedritos, Usaquén | 83m² | Gran Potencial para Remodelar",
    description: "¿Buscas apartamento en Cedritos, Bogotá? Amplio inmueble de 83m², 3 habitaciones, 2 baños y estudio. Excelente ubicación cerca a Transmilenio. ¡Agenda tu visita!",
    keywords: "VentaApartamentosBogota, ApartamentoEnCedritos, InmobiliariaBogota, BienesRaicesColombia, Usaquen, InversionInmobiliaria, VecyBienesRaices, Remodelacion, ViviendaNorteBogota",
    propertyId: "ID-BOG-CE01",
    ogUrl: "https://ap-cedritos-bog-ce01.netlify.app/",
    ogImage: "assets/3.jpeg",
    author: "Vecy Bienes Raíces",
    copyright: "2026"
  },
  
  // 2. Encabezado Principal
  infoPrincipal: {
    headerBadge: "🚀 ¡Ubicación Privilegiada en Cedritos! 🏢",
    tituloHtml: "Amplio Apartamento en Cedritos, Usaquén",
    precioVenta: "$480.000.000",
    valorAdmin: "$361.000 (Pronto pago)",
    labelExtra: "✨ Estrato 4"
  },

  // 3. Rejilla de Detalles (Iconos y Datos Clave)
  detalles: [
    { label: "Área Const.", value: "83 m²", icon: "📐" },
    { label: "Habitaciones", value: "3 + Estudio", icon: "🛏️" },
    { label: "Baños", value: "2", icon: "🚿" },
    { label: "Parqueaderos", value: "1", icon: "🚗" },
    { label: "Antigüedad", value: "31 años", icon: "🏗️" },
    { label: "Cuarto Servicio", value: "Sí (o depósito)", icon: "🧺" },
    { label: "Estrato", value: "4", icon: "✨" },
    { label: "Ubicación", value: "Barrio Cedritos, Usaquén", icon: "📍" }
  ],

  // 4. Características Internas (Lista izquierda)
  caracteristicasInternas: [
    { name: "3 Alcobas Amplias", emoji: "🛏️" },
    { name: "Biblioteca / Home Office", emoji: "📚" },
    { name: "2 Baños Completos", emoji: "🛁" },
    { name: "Cocina Independiente", emoji: "🍳" },
    { name: "Cuarto Servicio / Depósito", emoji: "🧺" },
    { name: "Espacios Muy Iluminados", emoji: "☀️" }
  ],
  destacadoInterno: "Este inmueble representa un <strong>lienzo en blanco</strong> con un increíble potencial para ser remodelado a tu gusto y necesidades.",

  // 5. Características Externas (Lista derecha)
  caracteristicasExternas: [
    { name: "C.C. Caobos a pasos", emoji: "🛍️" },
    { name: "Construcción Clásica", emoji: "🏢" },
    { name: "Vigilancia 24/7", emoji: "👮" },
    { name: "Ascensor Disponible", emoji: "🛗" },
    { name: "Transmilenio a 2 cuadras", emoji: "🚌" },
    { name: "Cámara de Comercio cerca", emoji: "📍" }
  ],
  destacadoUbicacion: "Ubicación inmejorable en el corazón del norte, garantizando <strong>movilidad rápida</strong> y una variada oferta de restaurantes, parques y comercio local.",

  // 6. Mapa (Google Maps Embed)
  mapa: {
    urlEmbed: "https://maps.google.com/maps?q=Cedritos%2C+Bogota&t=&z=15&ie=UTF8&iwloc=&output=embed", 
    titulo: "Ubicación Cedritos"
  },

  // 7. Descripción Final / Análisis de Inversión
  descripcionFinal: {
    titulo: "💖 Tu Próximo Hogar o Inversión",
    texto: `
    <div class="roi-item">
      <p>Te presentamos este amplio y clásico apartamento en venta ubicado en el estratégico sector de Cedritos, localidad de Usaquén. Con un área privada de 83 m² y una excelente distribución, este inmueble representa un lienzo en blanco con un increíble potencial para ser remodelado a tu gusto y necesidades.</p>
      <ul class="roi-list">
        <li>✨ <strong>Construcción clásica y robusta:</strong> Ascensor, vigilancia 24/7 y administración económica.</li>
        <li>✨ <strong>Zonas de servicio:</strong> Cocina independiente y cuarto de servicio versátil.</li>
        <li>✨ Lideramos con tecnología para que encuentres la propiedad ideal. Sal de lo bueno y ven por lo mejor.</li>
      </ul>
      <div class="projection">
        ¡Contáctanos hoy mismo para agendar un recorrido virtual o presencial!
      </div>
      <br>
      <div style="text-align: center;">
         <a href="ficha-tecnica.html" class="btn-analisis">
            📋 VER MÁS DETALLES DEL APARTAMENTO
         </a>
      </div>
    </div>`
  },

  // 8. Multimedia (Fotos y Video)
  multimedia: {
    videoUrl: "assets/ap-ceditos-bog.mp4",
    videoThumbnail: "assets/3.jpeg",
    imagesCount: 14,
    imagePrefix: "assets/",
    imageExtension: ".jpeg",
    imagesList: [
        "assets/1.jpeg",
        "assets/2.jpeg",
        "assets/3.jpeg",
        "assets/4.jpeg",
        "assets/5.jpeg",
        "assets/6.jpeg",
        "assets/7.jpeg",
        "assets/8.jpeg",
        "assets/9.jpeg",
        "assets/10.jpeg",
        "assets/11.jpeg",
        "assets/12.jpeg",
        "assets/13.jpeg",
        "assets/14.jpeg"
    ]
  },

  // 9. Botón Compartir (Texto de WhatsApp)
  share: {
    whatsappText: `🏡 *APARTAMENTO EN VENTA - CEDRITOS*
    
💰 *Precio:* $480.000.000
📐 *Área:* 83 m²
🛏️ *Habitaciones:* 3 + Estudio
📍 *Ubicación:* Cedritos, Bogotá

🔗 *Ver Fotos y Detalles:*
https://ap-cedritos-bog-ce01.netlify.app/

#VentaApartamentosBogota #ApartamentoEnCedritos #InmobiliariaBogota #BienesRaicesColombia #Usaquen #InversionInmobiliaria #VecyBienesRaices #Remodelacion #ViviendaNorteBogota`
  }
};
