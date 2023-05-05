DROP SCHEMA IF EXISTS ExpensesController;
CREATE SCHEMA IF NOT EXISTS ExpensesController;
USE ExpensesController;

  CREATE TABLE pagamento (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      tipo VARCHAR(45) NOT NULL
  );
  
  INSERT INTO pagamento (tipo)
	VALUES
    ('Dinheiro'),
    ('Débito'),
    ('Crédito'),
    ('Pix');
    
  CREATE TABLE categorias (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL
  );
  
  INSERT INTO categorias (nome)
	VALUES
    ('Alimetação'),
    ('Diversos'),
    ('Domésticas'),
    ('Lazer'),
    ('Saúde');
CREATE TABLE despesas (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      valor_cent INT NOT NULL,
      data_da_compra DATE,
      descricao VARCHAR(100) NOT NULL,
      tipo_pagamento_id INT NOT NULL,
      categoria_id INT NOT NULL,
      FOREIGN KEY  (tipo_pagamento_id) REFERENCES pagamento (id),
      FOREIGN KEY  (categoria_id) REFERENCES categorias (id)
);
