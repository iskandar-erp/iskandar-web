export const siteContent = {
  hero: {
    title: 'ISKANDAR',
    tagline: 'El mismo fuego, traducido.',
    subtitle: 'Integración open source de ERPs para América Latina.',
    description:
      'Framework en Rust que expone ERPs heredados como APIs REST modernas y limpias. Un binario sin dependencias. Una interfaz universal para cualquier ERP.',
    ctaPrimary: 'Ver en GitHub',
    ctaSecondary: 'Explorar Docs',
  },
  why: {
    label: 'El Problema',
    title: 'Por qué existe Iskandar',
    paragraphs: [
      'En este momento, algún desarrollador en América Latina está mirando un ERP sin API, sin webhooks y con documentación que no se actualiza desde 2003.',
      'Necesita conectarlo a un dashboard, un agente de IA, un pipeline de automatización — cualquier cosa moderna. Y está solo.',
      'Este proyecto existe porque el open source nos dio herramientas cuando no podíamos pagar licencias. PostgreSQL cuando SQL Server estaba fuera de alcance. Linux cuando Windows no era opción.',
      'Iskandar es nuestra forma de devolverlo.',
    ],
  },
  what: {
    label: 'La Solución',
    title: 'Qué hace Iskandar',
    subtitle:
      'Abstrae los detalles de implementación — DLLs nativas, protocolos propietarios, bases de datos Firebird — detrás de una interfaz universal.',
    codeExample: `use iskandar::ERPClient;

let erp = ERPClient::new("microsip", &config)?;

let factura = erp.facturas()?.crear(NuevaFactura {
    cliente_id: 1042,
    renglones: vec![
        Renglon { articulo_id: 88, unidades: 3.0, precio: 450.00 },
    ],
})?;

// Una interfaz. Cualquier ERP.
println!("Factura {} creada exitosamente", factura.folio);`,
    features: [
      {
        title: 'Interfaz Universal',
        description: 'Un solo API para todos los ERPs. Sin importar el proveedor, la interfaz es la misma.',
        icon: 'Layers',
      },
      {
        title: 'Provider Pattern',
        description: 'Cada ERP implementa el contrato ERPProvider. Al core no le importa cómo.',
        icon: 'Puzzle',
      },
      {
        title: 'API REST',
        description: 'Capa HTTP opcional con axum. Expone tu ERP al mundo moderno en minutos.',
        icon: 'Globe',
      },
      {
        title: 'Rust de punta a punta',
        description: 'Un binario compilado sin dependencias: lo descargas, lo pones junto a tu ERP y funciona. Type-safe con serde.',
        icon: 'Shield',
      },
    ],
  },
  ecosystem: {
    label: 'Cobertura',
    title: 'El ecosistema que cubrimos',
    subtitle:
      'Construido para el paisaje de ERPs que realmente mueve los negocios latinoamericanos.',
    countries: [
      { name: 'México', erps: ['Microsip', 'CONTPAQi', 'Aspel'], code: 'MX', value: 3 },
      { name: 'Colombia', erps: ['Siigo', 'World Office'], code: 'CO', value: 2 },
      { name: 'Perú', erps: ['Defontana', 'Alegra'], code: 'PE', value: 2 },
      { name: 'Chile', erps: ['Defontana', 'Alegra'], code: 'CL', value: 2 },
      { name: 'Centroamérica', erps: ['Microsip'], code: 'CA', value: 1 },
    ],
  },
  architecture: {
    label: 'Arquitectura',
    title: 'Diseñado para extensibilidad',
    subtitle:
      'La interfaz ERPProvider define el contrato. Los providers lo implementan. Al core no le importa cómo.',
    modules: [
      {
        name: 'iskandar-core',
        description: 'El trait ERPProvider, el ERPClient universal y los modelos compartidos',
        icon: 'Cpu',
      },
      {
        name: 'providers/',
        description: 'Un crate independiente por ERP — sus dependencias no contaminan al resto',
        icon: 'Boxes',
      },
      {
        name: 'iskandar-api',
        description: 'Rutas axum (capa HTTP opcional)',
        icon: 'Network',
      },
      {
        name: 'iskandar-cli',
        description: 'El binario iskandar: init / serve / test',
        icon: 'Terminal',
      },
    ],
  },
  stats: {
    label: 'Estado',
    title: 'Estado del proyecto',
    subtitle: 'v0.1.0-alpha — El momento correcto para influir en el diseño.',
    items: [
      { label: 'Versión', value: '0.1.0', suffix: 'alpha' },
      { label: 'ERPs Target', value: '8', suffix: '+' },
      { label: 'Países', value: '6', suffix: '+' },
      { label: 'Licencia', value: 'AGPL', suffix: 'v3' },
    ],
  },
  contribute: {
    label: 'Contribuir',
    title: 'Cómo contribuir',
    subtitle:
      'La contribución más valiosa ahora mismo es un nuevo provider. Si tienes acceso a un ERP que no está en la lista, tienes todo lo que necesitas.',
    steps: [
      {
        title: 'Lee CONTRIBUTING.md',
        description: 'Entiende las guías, convenciones y el flujo de trabajo del proyecto.',
        icon: 'BookOpen',
      },
      {
        title: 'Elige un ERP',
        description: 'Identifica un ERP que conozcas y que no esté en la lista de providers.',
        icon: 'Target',
      },
      {
        title: 'Implementa el Provider',
        description: 'Sigue la interfaz ERPProvider y construye la integración.',
        icon: 'Code',
      },
      {
        title: 'Abre un PR',
        description: 'Envía tu contribución. Cada provider nuevo es una victoria para todos.',
        icon: 'GitPullRequest',
      },
    ],
  },
  footer: {
    builtBy: 'DCA Analytics',
    location: 'Tlalnepantla, Estado de México',
    description:
      'Nombrado en honor a Alejandro de Macedonia — un muchacho de la periferia que redibujó el mapa del mundo conocido con audacia y muy pocos recursos.',
    license: 'AGPL v3',
  },
  nav: {
    github: 'https://github.com/iskandar-erp/iskandar',
    links: [
      { name: 'Problema', href: '#why' },
      { name: 'Solución', href: '#what' },
      { name: 'Ecosistema', href: '#ecosystem' },
      { name: 'Arquitectura', href: '#architecture' },
      { name: 'Estado', href: '#stats' },
      { name: 'Contribuir', href: '#contribute' },
    ],
  },
};
