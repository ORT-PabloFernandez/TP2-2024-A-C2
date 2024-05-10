// // import en lugar del requiere
// import fs from "fs";
// import chalk from "chalk";
// //const fs = require('fs');

// const texto = fs.readFileSync("./test.txt", "utf-8");

// console.log(chalk.greenBright(texto));

import { getInventor, getInventors, addInventor } from "./data/inventors.js";

//const inventors = await getInventor("6279cc3d25acad884eb79252");

const result = await addInventor({
  first: "Juan",
  last: "Gonzalez",
  year: 2010,
});
console.log(result);
