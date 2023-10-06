import { DataTypes } from "sequelize";
import * as uuid from "uuid";
import database from "../configs/database";
export enum ROLE {
  admin,
  moderator,
  user,
}
const User = database.define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  matric: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  uuid: {
    type: DataTypes.STRING,
    defaultValue: uuid.v1(),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  lastName: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  root: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  role: {
    type: DataTypes.INTEGER,
    defaultValue: ROLE.user,
  },
  restricted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User;
