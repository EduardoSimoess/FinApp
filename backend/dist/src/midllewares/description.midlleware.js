"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function descriptionNCategorie(req, res, next) {
    const { descricao, categoria } = req.body;
    if (!descricao) {
        return res.status(400)
            .json({ data: 'Propiedade \'descricao\' deve ser inserida', succes: false });
    }
    if (!categoria) {
        return res.status(400)
            .json({ data: 'Propiedade \'categoria\' deve ser inserida', succes: false });
    }
    const categorias = ['Alimetação', 'Diversos', 'Domésticas', 'Lazer', 'Saúde'];
    const bool = categorias.some((categorie) => categorie === categoria);
    if (!bool)
        return res.status(400).json({ data: '\'categoria\' inválida', succes: false });
    return next();
}
exports.default = descriptionNCategorie;
