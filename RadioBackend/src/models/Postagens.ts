import { Schema, model } from "mongoose";


export type Postagens = {
    created_at:Date,
    updated_at:Date,
    content:string
}


export const Postagens = model<Postagens>(
  "postagens",
  new Schema<Postagens>({
      created_at:Date,
      updated_at:Date,
      content:String,
  })
)