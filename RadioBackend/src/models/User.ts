import { Schema, model } from "mongoose";

export type UserProps = {
  email: string;
  password: string;
  created_at:Date;
  role: 'standard' | 'admin'
};



export const User = model<UserProps>(
  "users",
  new Schema<UserProps>({
    created_at:Date,
    email: String,
    password: String,
    role: {type:String, default:'standard'}
  })
);


