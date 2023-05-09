"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function valueValidation(req, res, next) {
    const { valor } = req.body;
    if (!valor) {
        return res.status(400)
            .json({ data: 'Propiedade \'valor\' deve ser inserida', succes: false });
    }
    const bool = valor.includes(',');
    if (bool) {
        const array = valor.split(',');
        if (array[1].length !== 2) {
            return res.status(400)
                .json({ data: 'Propiedade \'valor\' está com formato incorreto', succes: false });
        }
    }
    else {
        return res.status(400)
            .json({ data: 'Propiedade \'valor\' está com formato incorreto', succes: false });
    }
    return next();
}
function signalValidation(req, res, next) {
    const { valor } = req.body;
    const negative = valor.includes('-');
    if (negative || valor === '0,00') {
        return res.status(400)
            .json({ data: 'Propiedade \'valor\' deve ser maior que zero', succes: false });
    }
    return next();
}
exports.default = {
    valueValidation,
    signalValidation,
};
