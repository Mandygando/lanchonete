import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
     await Produto.createMany([
      {nome: 'Fanta-Uva',preco: 6.5, tamanho:"300ml", tipoId:1},
      {nome: 'Fanta-Laranja',preco: 6.5, tamanho:"300ml",tipoId:1},
      {nome: 'Coca-cola 1L',preco: 10, tamanho:"1L",tipoId:1},
      {nome: 'Coca-cola 3L',preco: 12, tamanho:"3L",tipoId:1},
      {nome: 'Fanta-Surpresa',preco: 6.5, tamanho:"300ml",tipoId:1},

      {nome: 'X-Bomba',preco: 15.00, tamanho:"gg",tipoId:2},
      {nome: 'X-Ratao',preco:18.00, tamanho:"XG",tipoId:2},
      {nome: 'X-Baratao',preco:12.00, tamanho:"G",tipoId:2},
      {nome: 'X-Leptospirose',preco:11.00, tamanho:"M",tipoId:2},
      {nome: 'X-Dengue',preco:9.00, tamanho:"P",tipoId:2},

      {nome: 'Brisadeiro',preco:16.00, tamanho:"G",tipoId:3},
      {nome: 'Cook-Magico',preco:20.00, tamanho:"M",tipoId:3},
      {nome: 'Cogumelo-Recheado',preco:6.00, tamanho:"P",tipoId:3},
      {nome: 'LSD',preco:30.00, tamanho:"PP",tipoId:3},
      {nome: 'Bolo',preco:10.00, tamanho:"P",tipoId:3},

      {nome: 'Hot-Depressão',preco:10.00, tamanho:"G",tipoId:4},
      {nome: 'Hot-Dipirona',preco:9.00, tamanho:"GG",tipoId:4},
      {nome: 'Hot-Bupropiona',preco:16.00, tamanho:"M",tipoId:4},
      {nome: 'Hot-Sertralina',preco:12.00, tamanho:"GG",tipoId:4},
      {nome: 'Hot-Mirtazapina',preco:16.00, tamanho:"GG",tipoId:4},

      {nome: 'Tábua quente',preco:20.00, tamanho:"G",tipoId:5},
      {nome: 'Tábua de frios',preco:15.00, tamanho:"G",tipoId:5},
      {nome: 'Porções individuais',preco:9.50, tamanho:"P",tipoId:5},
      {nome: 'Porções de frutos do mar',preco:18.00, tamanho:"M",tipoId:5},
      {nome: ' Pastéis, sanduíches e coxinhas',preco:13.00, tamanho:"M",tipoId:5},
    ])
  }
}