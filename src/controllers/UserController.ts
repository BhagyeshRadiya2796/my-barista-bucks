import * as express from 'express'  // eslint-disable-line
import { Request, Response } from 'express' // eslint-disable-line
import {ControllerBase} from '../interfaces/ControllerBase' // eslint-disable-line
import { UserService } from '../services/UserService'
import { User } from '../models/User' // eslint-disable-line
import { API_PATH } from '../utils/constants'

export class UserController implements ControllerBase {
  public router = express.Router()
  public userService: UserService

  constructor () {
    this.initRoutes()
    this.userService = new UserService()
  }

  public initRoutes () {
    this.router.get(API_PATH.users, this.getAll)
    this.router.post(API_PATH.user, this.registerUser)
  }

  registerUser = async (req: Request, res: Response) => {
    const data = req.body
    if (Object.keys(data).length !== 0) {
      const user: User = new User(data)
      const status = await this.userService.registerUser(user)
      const details = status ? { statusCode: 200, response: { message: 'User Added Successfully' } }
        : { statusCode: 500, response: { message: 'Internal Server Error' } }
      return res.status(details.statusCode).send(details.response)
    }
    return res.status(400).send({ message: 'Invalid request body' })
  }

  getAll = async (req: Request, res: Response) => {
    const users: Array<User> | [] = await this.userService.getUsers()
    if (users.length > 0) {
      return res.status(200).send(users)
    } else {
      return res.status(404).send({ message: 'User not found' })
    }
  }
}
