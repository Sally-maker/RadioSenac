import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
import { AppError } from "../errors/HttpException";
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
      throw new AppError("User not exists");
    }

    const passwordsIsMatching = await this.verifyMatchingPasswordHash(
      password,
      user.password
    );

    if (!passwordsIsMatching) {
     throw new AppError("email or password is incorrect, please try again")
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

  private async verifyMatchingPasswordHash(
    password: string,
    encryptedPassword: string
  ) {
    return compare(password, encryptedPassword);
  }
}