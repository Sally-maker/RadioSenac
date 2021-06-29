import {
  Entity, CreateDateColumn, Column, PrimaryColumn, UpdateDateColumn
} from 'typeorm';
import { v4 } from 'uuid';

@Entity("Users")
class UserEntities {
  @PrimaryColumn()
  id:string

  @Column()
  name:string

  @Column()
  email:string

  @Column()
  password:string

  @Column()
  admin:boolean

  @CreateDateColumn()
  created_at:Date

  @UpdateDateColumn()
  updated_at:Date

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
export { UserEntities }
