import {EntityRepository,Repository} from 'typeorm'
import { UserAdmin } from '@entities/userAdminEntities'

@EntityRepository(UserAdmin)
class AdminRepository extends Repository<UserAdmin>{
}

export {AdminRepository}