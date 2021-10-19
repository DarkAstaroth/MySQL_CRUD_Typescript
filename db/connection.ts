import { Sequelize } from "sequelize";

const db = new Sequelize("cursoNode", "root", "FHCcFNxdy24!", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
