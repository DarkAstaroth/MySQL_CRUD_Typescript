"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("cursoNode", "root", "FHCcFNxdy24!", {
    host: "locahost",
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=connection.js.map