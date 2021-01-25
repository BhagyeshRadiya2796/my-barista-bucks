import mariaDB from 'mariadb'
import { DB_DETAILS } from './constants'
const pool = mariaDB.createPool({
  host: DB_DETAILS.dbHost,
  user: DB_DETAILS.dbUser,
  password: DB_DETAILS.dbPassword,
  database: DB_DETAILS.dbName,
  port: parseInt(DB_DETAILS.dbPort || '3306', 10),
  multipleStatements: true
})
export default pool
