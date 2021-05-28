import {EntityRepository,Repository} from 'typeorm'
import {UserStandart} from '@entities/userStandartEntities'

@EntityRepository(UserStandart)
class StandartRepository extends Repository<UserStandart>{
}

export {StandartRepository}