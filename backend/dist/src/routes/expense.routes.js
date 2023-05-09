"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenses_controller_1 = __importDefault(require("../controllers/expenses.controller"));
const description_midlleware_1 = __importDefault(require("../midllewares/description.midlleware"));
const type_midlleware_1 = __importDefault(require("../midllewares/type.midlleware"));
const value_midlleware_1 = __importDefault(require("../midllewares/value.midlleware"));
const router = (0, express_1.Router)();
const expenseController = new expenses_controller_1.default();
router.post('/', description_midlleware_1.default, type_midlleware_1.default, value_midlleware_1.default.valueValidation, value_midlleware_1.default.signalValidation, expenseController.newExpense.bind(expenseController));
router.get('/:month', expenseController.listExpenses.bind(expenseController));
exports.default = router;
