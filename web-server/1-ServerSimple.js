import http from "http";

const PORT = 3000;
http
  .createServer((req, res) => {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.write("Hola mundo desde http");
    res.end();
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log("Servidor web ejecutandose en el puerto: ", PORT);
  });
