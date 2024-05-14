import Ingrediente from '#models/ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      { "nome": "Tomate", "descricao": "Ingrediente fresco e suculento." },
      { "nome": "Alface", "descricao": "Folha verde crocante para suas saladas." },
      { "nome": "Queijo", "descricao": "Queijo Gostoso para sanduíches e pratos." },
      { "nome": "Rato", "descricao": "Proteína versátil para várias receitas." },
      { "nome": "Bacon", "descricao": "Muito sabor e crocancia." },
      { "nome": "Batata", "descricao": "Versátil, perfeita para fritar ou assar." },
      { "nome": "Pimenta", "descricao": "Adiciona um toque picante e especial." },
      { "nome": "Sal", "descricao": "Realça o sabor de qualquer preparação." },
      { "nome": "Maionese", "descricao": "Condimento cremoso para sanduíches." },
      { "nome": "Mostarda", "descricao": "Condimento picante para molhos." },
      { "nome": "Ketchup", "descricao": "Molho doce para hambúrgueres e fritas." },
      { "nome": "Pão", "descricao": "Base para sanduíches, torrado ou fresco." },
      { "nome": "Maconha", "descricao": "Toque especial e Feliz." },
      { "nome": "Peixe", "descricao": "Proteína magra, grelhado ou assado." }
    ])
  }
}
