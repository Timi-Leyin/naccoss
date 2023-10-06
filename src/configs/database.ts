import {Sequelize} from "sequelize";

const { env } = process;
const database = new Sequelize(
  env.SQL_DB as string,
  env.SQL_USER as string,
  env.SQL_PASSWORD as string,
  {
    host: env.SQL_HOST as string,
    dialect: "mysql"
  }
);

export default database