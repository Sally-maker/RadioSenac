import Express from "express";
import dotenv from 'dotenv'
import { Routes } from "./routes/index.routes";
import "./config/mongo";
import cors from 'cors'
import { HandlingError } from "./middlewares/HandlingError";


export class Server {
  private readonly app = Express();

  private readonly dotenv = dotenv.config();

  private readonly port = 3333;


  start() {
    this.dotenv
    this.config()
    this.app.listen(this.port, () =>
    console.info("[INFO]: Server is running... 🎉🎇🎆")
    );
  }

  config() {
    this.app.use(cors());
    this.app.use(Express.json());
    this.app.use(Routes);
    this.app.use(HandlingError)
  }
}
