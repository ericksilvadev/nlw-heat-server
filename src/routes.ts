import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticate } from './middleware/ensureAuthenticate';

const router = Router();

router.get('/health', (_req, res) => {
  res.json('app is running');
});

router.post('/authenticate', new AuthenticateUserController().handle);

router.get('/messages/last3', new GetLast3MessagesController().handle);

router.post(
  '/messages',
  ensureAuthenticate,
  new CreateMessageController().handle
);

router.get('/profile', ensureAuthenticate, new ProfileUserController().handle);

export { router };
