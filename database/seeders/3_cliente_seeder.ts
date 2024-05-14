import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cliente.createMany([
      {"nome": "Pedro Oliveira","cpf": "111.222.333-44","telefone": "(12) 3456-7890","email": "pedro.oliveira@example.com"},
      {"nome": "Laura Santos","cpf": "555.666.777-88","telefone": "(21) 9876-5432","email": "laura.santos@example.com"},
      {"nome": "Fernando Silva","cpf": "999.888.777-66","telefone": "(34) 5678-9123","email": "fernando.silva@example.com"},
      {"nome": "Mariana Pereira","cpf": "444.555.666-77","telefone": "(45) 6789-1234","email": "mariana.pereira@example.com"},
      {"nome": "Gabriela Ferreira","cpf": "888.777.999-00","telefone": "(56) 7891-2345","email": "gabriela.ferreira@example.com"}
    ])
  }
}
