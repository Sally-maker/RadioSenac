import jwt from 'jsonwebtoken'
import { compare } from 'bcrypt'

import {Repository,getCustomRepository} from 'typeorm'
import {UserStandart} from '@entities/userStandartEntities'
import {StandartRepository} from '@repository/UserRepository'

import { jsonWebTokenConfiguration } from "../config/auth";


import {HttpException} from '@error/HttpException'


interface Request{
  email:string,
  password:string
}

interface Response{
  token:string,
  user:Omit<UserStandart,"password">
}

export class AuthService{
  private UserRepo:Repository<UserStandart>
  constructor(){
    this.UserRepo = getCustomRepository(StandartRepository)
  }
   
  async execute({email, password}:Request):Promise<Response>{
    const userr = await this.UserRepo.findOne({email})

    if(!userr){
      throw new HttpException("User not exists")
    }

    const passwordISmatching = await this.verifyMatchingPasswordHash(password, userr.password)

    if(!passwordISmatching){
      throw new HttpException("email or password is incorrect, please try again", 401)
    }

    const token = jwt.sign({}, jsonWebTokenConfiguration.secret,{
      subject:String(user.id),
      expiresIn:jsonWebTokenConfiguration.expiresIn
    })
    return {
      token,
      user
    }
  }

  private async verifyMatchingPasswordHash(
    password:string,
    encryptedPassword:string
  ){
    return compare(password, encryptedPassword)
  }
}