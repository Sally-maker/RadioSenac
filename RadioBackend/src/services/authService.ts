import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { HttpException } from "../errors/HttpException";
import {User, UserProps} from '../models/User'


interface Request {
  email: string;
  password: string;
}

interface Response {
  token: string;
  user: Omit<UserProps, "password">;
}

export class AuthService {
  async execute({ email, password }: Request): Promise<Response> {

    const user = await User.findOne({ email });
    
    if (!user) {
      throw new HttpException("User not exists", 404);
    }

    const passwordsIsMatching = await compare(
      password,
      user.password
    );

    if (!passwordsIsMatching) {
     throw new HttpException("email or password is incorrect, please try again", 401)
    }

    const token = jwt.sign({}, process.env.SECRECT_TOKEN, {
      subject: String(user._id),
      expiresIn: process.env.EXPIRES_IN
    });
    return {
      token,
      user,
    };
  }
}