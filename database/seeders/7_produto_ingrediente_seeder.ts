import ProdutoIngrediente from '#models/produto_ingrediente';
import { BaseSeeder } from '@adonisjs/lucid/seeders';

export default class extends BaseSeeder {
  async run() {
    return await ProdutoIngrediente.createMany([
      { produtoId: 9, ingredienteId: 1 },
      { produtoId: 9, ingredienteId: 2 },
      { produtoId: 9, ingredienteId: 3 },
      { produtoId: 9, ingredienteId: 4 },
      { produtoId: 9, ingredienteId: 12 },
    ]);
  }
}
