import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import mock from './mocks/list.mock';
import ExpenseModel from '../../src/models/expenses.model';
import CategoriesModel from '../../src/models/categories.model';
import PaymentModel from '../../src/models/payment.model';
import user from './mocks/user.mock';
import { noDescription, noCategorie, wrongCategorie, noType, wrongType, 
  noValue, wrongValue, lowValue } from './mocks/wrong.user';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando url GET "/:month"', function() {
  before(function() {
    sinon.stub(ExpenseModel.prototype, 'getExpenses').resolves(mock);
  });
  after(function() {
    sinon.stub(ExpenseModel.prototype.getExpenses as sinon.SinonStub).restore();
  });

  it('Retorna a lista completa de gastos', async function() {
    const response = await chai.request(app).get('/4');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal({ data: mock, succes: true });
  });
});

describe('Testando url POST "/"', function() {
  before(function() {
    sinon.stub(ExpenseModel.prototype, 'create').resolves(1);
    sinon.stub(CategoriesModel.prototype, 'getCategorieId').resolves(1);
    sinon.stub(PaymentModel.prototype, 'getPaymentId').resolves(4);
  });

  after(function() {
    sinon.stub(ExpenseModel.prototype.create as sinon.SinonStub).restore();
    sinon.stub(CategoriesModel.prototype.getCategorieId as sinon.SinonStub).restore();
    sinon.stub(PaymentModel.prototype.getPaymentId as sinon.SinonStub).restore();
  });

  it('Um novo gasto é adicionado corretamente', async function() {
    // console.log(user);
    const response = await chai.request(app).post('/').send(user);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ data: 1, succes: true });
  });
});

describe('Testando url POST "/" com usuários incorretos(descrição & categoria)', () => {
  it('Retorna um erro quando não há descrição', async function() {
    const response = await chai.request(app).post('/').send(noDescription);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: 'Propiedade \'descricao\' deve ser inserida',
      succes: false });
  });

  it('Retorna um erro quando não há categoria', async function() {
    const response = await chai.request(app).post('/').send(noCategorie);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: 'Propiedade \'categoria\' deve ser inserida',
      succes: false });
  });

  it('Retorna um erro quando a categoria é inválida', async function() {
    const response = await chai.request(app).post('/').send(wrongCategorie);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: '\'categoria\' inválida',
      succes: false });
  });
});

describe('Testando url POST "/" com usuários incorretos(tipo)', () => {
  it('Retorna um erro quando não há tipo', async function() {
    const response = await chai.request(app).post('/').send(noType);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: 'Propiedade \'tipo\' deve ser inserida',
      succes: false });
  });

  it('Retorna um erro quando o tipo é inválido', async function() {
    const response = await chai.request(app).post('/').send(wrongType);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: '\'tipo\' inválido',
      succes: false });
  });
});

describe('Testando url POST "/" com usuários incorretos(value)', () => {
  it('Retorna um erro quando não há valor', async function() {
    const response = await chai.request(app).post('/').send(noValue);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: 'Propiedade \'valor\' deve ser inserida',
      succes: false });
  });

  it('Retorna um erro quando vlor está com formato incorreto', async function() {
    const response = await chai.request(app).post('/').send(wrongValue);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: 'Propiedade \'valor\' está com formato incorreto',
      succes: false });
  });

  it('Retorna um erro quando o valor é menor que zero', async function() {
    const response = await chai.request(app).post('/').send(lowValue);
    expect(response.status).to.be.equal(400);
    expect(response.body).to.be.deep.equal({ data: 'Propiedade \'valor\' deve ser maior que zero',
      succes: false });
  });
});