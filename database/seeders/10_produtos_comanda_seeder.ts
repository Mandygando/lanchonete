import ProdutoComanda from '#models/produtos_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await ProdutoComanda.createMany([
      { produtoId: 10, comandaId: 6, quantidade: 3 },
      { produtoId: 10, comandaId: 8, quantidade: 5 },
      { produtoId: 20, comandaId: 7, quantidade: 3 },
      { produtoId: 20, comandaId: 1, quantidade: 3 },
      { produtoId: 20, comandaId: 2, quantidade: 12 },
      { produtoId: 21, comandaId: 2, quantidade: 5 },
      { produtoId: 22, comandaId: 4, quantidade: 3 },
      { produtoId: 24, comandaId: 4, quantidade: 4 },
      { produtoId: 24, comandaId: 3, quantidade: 2 },
      { produtoId: 24, comandaId: 5, quantidade: 3 }
    ]);
  }
}
