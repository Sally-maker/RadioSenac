import {
  Entity, CreateDateColumn, Column, PrimaryColumn, BeforeInsert, BeforeUpdate
} from 'typeorm';
import { v4 } from 'uuid';
import bcrypt from 'bcrypt'

@Entity('UserStandart')
class UserStandart {
  @PrimaryColumn()
  id:string

  @Column('text')
   email:string

  @Column('text')
  password:string

  @CreateDateColumn()
  create_at:Date

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
  @BeforeInsert()
  @BeforeUpdate()
  HashPassword(){
    this.password = bcrypt.hashSync(this.password,8)
  }
}
export { UserStandart }
