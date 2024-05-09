import Produto from "../models/produto.js"

export default class ProdutosController {
    async index(){
        return await Produto.query().where("tipoId",2)
    }

}