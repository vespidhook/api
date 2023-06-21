import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify();

app.register(cors);

app.get('/', () => {
  return 'Hello Unisuam! ';
});

app.listen({
  host: '0.0.0.0',
  port: process.env.POST ? Number(process.env.PORT) : 3333,
}).then(() => {
  console.log('Server is running on port 3333');
});
