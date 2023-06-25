//* ====== EJERCICIO 5 ======

const alumnosCursoIntroductorio = [
  "Laura",
  "Marcelo",
  "Francisco",
  "Ana",
  "Melisa",
  "Manuel",
  "Juan Pablo",
  "Cristian",
  "Miriam",
];

const alumnosCursoWeb = [
  { nombre: "Francisco", edad: 28, país: "Chile" },
  { nombre: "Mariano", edad: 42, país: "Colombia" },
  { nombre: "Cristian", edad: 37, país: "Peru" },
];

//* Contamos con 2 (dos) listados, uno con los nombres de los alumnos que asistieron al curso instroductorio, y otro listado con los nombre de los
//* alumnos que asistieron al curso de desarrollo web.

//* CONSIGNA: Se solicita crear una función que retorne un arreglo con los nombres de los alumnos que asistieron a ambos cursos.
//* La función se debe llamar obtenerAlumnos y debe recibir como parámetro ambos listados.

//* AYUDA: Sería de utilidad usar el método de los arreglos llamado "includes", el cual retorna siempre un booleano. Investigar sobre el mismo.

function obtenerAlumnos(listadoCursoIntroductorio, listadoCursoWeb) {
  const alumnosEnComun = listadoCursoWeb.filter((alumno) =>
    listadoCursoIntroductorio.includes(alumno.nombre)
  );

  const nombresAlumnos = alumnosEnComun.map((alumno) => alumno.nombre);

  return nombresAlumnos;
}

console.log(obtenerAlumnos(alumnosCursoIntroductorio, alumnosCursoWeb));
