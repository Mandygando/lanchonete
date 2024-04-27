import Produto from "../models/produto.js"

export default class ProdutosController {
    async index(){
        return await Produto.all()
    }

    async store(){
        return [1,2,3]
    }
}