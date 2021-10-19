import { Sequelize } from "sequelize";

const db = new Sequelize("cursoNode", "root", "FHCcFNxdy24!", {
  host: "locahost",
  dialect: "mysql",
});
export default db;
