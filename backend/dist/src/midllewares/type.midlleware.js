"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeValidation(req, res, next) {
    const { tipo } = req.body;
    if (!tipo) {
        return res.status(400)
            .json({ data: 'Propiedade \'tipo\' deve ser inserida', succes: false });
    }
    const tipos = ['Dinheiro', 'Débito', 'Crédito', 'Pix'];
    const bool = tipos.some((type) => type === tipo);
    if (!bool)
        return res.status(400).json({ data: '\'tipo\' inválido', succes: false });
    return next();
}
exports.default = typeValidation;
