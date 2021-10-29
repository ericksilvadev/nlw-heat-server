import { Request, Response } from 'express';
import { GetLast3MessagesService } from '../services/GetLast3MessagesService';

class GetLast3MessagesController {
  async handle(_request: Request, response: Response) {
    const service = new GetLast3MessagesService();

    const result = await service.execute();

    if (!result) {
      return response.status(404).json({ message: 'Messages list not found' });
    }

    return response.json(result);
  }
}

export { GetLast3MessagesController };
