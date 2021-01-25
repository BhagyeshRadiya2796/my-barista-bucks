import * as express from 'express'  // eslint-disable-line
import { Request, Response } from 'express' // eslint-disable-line
import {ControllerBase} from '../interfaces/ControllerBase' // eslint-disable-line
import { Coffee } from '../models/Coffee'
import { MenuService } from '../services/MenuService'
import { API_PATH } from '../utils/constants'

export class MenuController implements ControllerBase {
  public router = express.Router()
  public menuService: MenuService

  constructor () {
    this.initRoutes()
    this.menuService = new MenuService()
  }

  public initRoutes () {
    this.router.get(API_PATH.menu, this.getMenu)
    this.router.put(API_PATH.rateCoffee, this.rateCoffee)
  }

  getMenu = async (req: Request, res: Response) => {
    const menu: Array<Coffee> | [] = await this.menuService.getMenu()
    if (menu.length > 0) {
      return res.status(200).send(menu)
    } else {
      return res.status(404).send({ message: 'No coffee available' })
    }
  }

  rateCoffee = async (req: Request, res: Response) => {
    const body = req.body
    if (Object.keys(body).length !== 0) {
      const updatedCoffee: Coffee = await this.menuService.rateCoffee(body.coffee_id, body.rate_coffee)
      if (updatedCoffee) {
        return res.status(200).send(updatedCoffee)
      } else {
        return res.status(404).send({ message: 'No coffee available' })
      }
    }
    return res.status(400).send({ message: 'Invalid request body' })
  }
}
