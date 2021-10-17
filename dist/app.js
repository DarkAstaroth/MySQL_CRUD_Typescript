"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const models_1 = __importDefault(require("./models/models"));
// Configurar dotenv
dotenv_1.default.config();
const server = new models_1.default();
server.listen();
//# sourceMappingURL=app.js.map