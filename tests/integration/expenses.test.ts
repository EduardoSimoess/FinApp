import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import mock from './mocks/list.mock';
import ExpenseModel from '../../src/models/expenses.model';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando url "/:month"', function() {
  before(function() {
    sinon.stub(ExpenseModel.prototype, 'getExpenses').resolves(mock);
  });
  after(function() {
    sinon.stub(ExpenseModel.prototype.getExpenses as sinon.SinonStub).restore();
  });

  it('Retorna a lista completa de gastos', async function() {
    const response = await chai.request(app).get('/4');
    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal({ data: mock, succes: true });
  });
});