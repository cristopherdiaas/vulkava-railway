import { VulkavaNode } from 'vulkava';
import { createServer } from 'node:http';
import process from 'node:process';

const node = new VulkavaNode({
  port: parseInt(process.env.VULKAVA_PORT || '2333'),
  password: process.env.VULKAVA_PASSWORD || 'youshallnotpass',
  plugins: [],
  sendWS: () => {} // Não precisa enviar payloads, é só o servidor
});

node.listen().then(() => {
  console.log(`✅ Vulkava rodando na porta ${node.port}`);
});

createServer((req, res) => {
  res.writeHead(200);
  res.end('Vulkava is running!');
}).listen(process.env.PORT || 8080);