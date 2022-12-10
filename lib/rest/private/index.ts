import Cookie from '@fastify/cookie';

import { emptyAuth } from '../../auth';
import * as session from '../../auth/session';
import * as me from '../routes/me';
import * as swagger from '../swagger';
import type { App } from '../type';
import * as login from './routes/login';
import * as group from './routes/topics';

export async function setup(app: App) {
  await swagger.privateAPI(app);

  await app.register(Cookie, {
    hook: 'preHandler', // set to false to disable cookie autoparsing or set autoparsing on any of the following hooks: 'onRequest', 'preParsing', 'preHandler', 'preValidation'. default: 'onRequest'
    parseOptions: {}, // options for parsing cookies
  });

  void app.addHook('preHandler', async (req) => {
    if (!req.cookies.sessionID) {
      req.user = null;
      req.auth = emptyAuth();
      return;
    }

    const a = await session.get(req.cookies.sessionID);
    if (!a) {
      return;
    }

    req.user = a.user;
    req.auth = a;
  });

  await app.register(login.setup);
  await app.register(me.setup);
  await app.register(group.setup);
}