import { MenuDao } from '../daos/MenuDao'
import { Coffee } from '../models/Coffee'

export class MenuService {
  private menuDao: MenuDao
  constructor () {
    this.menuDao = new MenuDao()
  }

  public getMenu = async () => {
    const menu = await this.menuDao.get()
    return menu
  }

  public rateCoffee = async (id, rating) => {
    const ratingValue: Coffee = await this.menuDao.rateCoffee(id, rating)
    return ratingValue
  }
}
