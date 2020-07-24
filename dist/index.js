"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var routes_1 = __importDefault(require("./routes/routes"));
var server = server_1.default.init(3000);
server.app.use(routes_1.default);
// Mysql.instance;
server.start(function () {
    console.log('[Server connection]: Servidor corriendo en el puerto 3000');
});
