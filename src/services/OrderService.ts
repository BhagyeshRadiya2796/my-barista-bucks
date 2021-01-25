import { OrderDao } from '../daos/OrderDao'

export class OrderService {
  private orderDao: OrderDao
  constructor () {
    this.orderDao = new OrderDao()
  }

  public getAllOrders = async () => {
    const orders = await this.orderDao.getAll()
    return orders
  }

  public createOrder = async (order) => {
    const successOrder = await this.orderDao.create(order)
    return successOrder
  }
}
