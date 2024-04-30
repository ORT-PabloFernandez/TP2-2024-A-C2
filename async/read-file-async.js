import fs from "fs";
import chalk from "chalk";
const path = "./bigfile.txt";

fs.readFile(path, "utf-8", (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(chalk.red(error.message));
  }
});

console.log("Mientras se lee el archivo.....");
