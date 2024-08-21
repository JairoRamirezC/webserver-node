const http = require('http');

http.createServer((req, resp) => {
  resp.write('Hola Mundo...');
  resp.end();
})
.listen(8080);

console.log('Ejecutando servidor en el puerto', 8080);