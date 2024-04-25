// Utilizando asyncronia y promesas realizar las siguientes operaciones

import fs from "fs/promises";
const PATH = "./inventors.json";

// 1.- Leer el archivo inventors.json
fs.readFile(PATH, "utf-8")
  .then((data) => {
    console.log(data);
    const inventor = {
      id: 8,
      first: "Pablo",
      last: "Hinojosa",
      year: 1976,
    };
    let inventors = JSON.parse(data);
    inventors.push(inventor);
    // 2.- Insertar un nuevo inventor, escribir el archivo.
    return fs.writeFile(PATH, JSON.stringify(inventors, null, " "));
  })
  .then(() => {
    // 3.- Leer nuevamente el archivo, con el nuevo inventor
    return fs.readFile(PATH, "utf-8");
  })
  .then((data) => {
    // 4.- Eliminar el inventor
    let inventors = JSON.parse(data);
    inventors.splice(
      inventors.findIndex((inventor) => inventor.id === 8),
      1
    );
    return fs.writeFile(PATH, JSON.stringify(inventors, null, " "));
  })
  .then(() => {
    // 5.- Leer nuevamente el archivo
    return fs.readFile(PATH, "utf-8");
  })
  .then((data) => {
    console.log(JSON.parse(data));
  })
  .catch((error) => {
    console.error(error);
  });
