import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cargo.createMany([
      { "nome": "Gerente de Lanchonete" },
      { "nome": "Chef de Cozinha" },
      { "nome": "Cozinheiro" },
      { "nome": "Auxiliar de Cozinha" },
      { "nome": "Garçom" },
      { "nome": "Atendente de Caixa" },
      { "nome": "Barista" },
      { "nome": "Padeiro" },
      { "nome": "Chapeiro" },
      { "nome": "Entregador" },
      { "nome": "Supervisor de Atendimento" },
      { "nome": "Hostess" },
      { "nome": "Garçonete" },
      { "nome": "Estoquista" },
      { "nome": "Lavador de Pratos" },
      { "nome": "Maitre" },
      { "nome": "Barman" },
      { "nome": "Auxiliar de Limpeza" }
    ])
  }
}
