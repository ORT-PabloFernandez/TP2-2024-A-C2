// Utilizando asyncronia realizar las siguientes operaciones

// 1.- Leer el archivo inventos.json
// 2.- Insertar un nuevo inventor, escribir el archivo.
// 3.- Leer nuevamente el archivo, con el nuevo inventor
// 4.- Eliminar el inventor que inserté, escribir el archivo
// 5.- Leer nuevamente el archivo

import fs from "fs";
import chalk from "chalk";
const PATH = "./inventors.json";

fs.readFile(PATH, "utf-8", (error, data) => {
  if (!error) {
    let inventors = JSON.parse(data);
    inventors.push({
      id: 8,
      first: "Jose",
      last: "Dondo",
      year: 1876,
    });
    fs.writeFile(PATH, JSON.stringify(inventors, null, " "), (error) => {
      if (!error) {
        fs.readFile(PATH, "utf-8", (error, data) => {
          if (!error) {
            let inventors = JSON.parse(data);
            inventors.splice(
              inventors.findIndex((inventor) => inventor.id === 8),
              1
            );
            fs.writeFile(
              PATH,
              JSON.stringify(inventors, null, " "),
              (error) => {
                if (!error) {
                  fs.readFile(PATH, "utf-8", (error, data) => {
                    if (!error) {
                      console.log("TERMINAMOS");
                      console.log(JSON.parse(data));
                    } else {
                      console.log(chalk.red(error.message));
                    }
                  });
                } else {
                  // Error en la escritura
                  console.log(chalk.red(error.message));
                }
              }
            );
          } else {
            // Error en la lectura
            console.log(chalk.red(error.message));
          }
        });
      } else {
        // Error en la escritura
        console.log(chalk.red(error.message));
      }
    });
    console.log(inventors);
  } else {
    // Error en la lectura
    console.log(chalk.red(error.message));
  }
});
