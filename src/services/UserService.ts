import { User } from '../models/User' // eslint-disable-line
import { UserDao } from '../daos/UserDao'
import { v4 as uuidv4 } from 'uuid'
export class UserService {
  private userDao: UserDao
  constructor () {
    this.userDao = new UserDao()
  }

  public registerUser = async (user: User) => {
    user.id = uuidv4()
    const success = await this.userDao.create(user)
    return success
  }

  public getUsers = async () => {
    const users = await this.userDao.getAll()
    return users
  }
}
