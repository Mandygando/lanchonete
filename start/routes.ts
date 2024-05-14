/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import IngredientesController from '../app/controllers/ingredientes_controller.js'
import ProdutosController from '../app/controllers/produtos_controller.js'
import TiposController from '../app/controllers/tipos_controller.js'
import CargosController from '#controllers/cargos_controller'
import ClientesController from '#controllers/clientes_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import ComandasController from '#controllers/comandas_controller'
import ProdutosComandasController from '#controllers/produtos_comandas_controller'
import ProdutoIngredientesController from '#controllers/produto_ingredientes_controller'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/ingredientes', IngredientesController).apiOnly()
router.resource('/cargos', CargosController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/comandas', ComandasController).apiOnly()
router.resource('/produto_comandas', ProdutosComandasController).apiOnly()
router.resource('/produto_ingredientes', ProdutoIngredientesController).apiOnly()