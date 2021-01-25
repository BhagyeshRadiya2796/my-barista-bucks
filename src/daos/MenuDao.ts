import { Coffee } from '../models/Coffee'
import { User } from '../models/User' // eslint-disable-line
import pool from '../utils/db'

export class MenuDao {
  public create = async (user: User) => {
    console.log('user created')
    return user
  }

  public get = async () => {
    let conn
    try {
      conn = pool.getConnection()
      const stmt = 'SELECT coffee.id, coffee.name, coffee_type.name as type, coffee_type.description, coffee.price, coffee.quantity, ' +
      '(SELECT count(*) from tbl_coffee_rating coffee_rate where coffee_rate.rating_value = ? and coffee_rate.coffee_id = coffee.id) FROM tbl_coffee coffee ' +
      'JOIN tbl_coffee_type coffee_type ON coffee_type.id = coffee.type_id ' +
      'JOIN tbl_coffee_rating coffee_rating ON coffee_rating.coffee_id = coffee.id'
      const result = await pool.query(stmt, ['POSITIVE'])
      if (!result || result.affectedRows < 1) {
        return false
      }
      return result
    } catch (e) {
      console.log('Fetching Users Error: ', e)
      return false
    }
  }

  public rateCoffee = async (id, rating) => {
    return new Coffee()
  }
}
