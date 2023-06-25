//* ====== EJERCICIO 4 ======

const personalEmpresa = [
  {
    id: 1,
    personales: {
      nombre: "Juan Carlos",
      edad: 25,
      profesion: "Contador",
    },
    laborales: {
      sector: "Contabilidad",
      piso: 3,
    },
  },
  {
    id: 2,
    personales: {
      nombre: "Maria",
      edad: 35,
      profesion: "Secretaria",
    },
    laborales: {
      sector: "Administración",
      piso: 1,
    },
  },
  {
    id: 3,
    personales: {
      nombre: "Juana",
      edad: 45,
      profesion: "Contadora",
    },
    laborales: {
      sector: "Contabilidad",
      piso: 3,
    },
  },
  {
    id: 4,
    personales: {
      nombre: "Angel",
      edad: 31,
      profesion: "Abogado",
    },
    laborales: {
      sector: "Legales",
      piso: 1,
    },
  },
  {
    id: 5,
    personales: {
      nombre: "Carlos",
      edad: 38,
      profesion: "Contador",
    },
    laborales: {
      sector: "Contabilidad",
      piso: 3,
    },
  },
  {
    id: 6,
    personales: {
      nombre: "Ema",
      edad: 25,
      profesion: "Locutora",
    },
    laborales: {
      sector: "Atención al público",
      piso: 2,
    },
  },
  {
    id: 7,
    personales: {
      nombre: "Francisco",
      edad: 23,
      profesion: "Abogado",
    },
    laborales: {
      sector: "Legales",
      piso: 1,
    },
  },
  {
    id: 8,
    personales: {
      nombre: "Angela",
      edad: 49,
      profesion: "Contadora",
    },
    laborales: {
      sector: "Contabilidad",
      piso: 4,
    },
  },
  {
    id: 9,
    personales: {
      nombre: "Maria Laura",
      edad: 52,
      profesion: "Secretaria",
    },
    laborales: {
      sector: "Atención al público",
      piso: 2,
    },
  },
  {
    id: 10,
    personales: {
      nombre: "Lionel",
      edad: 28,
      profesion: "Programador",
    },
    laborales: {
      sector: "Informatica",
      piso: 3,
    },
  },
  {
    id: 11,
    personales: {
      nombre: "Maria Cristina",
      edad: 37,
      profesion: "Secretaria administrativa",
    },
    laborales: {
      sector: "Atención al público",
      piso: 2,
    },
  },
  {
    id: 12,
    personales: {
      nombre: "Lionel",
      edad: 32,
      profesion: "Programador",
    },
    laborales: {
      sector: "Informatica",
      piso: 3,
    },
  },
];

//* Contamos con un listado con los datos del personal de una empresa y se desea saber obtener un listado con los nombres de las personas
//* que trabajen en el segundo piso, mayores a 35 años.

//* La función se debe llamar obtenerPersonas y debe recibir como parámetro los datos del personal de la empresa.

function obtenerPersonas(personal) {
  const personalFiltrado = personal.filter(
    (persona) => persona.laborales.piso === 2 && persona.personales.edad > 35
  );

  const listadoNombre = personalFiltrado.map(
    (persona) => persona.personales.nombre
  );

  return listadoNombre;
}

console.log(obtenerPersonas(personalEmpresa));
