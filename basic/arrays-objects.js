const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

// JSON = Javascript Object Notation
function printInventors(inventors) {
  console.log("Nombre      Apellido    Año");
  console.log("=============================");
  // for (const inventor of inventors) {
  //   console.log(
  //     `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
  //       inventor.year
  //     }`
  //   );
  // }
  inventors.forEach((inventor) =>
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
        inventor.year
      }`
    )
  );
}

//printInventors(inventors);
//console.table(inventors);

// Ejercicios
// 1.- Filtrar los inventores nacidos antes del 1800
printInventors(
  inventors
    .filter((inventor) => inventor.year < 1800)
    .map((inventor) => ({
      first: inventor.first,
      last: inventor.last.toUpperCase(),
      year: inventor.year,
    }))
);

printInventors(
  inventors.filter(function (inventor) {
    return inventor.year < 1800;
  })
);

// 2.- Convertir el apellido en mayusculas
//printInventors(inventors.map((inventor) => ({ first: inven })));
printInventors(
  inventors.map((inventor) => ({
    first: inventor.first,
    last: inventor.last.toUpperCase(),
    year: inventor.year,
  }))
);

// 3.- Buscar inventor Kepler y retornar el objeto
//console.log(inventors.find((inventor) => inventor.last === "Kepler"));
// 4.- Si existe algun inventor nacido en 1858
//console.log(inventors.some((inventor) => inventor.year === 1858));

// 5.- Si todos los inventores nacieron despues del 1500
console.log(
  inventors.every((inventor) => {
    inventor.year >= 1500;
  })
);
//inventors.every(({ year }) => year == 1500);

// 6.- Ordenar los inventores por fecha de nacimiento
printInventors(inventors.sort((a, b) => (a.year > b.year ? 1 : -1)));
printInventors(inventors.sort((a, b) => a.year - b.year));

// 7.- Ordenar los inventores por Apellido
printInventors(inventors.sort((a, b) => (a.last > b.last ? 1 : -1)));
// 8.- Convertir el array a un formato:
console.log(
  inventors.map((inventor) => ({
    name: {
      first: inventor.first,
      last: inventor.last,
    },
    year: inventor.year,
  }))
);
/**
 * [{name:
 *      {
 *          first: 'first name',
 *          last: 'last name'
 *      }
 * },
 * year: year
 * ]
 *
 */
