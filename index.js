// import en lugar del requiere
import fs from "fs";
import chalk from "chalk";
//const fs = require('fs');

const texto = fs.readFileSync("./test.txt", "utf-8");

console.log(chalk.greenBright(texto));
