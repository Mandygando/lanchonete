import Ingrediente from '#models/ingrediente';
import { HttpContext } from '@adonisjs/core/http';

export default class IngredientesController {

    async index({ request }: HttpContext) {
        const page = request.input('page', 1);
        const perPage = request.input('perPage', 10);

        return await Ingrediente.query()
                                .preload('produtos')
                                .paginate(page, perPage);
    }

    async show({ params }: HttpContext) {
        return await Ingrediente.query()
                                .where('id', params.id)
                                .preload('produtos')
                                .firstOrFail();
    }

    async store({ request }: HttpContext) {
        const dados = request.only(['nome', 'descricao']);
        return await Ingrediente.create(dados);
    }

    async update({ params, request }: HttpContext) {
        const ingrediente = await Ingrediente.findOrFail(params.id);
        const dados = request.only(['nome', 'descricao']);
        
        ingrediente.merge(dados);
        return await ingrediente.save();
    }

    async destroy({ params }: HttpContext) {
        const ingrediente = await Ingrediente.findOrFail(params.id);

        await ingrediente.delete();
        return { msg: 'Registro deletado com sucesso', ingrediente };
    }
}
