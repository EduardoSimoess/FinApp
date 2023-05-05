<h1>Projeto FinApp</h1>

O FinApp é uma aplicação fullstack que visa proporcionar aos seus usuários uma forma prática de controlar seus gastos mensais!

Obs.: O Front-end ainda está em desenvolvimento.

<h1>Back-end</h1>

<h2>Instalação</h2>

Para clonar o projeto é só colar a seguinte linha de comando no terminal:
- git clone git@github.com:EduardoSimoess/blogsAPI.git;
Em seguida é necessário instalar as dependências do projeto localmente:
- npm i;
Também optei por utilizar o docker no design do projeto, por isso para subir os containers é necessário usar o comando:
- docker-compose up -d;
Os comando a seguir devem ser inseridos dentro do terminal do container “modelo”, para abri-lo use o comando:
- docker exec -it modelo bash;
Para inicializar a aplicação utilize o comando:
- npm start;
Para utilizar as rotas é necessário o auxílio de alguma extensão como o thunder cliente ou o insomnia.
Se desejar rodar os testes automatizados basta usar o comando:
- npm test;

<h2>Desenvolvimento</h2>

O back-end foi desenvolvido utilizando Node.js e a linguagem escolhida foi o TypeScript, além disso optei por utilizar programação orientada a objetos na construção da API, o armazenamento de dados foi feito com MySQL2 e Express.

Para melhor organização do projeto utilizei a arquitetura MSC. De modo que, a camada Model fica responsável pela integração com o banco de dados, a Service contém todas as lógicas de negócio utilizadas na aplicação e, por fim, a Controller fica responsável por passar o resultado das requisições.

Os testes foram implementados usando mocha com auxílio do chai e sinon.

<h2>Funcionalidades</h2>

Assim que o banco de dados e as tabelas são criadas já são determinadas as possíveis formas de pagamentos:
- Crédito;
- Débito;
- Dinheiro;
- Pix;
e as categorias nas quais os gastos devem se enquadrar:
- Alimentação;
- Diversos;
- Domésticos;
- Lazer;
- Saúde;
As rotas criadas têm a função de adicionar novos gastos, além de dar acesso a todos os gastos feitos durante o mês. 
