import * as path from 'path'
import * as fs from 'fs'
import pool from './db'

export class InitDb {
    createTables = async () => {
      let conn
      try {
        conn = await pool.getConnection()
        const tables = fs.readFileSync(path.join(__dirname, '../../scripts/barista_bucks.sql')).toString()
        await conn.query(tables)
        console.log('Successfully created tables')
      } catch (e) {
        console.log('Error While creating tables', e)
      }
    }
}
