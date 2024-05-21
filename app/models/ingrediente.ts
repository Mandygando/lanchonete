import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import Produto from './produto.js'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Ingrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare descricao: string


  @manyToMany(()=>Produto, {
    pivotTable: 'produto_ingredientes',
  })
  declare produtos: ManyToMany<typeof Produto>
}