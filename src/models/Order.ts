export interface OrderInterFace {
    id: string,
    user_id: string,
    created_at: Date,
    total_price: Number,
    payment_status: Boolean
  }

export class Order implements OrderInterFace {
  constructor (data?: any) {
    Object.assign(this, data)
  }

    public id: string
    public user_id: string
    public created_at: Date
    public total_price: Number
    public payment_status: Boolean
}
