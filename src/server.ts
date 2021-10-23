import { serverHttp } from "./app";
import 'dotenv/config';

serverHttp.listen(process.env.PORT || 3000);
