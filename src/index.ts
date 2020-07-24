import Server from './server/server';
import router from './routes/routes';
import Mysql from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);

// Mysql.instance;

server.start(() => {
	console.log('[Server connection]: Servidor corriendo en el puerto 3000');
});
