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
const expenses_service_1 = __importDefault(require("../services/expenses.service"));
class ExpenseController {
    constructor() {
        this.expenseService = new expenses_service_1.default();
    }
    newExpense(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { tipo, categoria, valor, descricao } = req.body;
            const id = yield this.expenseService.newExpense({ tipo, categoria, valor, descricao });
            return res.status(201).json({ data: id, succes: true });
        });
    }
    listExpenses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { month } = req.params;
            const list = yield this.expenseService.listExpenses(Number(month));
            return res.status(200).json({ data: list, succes: true });
        });
    }
}
exports.default = ExpenseController;
