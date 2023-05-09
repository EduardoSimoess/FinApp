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
const categories_model_1 = __importDefault(require("../models/categories.model"));
const expenses_model_1 = __importDefault(require("../models/expenses.model"));
const payment_model_1 = __importDefault(require("../models/payment.model"));
class ExpenseService {
    constructor() {
        this.paymentModel = new payment_model_1.default();
        this.categorieModel = new categories_model_1.default();
        this.expensesModel = new expenses_model_1.default();
    }
    newExpense(expenseData) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo, categoria, valor, descricao } = expenseData;
            const tipoPagamentoId = yield this.paymentModel.getPaymentId(tipo);
            const categoriaId = yield this.categorieModel.getCategorieId(categoria);
            const fixedValue = valor.replace(',', '.');
            const valorCent = 100 * Number(fixedValue);
            const obj = { valorCent, dataDeCompra: new Date(), descricao, tipoPagamentoId, categoriaId };
            const id = this.expensesModel.create(obj);
            return id;
        });
    }
    listExpenses(month) {
        return __awaiter(this, void 0, void 0, function* () {
            // const month = (new Date().getMonth()) + 1;
            const list = yield this.expensesModel.getExpenses(month);
            return list;
        });
    }
}
exports.default = ExpenseService;
