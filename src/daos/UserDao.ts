import { User } from '../models/User' // eslint-disable-line
import pool from '../utils/db'

export class UserDao {
  public create = async (user: User) => {
    let conn
    try {
      conn = pool.getConnection()
      const stmt = 'INSERT INTO tbl_users (id, name, email_address, password, contact_no) VALUES (?, ?, ?, ? , ?)'
      const result = await pool.query(stmt, [user.id, user.name, user.email_address, user.password, user.contact_no])
      console.log(result, result.affectedRows)
      if (!result || result.affectedRows < 1) {
        return false
      }
      return true
    } catch (e) {
      console.log('Create User error: ', e)
      return false
    }
  }

  public getAll = async () => {
    let conn
    try {
      conn = pool.getConnection()
      const stmt = 'SELECT * FROM tbl_users'
      const result = await pool.query(stmt)
      if (!result || result.length < 1) {
        return false
      }
      return result
    } catch (e) {
      console.log('Fetching Users Error: ', e)
      return false
    }
  }
}
