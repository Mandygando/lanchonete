import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Ingrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare descricao: string
}