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
const chai_1 = __importDefault(require("chai"));
const sinon_1 = __importDefault(require("sinon"));
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = __importDefault(require("../../src/app"));
const list_mock_1 = __importDefault(require("./mocks/list.mock"));
const expenses_model_1 = __importDefault(require("../../src/models/expenses.model"));
const categories_model_1 = __importDefault(require("../../src/models/categories.model"));
const payment_model_1 = __importDefault(require("../../src/models/payment.model"));
const user_mock_1 = __importDefault(require("./mocks/user.mock"));
const wrong_user_1 = require("./mocks/wrong.user");
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('Testando url GET "/:month"', function () {
    before(function () {
        sinon_1.default.stub(expenses_model_1.default.prototype, 'getExpenses').resolves(list_mock_1.default);
    });
    after(function () {
        sinon_1.default.stub(expenses_model_1.default.prototype.getExpenses).restore();
    });
    it('Retorna a lista completa de gastos', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).get('/4');
            expect(response.status).to.be.equal(200);
            expect(response.body).to.be.deep.equal({ data: list_mock_1.default, succes: true });
        });
    });
});
describe('Testando url POST "/"', function () {
    before(function () {
        sinon_1.default.stub(expenses_model_1.default.prototype, 'create').resolves(1);
        sinon_1.default.stub(categories_model_1.default.prototype, 'getCategorieId').resolves(1);
        sinon_1.default.stub(payment_model_1.default.prototype, 'getPaymentId').resolves(4);
    });
    after(function () {
        sinon_1.default.stub(expenses_model_1.default.prototype.create).restore();
        sinon_1.default.stub(categories_model_1.default.prototype.getCategorieId).restore();
        sinon_1.default.stub(payment_model_1.default.prototype.getPaymentId).restore();
    });
    it('Um novo gasto é adicionado corretamente', function () {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(user);
            const response = yield chai_1.default.request(app_1.default).post('/').send(user_mock_1.default);
            expect(response.status).to.be.equal(201);
            expect(response.body).to.be.deep.equal({ data: 1, succes: true });
        });
    });
});
describe('Testando url POST "/" com usuários incorretos(descrição & categoria)', () => {
    it('Retorna um erro quando não há descrição', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.noDescription);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: 'Propiedade \'descricao\' deve ser inserida',
                succes: false });
        });
    });
    it('Retorna um erro quando não há categoria', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.noCategorie);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: 'Propiedade \'categoria\' deve ser inserida',
                succes: false });
        });
    });
    it('Retorna um erro quando a categoria é inválida', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.wrongCategorie);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: '\'categoria\' inválida',
                succes: false });
        });
    });
});
describe('Testando url POST "/" com usuários incorretos(tipo)', () => {
    it('Retorna um erro quando não há tipo', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.noType);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: 'Propiedade \'tipo\' deve ser inserida',
                succes: false });
        });
    });
    it('Retorna um erro quando o tipo é inválido', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.wrongType);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: '\'tipo\' inválido',
                succes: false });
        });
    });
});
describe('Testando url POST "/" com usuários incorretos(value)', () => {
    it('Retorna um erro quando não há valor', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.noValue);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: 'Propiedade \'valor\' deve ser inserida',
                succes: false });
        });
    });
    it('Retorna um erro quando vlor está com formato incorreto', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.wrongValue);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: 'Propiedade \'valor\' está com formato incorreto',
                succes: false });
        });
    });
    it('Retorna um erro quando o valor é menor que zero', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app_1.default).post('/').send(wrong_user_1.lowValue);
            expect(response.status).to.be.equal(400);
            expect(response.body).to.be.deep.equal({ data: 'Propiedade \'valor\' deve ser maior que zero',
                succes: false });
        });
    });
});
