// // import en lugar del requiere
// import fs from "fs";
// import chalk from "chalk";
// //const fs = require('fs');

// const texto = fs.readFileSync("./test.txt", "utf-8");

// console.log(chalk.greenBright(texto));

import {
  getInventor,
  getInventors,
  addInventor,
  updateInventor,
  deleteInventor,
} from "./data/inventors.js";

//const inventors = await getInventor("6279cc3d25acad884eb79252");

// const result = await updateInventor({
//   _id: "663d6348934daf25327caaec",
//   first: "Juan J",
//   last: "Gonzalez G",
//   year: 2011,
// });

const result = await deleteInventor("663d6348934daf25327caaec");

console.log(result);
