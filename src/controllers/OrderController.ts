import * as express from 'express'  // eslint-disable-line
import { Request, Response } from 'express' // eslint-disable-line
import {ControllerBase} from '../interfaces/ControllerBase' // eslint-disable-line
import { OrderService } from '../services/OrderService'
import { Order } from '../models/Order'
import { API_PATH } from '../utils/constants'

export class OrderController implements ControllerBase {
  public router = express.Router()
  public orderService: OrderService

  constructor () {
    this.initRoutes()
    this.orderService = new OrderService()
  }

  public initRoutes () {
    this.router.get(API_PATH.orders, this.getAllOrders)
    this.router.post(API_PATH.order, this.createOrder)
  }

  createOrder = async (req: Request, res: Response) => {
    const data = req.body
    if (Object.keys(data).length !== 0) {
      const order: Order = new Order(data)
      const orderResponse = await this.orderService.createOrder(order)
      return res.status(200).send({ orderResponse })
    }
    return res.status(400).send({ message: 'Invalid request body' })
  }

  getAllOrders = async (req: Request, res: Response) => {
    const orders: Array<Order> | [] = await this.orderService.getAllOrders()
    if (orders.length > 0) {
      return res.status(200).send(orders)
    } else {
      return res.status(404).send({ message: 'No Orders found' })
    }
  }
}
