import dotenv from "dotenv";
import Server from "./models/models";

// Configurar dotenv
dotenv.config();

const server = new Server();

server.listen();
