import {
  Entity, CreateDateColumn, Column, PrimaryColumn
} from 'typeorm';
import { v4 } from 'uuid';

@Entity('UserAdmin')
class UserAdmin {
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
}
export { UserAdmin }
