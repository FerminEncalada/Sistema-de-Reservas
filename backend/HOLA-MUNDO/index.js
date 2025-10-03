import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Hola Mundo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          text-align: center;
          padding: 50px;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2rem;
        }
        .btn {
          display: inline-block;
          margin-top: 30px;
          padding: 10px 20px;
          font-size: 1rem;
          background: #ff9800;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: 0.3s;
        }
        .btn:hover {
          background: #e68900;
        }
      </style>
    </head>
    <body>
      <h1>🌍 ¡Hola Mundo esta es una prueba!</h1>
      <p>Grupo de desarrollo basado en plataformas</p>
    </body>
    </html> 
  `);
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
