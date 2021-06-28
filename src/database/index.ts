import {createConnection} from "typeorm";

createConnection({
  host: process.env.HOST,
  type: process.env.TYPE,
  port: process.env.PORT,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
}).then(()=>console.log("Connected with success"))
