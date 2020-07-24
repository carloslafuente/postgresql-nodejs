"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Mysql = /** @class */ (function () {
    function Mysql() {
        this.connected = false;
        console.log('Clase inicializada');
        this.connection = mysql.createConnection({
            host: 'sql10.freemysqlhosting.net',
            user: 'sql10356825',
            password: '7SfhJsJRji',
            database: 'sql10356825',
        });
        this.connect();
    }
    Object.defineProperty(Mysql, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    Mysql.query = function (query, callback) {
        this.instance.connection.query(query, function (err, result, fields) {
            if (err) {
                console.log("[Query Error]: " + err);
                return callback(err);
            }
            if (result.length === 0) {
                callback('El registro solicitado no existe');
            }
            callback(null, result);
        });
    };
    Mysql.prototype.connect = function () {
        var _this = this;
        this.connection.connect(function (err) {
            if (err) {
                console.log(err);
            }
            _this.connected = true;
            console.log('[Database connection]: Conectado a la base de datos');
        });
    };
    return Mysql;
}());
exports.default = Mysql;
