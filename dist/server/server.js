"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = 3000;
        this.port = port;
        this.app = express();
    }
    Server.init = function (port) {
        return new Server(port);
    };
    Server.prototype.puclicFolder = function () {
        var publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    };
    Server.prototype.start = function (callback) {
        this.app.listen(this.port, callback);
        this.puclicFolder();
    };
    return Server;
}());
exports.default = Server;