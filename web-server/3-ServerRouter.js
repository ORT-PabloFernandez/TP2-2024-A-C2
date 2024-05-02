import http from "http";

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

const PORT = 3000;
http
  .createServer((req, res) => {
    try {
      switch (req.url) {
        case "/":
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(`
                <html>
                    <head></head>
                    <body>
                        Home de mi API
                    </body>
                </html>
            `);
          break;
        case "/api/inventors":
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(inventors, null, " "));
          break;
        default:
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write("404 NO SE HA ENCONTRADO EL RECURSO");
          break;
      }
      res.end();
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.write("Ocurrio un error interno");
      res.end();
    }
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log("Servidor web ejecutandose en el puerto: ", PORT);
  });
