import {EntityRepository,Repository} from 'typeorm'
import {UserEntities} from '@entities/UserEntities'

@EntityRepository(UserEntities)
class UserRepository extends Repository<UserEntities>{
}

export {UserRepository}