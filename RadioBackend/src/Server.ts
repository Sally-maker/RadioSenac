import Express from "express";
import dotenv from 'dotenv'
import { Routes } from "./routes/index.routes";
import "./config/mongo";
import { HttpEsception } from "@middlewares/HttpException";
import cors from 'cors'

export class Server {
  private readonly app = Express();

  private readonly dotenv = dotenv.config()

  private readonly port = 3333;

  private readonly cors = cors()

  start() {
    this.config()
    this.cors
    this.dotenv
    this.app.listen(this.port, () =>
    console.info("[INFO]: Server is running... 🎉🎇🎆")
    );
  }

  config() {
    this.app.use(Express.json());
    this.app.use(cors)
    this.app.use(Routes);
    this.app.use(HttpEsception);
  }
}
