export interface Ciudad {
  slug: string;
  nombre: string;
  provincia: string;
  comunidad: string;
  h1: string;
  description: string;
  intro: string;
}

export const ciudades: Ciudad[] = [
  {
    slug: "madrid",
    nombre: "Madrid",
    provincia: "Madrid",
    comunidad: "Comunidad de Madrid",
    h1: "Fichaje obligatorio en Madrid",
    description:
      "Sistema de fichaje digital para empresas en Madrid. Cumple el Real Decreto-ley 8/2019 y evita sanciones de hasta 187.515 €. Prueba gratis.",
    intro:
      "Madrid es el mayor centro empresarial de España con más de 500.000 empresas. La Inspección de Trabajo en Madrid es una de las más activas del país en el control del registro de jornada. Si tienes empleados en Madrid, necesitas un sistema de fichaje digital que cumpla la normativa.",
  },
  {
    slug: "barcelona",
    nombre: "Barcelona",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    h1: "Fichaje obligatorio en Barcelona",
    description:
      "Sistema de fichaje digital para empresas en Barcelona. Cumple el RDL 8/2019 y la normativa catalana. Evita sanciones. Desde 19 €/mes.",
    intro:
      "Barcelona es un polo económico con fuerte presencia de startups, hostelería y turismo. La Inspección de Trabajo en Cataluña ha incrementado las actuaciones de control del registro de jornada. Fichados te ayuda a cumplir la ley de forma sencilla y digital.",
  },
  {
    slug: "valencia",
    nombre: "Valencia",
    provincia: "Valencia",
    comunidad: "Comunidad Valenciana",
    h1: "Fichaje obligatorio en Valencia",
    description:
      "Sistema de fichaje para empresas en Valencia. Cumple la normativa laboral española. Registro de jornada digital desde 19 €/mes.",
    intro:
      "Valencia combina un tejido empresarial diverso con sectores como la hostelería, la agricultura y la industria cerámica. Todas las empresas valencianas con empleados deben registrar la jornada desde 2019. Fichados ofrece la solución más sencilla para cumplir.",
  },
  {
    slug: "sevilla",
    nombre: "Sevilla",
    provincia: "Sevilla",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Sevilla",
    description:
      "Sistema de fichaje digital para empresas en Sevilla. Cumple el RDL 8/2019. Evita sanciones de Inspección de Trabajo. Desde 19 €/mes.",
    intro:
      "Sevilla es la capital económica de Andalucía con un fuerte sector servicios, turismo y agroalimentación. La Inspección de Trabajo en Andalucía está intensificando los controles del registro de jornada. Fichados garantiza el cumplimiento sin complicaciones.",
  },
  {
    slug: "zaragoza",
    nombre: "Zaragoza",
    provincia: "Zaragoza",
    comunidad: "Aragón",
    h1: "Fichaje obligatorio en Zaragoza",
    description:
      "Sistema de fichaje para empresas en Zaragoza. Registro de jornada digital conforme al RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Zaragoza es un importante centro logístico e industrial de España. Sus empresas de transporte, industria y comercio necesitan un sistema de fichaje fiable. Fichados te permite cumplir la normativa desde cualquier ubicación de la provincia.",
  },
  {
    slug: "malaga",
    nombre: "Málaga",
    provincia: "Málaga",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Málaga",
    description:
      "Sistema de fichaje para empresas en Málaga. Ideal para hostelería, turismo y tech. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Málaga se ha convertido en un hub tecnológico además de mantener su fuerte sector turístico y hostelero. Ya seas una startup del PTA o un hotel de la Costa del Sol, necesitas registrar la jornada de tus empleados. Fichados lo hace fácil.",
  },
  {
    slug: "murcia",
    nombre: "Murcia",
    provincia: "Murcia",
    comunidad: "Región de Murcia",
    h1: "Fichaje obligatorio en Murcia",
    description:
      "Sistema de fichaje para empresas en Murcia. Registro de jornada digital para agricultura, industria y servicios. Desde 19 €/mes.",
    intro:
      "Murcia destaca por su sector agroalimentario, con miles de trabajadores en explotaciones agrícolas y plantas de procesado. Fichados se adapta a las particularidades del campo murciano con fichaje móvil y offline.",
  },
  {
    slug: "palma-de-mallorca",
    nombre: "Palma de Mallorca",
    provincia: "Islas Baleares",
    comunidad: "Islas Baleares",
    h1: "Fichaje obligatorio en Palma de Mallorca",
    description:
      "Sistema de fichaje para empresas en Palma de Mallorca. Ideal para hostelería y turismo balear. Cumple el RDL 8/2019.",
    intro:
      "Palma de Mallorca y las Islas Baleares dependen en gran medida del turismo y la hostelería, con fuerte estacionalidad y contrataciones masivas en verano. Fichados escala contigo en temporada alta y se ajusta en invierno.",
  },
  {
    slug: "las-palmas",
    nombre: "Las Palmas de Gran Canaria",
    provincia: "Las Palmas",
    comunidad: "Canarias",
    h1: "Fichaje obligatorio en Las Palmas",
    description:
      "Sistema de fichaje para empresas en Las Palmas de Gran Canaria. Cumple la normativa laboral. Ideal para turismo y comercio canario.",
    intro:
      "Las Palmas de Gran Canaria es el motor económico de Canarias con un turismo que funciona todo el año. Hoteles, restaurantes y comercios canarios necesitan un sistema de fichaje adaptado a su realidad. Fichados es 100% digital y funciona desde cualquier isla.",
  },
  {
    slug: "bilbao",
    nombre: "Bilbao",
    provincia: "Vizcaya",
    comunidad: "País Vasco",
    h1: "Fichaje obligatorio en Bilbao",
    description:
      "Sistema de fichaje para empresas en Bilbao. Cumple el RDL 8/2019 y la normativa vasca. Registro de jornada digital desde 19 €/mes.",
    intro:
      "Bilbao es un centro industrial y de servicios del País Vasco con un tejido empresarial fuerte en industria, finanzas y tecnología. Fichados permite a las empresas vizcaínas cumplir con el registro de jornada de forma digital y sencilla.",
  },
  {
    slug: "alicante",
    nombre: "Alicante",
    provincia: "Alicante",
    comunidad: "Comunidad Valenciana",
    h1: "Fichaje obligatorio en Alicante",
    description:
      "Sistema de fichaje para empresas en Alicante. Ideal para turismo, hostelería y comercio. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Alicante combina turismo costero, comercio y un creciente sector tecnológico. Sus empresas necesitan un sistema de fichaje flexible que funcione tanto en la oficina como en hoteles y restaurantes de la Costa Blanca.",
  },
  {
    slug: "cordoba",
    nombre: "Córdoba",
    provincia: "Córdoba",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Córdoba",
    description:
      "Sistema de fichaje para empresas en Córdoba. Cumple el RDL 8/2019. Registro de jornada digital para pymes cordobesas.",
    intro:
      "Córdoba tiene un importante sector turístico, agroalimentario y de servicios. Las empresas cordobesas, desde los restaurantes del centro histórico hasta las cooperativas agrícolas, necesitan cumplir con el registro de jornada obligatorio.",
  },
  {
    slug: "valladolid",
    nombre: "Valladolid",
    provincia: "Valladolid",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Valladolid",
    description:
      "Sistema de fichaje para empresas en Valladolid. Registro de jornada digital conforme al RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Valladolid es un centro industrial y de servicios de Castilla y León, con presencia relevante del sector automovilístico y agroalimentario. Fichados ayuda a las empresas vallisoletanas a cumplir con el registro de jornada sin complicaciones.",
  },
  {
    slug: "vigo",
    nombre: "Vigo",
    provincia: "Pontevedra",
    comunidad: "Galicia",
    h1: "Fichaje obligatorio en Vigo",
    description:
      "Sistema de fichaje para empresas en Vigo. Industria, pesca y automoción. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Vigo es la ciudad más poblada de Galicia y un centro industrial clave con automoción, pesca y construcción naval. Fichados se adapta a los turnos industriales y las particularidades del sector pesquero vigués.",
  },
  {
    slug: "gijon",
    nombre: "Gijón",
    provincia: "Asturias",
    comunidad: "Principado de Asturias",
    h1: "Fichaje obligatorio en Gijón",
    description:
      "Sistema de fichaje para empresas en Gijón. Industria, hostelería y comercio asturiano. Cumple la normativa. Desde 19 €/mes.",
    intro:
      "Gijón es un importante centro industrial y comercial de Asturias. Las empresas gijonesas, desde la industria siderúrgica hasta la hostelería, necesitan un sistema de fichaje fiable que cumpla con la normativa laboral española.",
  },
  {
    slug: "hospitalet",
    nombre: "L'Hospitalet de Llobregat",
    provincia: "Barcelona",
    comunidad: "Cataluña",
    h1: "Fichaje obligatorio en L'Hospitalet de Llobregat",
    description:
      "Sistema de fichaje para empresas en L'Hospitalet de Llobregat. Cumple la normativa laboral. Registro digital desde 19 €/mes.",
    intro:
      "L'Hospitalet de Llobregat es la segunda ciudad de Cataluña y un importante centro empresarial del área metropolitana de Barcelona. Sus miles de empresas necesitan cumplir con el registro de jornada obligatorio desde 2019.",
  },
  {
    slug: "vitoria",
    nombre: "Vitoria-Gasteiz",
    provincia: "Álava",
    comunidad: "País Vasco",
    h1: "Fichaje obligatorio en Vitoria-Gasteiz",
    description:
      "Sistema de fichaje para empresas en Vitoria-Gasteiz. Industria y servicios alaveses. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Vitoria-Gasteiz, capital del País Vasco, tiene un fuerte sector industrial con empresas de automoción, aeronáutica y maquinaria. Fichados permite a las empresas alavesas cumplir con el registro de jornada de forma eficiente.",
  },
  {
    slug: "la-coruna",
    nombre: "A Coruña",
    provincia: "A Coruña",
    comunidad: "Galicia",
    h1: "Fichaje obligatorio en A Coruña",
    description:
      "Sistema de fichaje para empresas en A Coruña. Textil, tecnología y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "A Coruña es un centro empresarial gallego de primer nivel con presencia de grandes grupos textiles, tecnología y servicios. Fichados ofrece una solución digital que se adapta a empresas de cualquier tamaño y sector.",
  },
  {
    slug: "granada",
    nombre: "Granada",
    provincia: "Granada",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Granada",
    description:
      "Sistema de fichaje para empresas en Granada. Turismo, educación y tecnología. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Granada combina un potente sector turístico con un ecosistema tecnológico creciente alrededor de su universidad. Las empresas granadinas necesitan cumplir con el registro de jornada obligatorio. Fichados lo hace sencillo.",
  },
  {
    slug: "elche",
    nombre: "Elche",
    provincia: "Alicante",
    comunidad: "Comunidad Valenciana",
    h1: "Fichaje obligatorio en Elche",
    description:
      "Sistema de fichaje para empresas en Elche. Calzado, industria y comercio. Cumple la normativa laboral española. Desde 19 €/mes.",
    intro:
      "Elche es la capital del calzado español con un importante tejido industrial y comercial. Las fábricas, talleres y tiendas ilicitanas necesitan un sistema de fichaje que se adapte a sus turnos y procesos productivos.",
  },
  {
    slug: "oviedo",
    nombre: "Oviedo",
    provincia: "Asturias",
    comunidad: "Principado de Asturias",
    h1: "Fichaje obligatorio en Oviedo",
    description:
      "Sistema de fichaje para empresas en Oviedo. Servicios, administración y comercio. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Oviedo, capital del Principado de Asturias, concentra un importante sector servicios y administración pública. Las empresas ovetenses deben cumplir con el registro de jornada obligatorio. Fichados es la solución más sencilla.",
  },
  {
    slug: "santa-cruz-de-tenerife",
    nombre: "Santa Cruz de Tenerife",
    provincia: "Santa Cruz de Tenerife",
    comunidad: "Canarias",
    h1: "Fichaje obligatorio en Santa Cruz de Tenerife",
    description:
      "Sistema de fichaje para empresas en Santa Cruz de Tenerife. Turismo y servicios canarios. Cumple la normativa. Desde 19 €/mes.",
    intro:
      "Santa Cruz de Tenerife es un centro turístico y de servicios de Canarias. Desde hoteles del sur de la isla hasta comercios de la capital, todas las empresas tinerfeñas necesitan registrar la jornada de sus empleados.",
  },
  {
    slug: "pamplona",
    nombre: "Pamplona",
    provincia: "Navarra",
    comunidad: "Comunidad Foral de Navarra",
    h1: "Fichaje obligatorio en Pamplona",
    description:
      "Sistema de fichaje para empresas en Pamplona. Industria, automoción y servicios navarros. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Pamplona tiene un sector industrial fuerte con automoción, energías renovables y agroalimentación. Fichados permite a las empresas navarras cumplir con el registro de jornada de forma eficiente y digital.",
  },
  {
    slug: "almeria",
    nombre: "Almería",
    provincia: "Almería",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Almería",
    description:
      "Sistema de fichaje para empresas en Almería. Agricultura, turismo e industria. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Almería es líder en agricultura intensiva con miles de trabajadores en invernaderos y plantas de envasado. Fichados ofrece fichaje móvil y offline, ideal para las condiciones del campo almeriense.",
  },
  {
    slug: "san-sebastian",
    nombre: "San Sebastián",
    provincia: "Guipúzcoa",
    comunidad: "País Vasco",
    h1: "Fichaje obligatorio en San Sebastián",
    description:
      "Sistema de fichaje para empresas en San Sebastián. Gastronomía, turismo e industria. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "San Sebastián es un referente gastronómico y turístico con un fuerte sector industrial. Los restaurantes, hoteles y empresas donostiarras necesitan un sistema de fichaje que se adapte a su realidad.",
  },
  {
    slug: "santander",
    nombre: "Santander",
    provincia: "Cantabria",
    comunidad: "Cantabria",
    h1: "Fichaje obligatorio en Santander",
    description:
      "Sistema de fichaje para empresas en Santander. Servicios, turismo e industria. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Santander es el centro económico de Cantabria con un sector servicios potente y presencia turística creciente. Fichados ayuda a las empresas cántabras a cumplir con el registro de jornada de forma sencilla.",
  },
  {
    slug: "castellon",
    nombre: "Castellón de la Plana",
    provincia: "Castellón",
    comunidad: "Comunidad Valenciana",
    h1: "Fichaje obligatorio en Castellón",
    description:
      "Sistema de fichaje para empresas en Castellón. Cerámica, agricultura y turismo. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Castellón es el centro de la industria cerámica española y cuenta con un importante sector agrícola y turístico. Fichados se adapta a los turnos de fábrica y a las particularidades del campo castellonense.",
  },
  {
    slug: "burgos",
    nombre: "Burgos",
    provincia: "Burgos",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Burgos",
    description:
      "Sistema de fichaje para empresas en Burgos. Industria, agroalimentación y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Burgos tiene un importante sector industrial y agroalimentario. Las empresas burgalesas necesitan un sistema de fichaje fiable y fácil de usar para cumplir con la normativa laboral vigente.",
  },
  {
    slug: "albacete",
    nombre: "Albacete",
    provincia: "Albacete",
    comunidad: "Castilla-La Mancha",
    h1: "Fichaje obligatorio en Albacete",
    description:
      "Sistema de fichaje para empresas en Albacete. Cuchillería, agricultura y comercio. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Albacete es un centro comercial y de servicios de Castilla-La Mancha con tradición industrial en cuchillería y un fuerte sector agrícola. Fichados permite a las empresas albaceteñas cumplir con el registro de jornada.",
  },
  {
    slug: "salamanca",
    nombre: "Salamanca",
    provincia: "Salamanca",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Salamanca",
    description:
      "Sistema de fichaje para empresas en Salamanca. Educación, turismo y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Salamanca es una ciudad universitaria con un potente sector de servicios, turismo y educación. Las empresas salmantinas necesitan cumplir con el registro de jornada obligatorio de forma sencilla y económica.",
  },
  {
    slug: "logrono",
    nombre: "Logroño",
    provincia: "La Rioja",
    comunidad: "La Rioja",
    h1: "Fichaje obligatorio en Logroño",
    description:
      "Sistema de fichaje para empresas en Logroño. Vitivinicultura, industria y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Logroño es el centro económico de La Rioja con un sector vitivinícola de referencia internacional y un tejido industrial diverso. Fichados se adapta a bodegas, fábricas y empresas de servicios riojanas.",
  },
  {
    slug: "huelva",
    nombre: "Huelva",
    provincia: "Huelva",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Huelva",
    description:
      "Sistema de fichaje para empresas en Huelva. Agricultura, industria y turismo. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Huelva es líder en producción de frutos rojos con miles de temporeros cada campaña. Fichados ofrece fichaje móvil y offline que funciona perfectamente en el campo onubense.",
  },
  {
    slug: "badajoz",
    nombre: "Badajoz",
    provincia: "Badajoz",
    comunidad: "Extremadura",
    h1: "Fichaje obligatorio en Badajoz",
    description:
      "Sistema de fichaje para empresas en Badajoz. Agricultura, comercio y servicios extremeños. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Badajoz es un importante centro comercial y de servicios de Extremadura con un fuerte sector agrícola. Las empresas pacenses necesitan un sistema de fichaje sencillo y asequible.",
  },
  {
    slug: "tarragona",
    nombre: "Tarragona",
    provincia: "Tarragona",
    comunidad: "Cataluña",
    h1: "Fichaje obligatorio en Tarragona",
    description:
      "Sistema de fichaje para empresas en Tarragona. Petroquímica, turismo y agroalimentación. Cumple la normativa. Desde 19 €/mes.",
    intro:
      "Tarragona combina un potente sector petroquímico con turismo y agroalimentación. Fichados se adapta tanto a los turnos de planta industrial como a la estacionalidad turística de la Costa Dorada.",
  },
  {
    slug: "lleida",
    nombre: "Lleida",
    provincia: "Lleida",
    comunidad: "Cataluña",
    h1: "Fichaje obligatorio en Lleida",
    description:
      "Sistema de fichaje para empresas en Lleida. Agricultura, agroalimentación y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Lleida es un centro agroalimentario de primer nivel con fruticultura y ganadería como sectores clave. Fichados permite a las empresas leridanas registrar la jornada de sus empleados desde cualquier ubicación.",
  },
  {
    slug: "leon",
    nombre: "León",
    provincia: "León",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en León",
    description:
      "Sistema de fichaje para empresas en León. Industria, minería y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "León tiene un tejido empresarial diverso con industria, ganadería y un creciente sector servicios. Las empresas leonesas necesitan cumplir con el registro de jornada obligatorio. Fichados lo simplifica.",
  },
  {
    slug: "cadiz",
    nombre: "Cádiz",
    provincia: "Cádiz",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Cádiz",
    description:
      "Sistema de fichaje para empresas en Cádiz. Turismo, hostelería y naval. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Cádiz combina un potente sector turístico y hostelero con industria naval y agroalimentación. Fichados se adapta a la estacionalidad turística gaditana y a los turnos industriales del astillero.",
  },
  {
    slug: "jaen",
    nombre: "Jaén",
    provincia: "Jaén",
    comunidad: "Andalucía",
    h1: "Fichaje obligatorio en Jaén",
    description:
      "Sistema de fichaje para empresas en Jaén. Olivar, agroalimentación y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Jaén es la capital mundial del aceite de oliva con miles de trabajadores en almazaras y explotaciones olivareras. Fichados ofrece fichaje móvil perfecto para el trabajo en el campo jienense.",
  },
  {
    slug: "ourense",
    nombre: "Ourense",
    provincia: "Ourense",
    comunidad: "Galicia",
    h1: "Fichaje obligatorio en Ourense",
    description:
      "Sistema de fichaje para empresas en Ourense. Comercio, turismo termal y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Ourense es un centro de servicios gallego con un creciente sector de turismo termal y vitivinicultura. Las empresas ourensanas necesitan un sistema de fichaje sencillo para cumplir la normativa laboral.",
  },
  {
    slug: "lugo",
    nombre: "Lugo",
    provincia: "Lugo",
    comunidad: "Galicia",
    h1: "Fichaje obligatorio en Lugo",
    description:
      "Sistema de fichaje para empresas en Lugo. Ganadería, madera y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Lugo tiene un fuerte sector ganadero y maderero además de servicios. Las empresas lucenses, desde las ganaderías hasta los comercios de la muralla, deben cumplir con el registro de jornada obligatorio.",
  },
  {
    slug: "girona",
    nombre: "Girona",
    provincia: "Girona",
    comunidad: "Cataluña",
    h1: "Fichaje obligatorio en Girona",
    description:
      "Sistema de fichaje para empresas en Girona. Turismo, gastronomía e industria. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Girona es un referente turístico y gastronómico con la Costa Brava y una potente industria cárnica. Fichados se adapta tanto a los hoteles costeros como a las plantas de procesado gerundenses.",
  },
  {
    slug: "caceres",
    nombre: "Cáceres",
    provincia: "Cáceres",
    comunidad: "Extremadura",
    h1: "Fichaje obligatorio en Cáceres",
    description:
      "Sistema de fichaje para empresas en Cáceres. Turismo, agricultura y servicios extremeños. Cumple la normativa. Desde 19 €/mes.",
    intro:
      "Cáceres tiene un creciente sector turístico y un importante tejido agrícola y ganadero. Las empresas cacereñas necesitan un sistema de fichaje sencillo y económico para cumplir con la ley.",
  },
  {
    slug: "guadalajara",
    nombre: "Guadalajara",
    provincia: "Guadalajara",
    comunidad: "Castilla-La Mancha",
    h1: "Fichaje obligatorio en Guadalajara",
    description:
      "Sistema de fichaje para empresas en Guadalajara. Logística, industria y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Guadalajara se ha convertido en un centro logístico clave del Corredor del Henares. Los almacenes, centros de distribución y empresas industriales necesitan un sistema de fichaje adaptado a turnos y picos de actividad.",
  },
  {
    slug: "toledo",
    nombre: "Toledo",
    provincia: "Toledo",
    comunidad: "Castilla-La Mancha",
    h1: "Fichaje obligatorio en Toledo",
    description:
      "Sistema de fichaje para empresas en Toledo. Turismo, artesanía y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Toledo combina un potente sector turístico con artesanía tradicional y servicios. Las empresas toledanas necesitan cumplir con el registro de jornada obligatorio de forma sencilla y digital.",
  },
  {
    slug: "pontevedra",
    nombre: "Pontevedra",
    provincia: "Pontevedra",
    comunidad: "Galicia",
    h1: "Fichaje obligatorio en Pontevedra",
    description:
      "Sistema de fichaje para empresas en Pontevedra. Pesca, industria y servicios gallegos. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Pontevedra tiene un sector pesquero e industrial relevante además de un creciente turismo. Fichados permite a las empresas pontevedresas cumplir con el registro de jornada desde cualquier ubicación.",
  },
  {
    slug: "palencia",
    nombre: "Palencia",
    provincia: "Palencia",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Palencia",
    description:
      "Sistema de fichaje para empresas en Palencia. Industria, agroalimentación y servicios. Cumple la normativa. Desde 19 €/mes.",
    intro:
      "Palencia tiene presencia en automoción, agroalimentación y servicios. Las empresas palentinas necesitan un sistema de fichaje sencillo que cumpla con la normativa laboral vigente.",
  },
  {
    slug: "ciudad-real",
    nombre: "Ciudad Real",
    provincia: "Ciudad Real",
    comunidad: "Castilla-La Mancha",
    h1: "Fichaje obligatorio en Ciudad Real",
    description:
      "Sistema de fichaje para empresas en Ciudad Real. Agricultura, vino y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Ciudad Real es parte del corazón vitivinícola de España y un centro de servicios de La Mancha. Las bodegas, cooperativas y empresas ciudadrealeñas necesitan cumplir con el registro de jornada.",
  },
  {
    slug: "zamora",
    nombre: "Zamora",
    provincia: "Zamora",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Zamora",
    description:
      "Sistema de fichaje para empresas en Zamora. Agroalimentación, turismo y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Zamora destaca por su sector agroalimentario y un turismo cultural creciente. Las empresas zamoranas necesitan un sistema de fichaje económico y fácil de usar.",
  },
  {
    slug: "avila",
    nombre: "Ávila",
    provincia: "Ávila",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Ávila",
    description:
      "Sistema de fichaje para empresas en Ávila. Turismo, ganadería y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Ávila combina turismo patrimonial con ganadería y un sector servicios creciente. Las empresas abulenses deben cumplir con el registro de jornada obligatorio. Fichados lo hace fácil desde 19 €/mes.",
  },
  {
    slug: "cuenca",
    nombre: "Cuenca",
    provincia: "Cuenca",
    comunidad: "Castilla-La Mancha",
    h1: "Fichaje obligatorio en Cuenca",
    description:
      "Sistema de fichaje para empresas en Cuenca. Turismo, madera y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Cuenca tiene un sector turístico relevante y una economía basada en servicios y recursos naturales. Las empresas conquenses necesitan un sistema de fichaje sencillo para cumplir con la normativa laboral.",
  },
  {
    slug: "huesca",
    nombre: "Huesca",
    provincia: "Huesca",
    comunidad: "Aragón",
    h1: "Fichaje obligatorio en Huesca",
    description:
      "Sistema de fichaje para empresas en Huesca. Turismo de nieve, agricultura y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Huesca combina turismo de nieve y montaña con agricultura y ganadería. Desde las estaciones de esquí del Pirineo hasta las explotaciones del Somontano, Fichados se adapta a tu negocio.",
  },
  {
    slug: "segovia",
    nombre: "Segovia",
    provincia: "Segovia",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Segovia",
    description:
      "Sistema de fichaje para empresas en Segovia. Turismo, hostelería y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Segovia es un destino turístico de primer nivel con una fuerte tradición hostelera. Los restaurantes, hoteles y comercios segovianos deben cumplir con el registro de jornada. Fichados lo simplifica.",
  },
  {
    slug: "soria",
    nombre: "Soria",
    provincia: "Soria",
    comunidad: "Castilla y León",
    h1: "Fichaje obligatorio en Soria",
    description:
      "Sistema de fichaje para empresas en Soria. Agroalimentación, madera y servicios. Cumple el RDL 8/2019. Desde 19 €/mes.",
    intro:
      "Soria tiene un importante sector agroalimentario y maderero. Las empresas sorianas, independientemente de su tamaño, deben cumplir con el registro de jornada obligatorio. Fichados es la opción más sencilla.",
  },
  {
    slug: "teruel",
    nombre: "Teruel",
    provincia: "Teruel",
    comunidad: "Aragón",
    h1: "Fichaje obligatorio en Teruel",
    description:
      "Sistema de fichaje para empresas en Teruel. Agroalimentación, minería y servicios. Cumple la normativa laboral. Desde 19 €/mes.",
    intro:
      "Teruel tiene un sector agroalimentario de calidad reconocida y una economía diversa. Las empresas turolenses necesitan un sistema de fichaje digital que funcione incluso en zonas con cobertura limitada. Fichados funciona offline.",
  },
];

export function getCiudadBySlug(slug: string): Ciudad | undefined {
  return ciudades.find((c) => c.slug === slug);
}
