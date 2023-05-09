"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lowValue = exports.wrongValue = exports.noValue = exports.wrongCategorie = exports.noCategorie = exports.wrongType = exports.noType = exports.noDescription = void 0;
const valor = '300,00';
const categoria = 'Alimetação';
const descricao = 'Restaurante da faculdade';
const tipo = 'Pix';
exports.noDescription = {
    valor,
    categoria,
    descricao: '',
    tipo,
};
exports.noType = {
    valor,
    categoria,
    descricao,
    tipo: '',
};
exports.wrongType = {
    valor,
    categoria,
    descricao,
    tipo: 'Cheque especial',
};
exports.noCategorie = {
    valor,
    categoria: '',
    descricao,
    tipo,
};
exports.wrongCategorie = {
    valor,
    categoria: 'Comida',
    descricao,
    tipo,
};
exports.noValue = {
    valor: '',
    categoria,
    descricao,
    tipo,
};
exports.wrongValue = {
    valor: '20',
    categoria,
    descricao,
    tipo,
};
exports.lowValue = {
    valor: '0,00',
    categoria,
    descricao,
    tipo,
};
// export default wrongUser;
