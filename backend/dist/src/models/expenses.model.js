"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
// RowDataPacket,
class ExpenseModel {
    constructor() {
        this.connection = connection_1.default;
    }
    create(expense) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valorCent, dataDeCompra, descricao, tipoPagamentoId, categoriaId } = expense;
            const [{ insertId }] = yield this.connection.execute(`INSERT INTO ExpensesController.despesas 
      (valor_cent, data_da_compra, descricao,
        tipo_pagamento_id, categoria_id) VALUES (?, ?, ?, ?, ?)`, [valorCent, dataDeCompra, descricao, tipoPagamentoId, categoriaId]);
            console.log(insertId);
            return insertId;
        });
    }
    getExpenses(month) {
        return __awaiter(this, void 0, void 0, function* () {
            const [list] = yield this.connection.execute(`SELECT d.id, d.valor_cent AS valorCent, d.data_da_compra AS data, d.descricao, 
      c.nome AS categoria, p.tipo
      FROM ExpensesController.despesas AS d
      INNER JOIN ExpensesController.categorias AS c
      ON d.categoria_id = c.id
      INNER JOIN ExpensesController.pagamento AS p
      ON d.tipo_pagamento_id = p.id
      WHERE MONTH(data_da_compra)=?`, [month]);
            console.log(list);
            return list;
        });
    }
}
exports.default = ExpenseModel;
