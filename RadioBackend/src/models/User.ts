import { Schema, model } from "mongoose";

export type UserProps = {
  name: string;
  email: string;
  password: string;
  created_at:Date;
  type:string
};



export const User = model<UserProps>(
  "users",
  new Schema<UserProps>({
    created_at:Date,
    name: String,
    email: String,
    password: String,
    type:String
  })
);


