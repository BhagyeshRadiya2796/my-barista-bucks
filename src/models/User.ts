export interface UserInterFace {
  name: string,
  email_address: string,
  id: string,
  password: string,
  contact_no: Number
}

export class User implements UserInterFace {
  constructor (data?: any) {
    Object.assign(this, data)
  }

  public name: string = ''
  public email_address: string = ''
  public id: string = ''
  public password: string = ''
  public contact_no: Number
}
