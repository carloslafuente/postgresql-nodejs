import mysql = require('mysql');

export default class Mysql {
	private static _instance: Mysql;
	connection: mysql.Connection;
	connected: boolean = false;
	constructor() {
		console.log('Clase inicializada');
		this.connection = mysql.createConnection({
			host: 'sql10.freemysqlhosting.net',
			user: 'sql10356825',
			password: '7SfhJsJRji',
			database: 'sql10356825',
		});
		this.connect();
	}

	public static get instance() {
		return this._instance || (this._instance = new this());
	}

	static query(query: string, callback: any) {
		this.instance.connection.query(
			query,
			(err: Error, result: Object[], fields) => {
				if (err) {
					console.log(`[Query Error]: ${err}`);
					return callback(err);
				}
				if (result.length === 0) {
					callback('El registro solicitado no existe');
				}
				callback(null, result);
			}
		);
	}

	private connect() {
		this.connection.connect((err: mysql.MysqlError) => {
			if (err) {
				console.log(err);
			}
			this.connected = true;
			console.log('[Database connection]: Conectado a la base de datos');
		});
	}
}
