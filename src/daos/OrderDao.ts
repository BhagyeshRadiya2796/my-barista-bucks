import { Order } from '../models/Order'

export class OrderDao {
  public create = async (order: Order) => {
    console.log('Order created')
    return true
  }

  public getAll = async () => {
    console.log('get Orders')
    return []
  }
}
