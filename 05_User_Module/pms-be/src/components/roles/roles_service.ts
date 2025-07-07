import { Repository } from 'typeorm';

import { BaseService } from '../../utils/base_service';
import { DatabaseUtil } from '../../utils/db';
import { Roles } from './role_entity';

export class RoleService extends BaseService<Roles> {
  constructor() {
    // Create an instance of DatabaseUtil
    const databaseUtil = new DatabaseUtil();
    //  Get the repository for the Roles entity
    const roleRepository: Repository<Roles> = databaseUtil.getRepository(Roles);
    // Call the constructor of the BaseService class with the repository as a parameter
    super(roleRepository);
  }
}
