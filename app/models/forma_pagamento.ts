import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FormaPagamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
}