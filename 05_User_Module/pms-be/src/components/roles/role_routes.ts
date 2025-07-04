import { Express } from 'express';

import { RoleController } from './role_controller';

export class RoleRoutes {
  private baseEndPoint = '/api/roles';

  constructor(app: Express) {
    const controller = new RoleController();

    app
      .route(this.baseEndPoint)
      .get(controller.getAllHandler)
      .post(controller.addHandler);

    app
      .route(this.baseEndPoint + '/:id')
      .get(controller.getDeatilsHandler)
      .put(controller.updateHandler)
      .delete(controller.deleteHandler);
  }
}
