import { App } from './app'
import * as dotenv from 'dotenv';

import { UserController } from './src/controllers/UserController'
import { OrderController } from './src/controllers/OrderController';
import { MenuController } from './src/controllers/MenuController';
import { InitDb } from './src/utils/InitDb';

dotenv.config({ path: `./.env.dev` })
console.log('process', process.env.NODE_ENV,process.env.DB_USER, process.env.DB_PASSWORD)
const app = new App({
  port: process.env.NODE_PORT || 3000,
  controllers: [
    new UserController(),
    new OrderController(),
    new MenuController()
  ]
})
new InitDb().createTables()

app.listen()
