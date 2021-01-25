export interface CoffeeInterFace {
  name: string
  price: Number
  id: Number,
  quantity: Number
  type: string
  description: string
  positive_rating: Number
  negative_rating: Number
}

export class Coffee implements CoffeeInterFace {
  constructor (data?: any) {
    Object.assign(this, data)
  }

  public name: string
  public price: Number
  public id: Number
  public quantity: Number
  public type: string
  public description: string
  public positive_rating: Number
  public negative_rating: Number
}
