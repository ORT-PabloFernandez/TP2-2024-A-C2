import fs from "fs";
const path = "./inventors.json";

function getAll() {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
}

function get(id) {
  return getAll().filter((inventor) => inventor.id == id);
}

function insert(inventor) {
  const inventors = getAll();
  inventors.push(inventor);
  fs.writeFileSync(path, JSON.stringify(inventors, null, " "));
}

function remove(id) {}

function update(inventor) {}

insert({ first: "pepe", last: "peres", year: 1987 });
console.table(getAll());
