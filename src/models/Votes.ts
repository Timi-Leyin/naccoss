import { DataTypes } from "sequelize";
import * as uuid from "uuid";
import database from "../configs/database";

const Votes = database.define("votes", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  uuid: {
    type: DataTypes.STRING,
    defaultValue: uuid.v1(),
  },
  userId: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  options: {
    type:DataTypes.TEXT("long"),
  },
  validThrough: {
    type: DataTypes.DATE,
    defaultValue: new Date(Date.now()+ 1000000)
  },
  anonymous: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  multiple:{
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  votes:{
    type:DataTypes.TEXT("long"),
  }
});

export default Votes;
