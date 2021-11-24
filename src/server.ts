import { serverHttp } from './app';
import 'dotenv/config';

serverHttp.listen(process.env.PORT || 4000, () =>
  console.log(`running on port ${process.env.PORT || '4000'}`)
);
