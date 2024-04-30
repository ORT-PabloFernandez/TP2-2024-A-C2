import fs from "fs/promises";
const PATH = "./inventors2.json";

async function readInventors() {
  let inventors = null;
  try {
    inventors = await fs.readFile(PATH, "utf-8");
  } catch (error) {
    console.log(error);
  }

  return JSON.parse(inventors);
}

function writeInventors(inventors) {
  return fs.writeFile(PATH, JSON.stringify(inventors, null, " "));
}

let inventors = await readInventors();

inventors.push({
  id: 8,
  first: "Pablo",
  last: "Hinojosa",
  year: 1976,
});
await writeInventors(inventors);

console.log(await readInventors());
