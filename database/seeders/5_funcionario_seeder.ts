import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
     await Funcionario.createMany([
      {
        "nome": "Pedro Oliveira",
        "cpf": "111.222.333-44",
        "endereco": "Rua X, 123",
        "sexo": "M",
        "telefone": "(12) 3456-7890",
        "cargoId": 1
      },
      {
        "nome": "Laura Martins",
        "cpf": "555.666.777-88",
        "endereco": "Av. Y, 456",
        "sexo": "F",
        "telefone": "(21) 9876-5432",
        "cargoId": 2
      },
      {
        "nome": "Fernando Sousa",
        "cpf": "999.888.777-66",
        "endereco": "Rua Z, 789",
        "sexo": "M",
        "telefone": "(34) 5678-9123",
        "cargoId": 3
      },
      {
        "nome": "Mariana Costa",
        "cpf": "444.555.666-77",
        "endereco": "Av. W, 1011",
        "sexo": "F",
        "telefone": "(45) 6789-1234",
        "cargoId": 2
      },
      {
        "nome": "Gabriel Ferreira",
        "cpf": "888.777.999-00",
        "endereco": "Rua V, 1213",
        "sexo": "M",
        "telefone": "(56) 7891-2345",
        "cargoId": 4
      }
    ]
    )
  }
}
