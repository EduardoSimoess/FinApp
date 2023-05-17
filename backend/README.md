<h1>Projeto FinApp</h1>

O FinApp é uma aplicação fullstack que visa proporcionar aos seus usuários uma forma prática de controlar seus gastos mensais!

Obs.: O Front-end ainda está em desenvolvimento.

<h1>Back-end</h1>

<h2>Instalação</h2>

Para clonar o projeto é só colar a seguinte linha de comando no terminal:
<br>
<span>- git clone git@github.com:EduardoSimoess/blogsAPI.git;</span>
<br>
Em seguida é necessário instalar as dependências do projeto localmente:
<br>
<span>- npm i;</span>
<br>
Também optei por utilizar o docker no design do projeto, por isso para subir os containers é necessário usar o comando:
<br>
<span>- docker-compose up -d;</span>
<br>
Os comando a seguir devem ser inseridos dentro do terminal do container “modelo”, para abri-lo use o comando:
<br>
<span>- docker exec -it modelo bash;</span>
<br>
Para inicializar a aplicação utilize o comando:
<br>
<span>- npm start;</span>
<br>
Para utilizar as rotas é necessário o auxílio de alguma extensão como o thunder cliente ou o insomnia.
Se desejar rodar os testes automatizados basta usar o comando:
<br>
<span>- npm test;</span>
<br>

<h2>Desenvolvimento</h2>

O back-end foi desenvolvido utilizando Node.js e a linguagem escolhida foi o TypeScript, além disso optei por utilizar programação orientada a objetos na construção da API, o armazenamento de dados foi feito com MySQL2 e Express.

Para melhor organização do projeto utilizei a arquitetura MSC. De modo que, a camada Model fica responsável pela integração com o banco de dados, a Service contém todas as lógicas de negócio utilizadas na aplicação e, por fim, a Controller fica responsável por passar o resultado das requisições.

Os testes foram implementados usando mocha com auxílio do chai e sinon.

<h2>Funcionalidades</h2>

Assim que o banco de dados e as tabelas são criadas já são determinadas as possíveis formas de pagamentos:
<br>
<span>- Crédito;</span>
<br>
<span>- Débito;</span>
<br>
<span>- Dinheiro;</span>
<br>
<span>- Pix;</span>
<br>
e as categorias nas quais os gastos devem se enquadrar:
<br>
<span>- Alimentação;</span>
<br>
<span>- Diversos;</span>
<br>
<span>- Domésticos;</span>
<br>
<span>- Lazer;</span>
<br>
<span>- Saúde;</span>
<br>
As rotas criadas têm a função de adicionar novos gastos, além de dar acesso a todos os gastos feitos durante o mês.

<h1>Front-end</h1>

OBS.: A estilização ainda está em desenvolvimento.

Uma vez que o back-end estiver funcionando corretamente, é necessário entrar na pasta front-end usando o comando:

<br>
<span>- cd front-end;</span>
<br>

Já dentro da pasta instalamos as dependências com o comando:

<br>
<span>- npm i;</span>
<br>

Por fim para iniciar a aplicação utilize:

<br>
<span>-npm start;</span>
<br>

<h2>Desenvolvimento</h2>

O front-end foi feito com react. Para tornar possível navegar por diferentes páginas foi utilizado o react router dom e todas as páginas foram feitas por componentes funcionais. 

<h2>Funcionalidades<h2>

Na página inicial o usuário pode optar por adicionar um novo gasto ou acessar a lista de gastos registrados.

Uma vez que a primeira opção é selecionada o usuário é redirecionado para um formulário onde uma vez que todos os campos forem preenchidos corretamente a nova despesa será adicionada e voltamos para a página principal.

Quando a segunda opção é selecionada é dada ao usuário uma lista com os meses do ano, para que ele possa escolher o período dos gastos que ele deseja visualizar.

