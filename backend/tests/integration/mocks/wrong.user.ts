const valor = '300,00';
const categoria = 'Alimetação';
const descricao = 'Restaurante da faculdade';
const tipo = 'Pix';

export const noDescription = {
  valor,
  categoria,
  descricao: '',
  tipo,
};

export const noType = {
  valor,
  categoria,
  descricao,
  tipo: '',  
};

export const wrongType = {
  valor,
  categoria,
  descricao,
  tipo: 'Cheque especial',    
};

export const noCategorie = {
  valor,
  categoria: '',
  descricao,
  tipo,  
};

export const wrongCategorie = {
  valor,
  categoria: 'Comida',
  descricao,
  tipo,  
};

export const noValue = {
  valor: '',
  categoria,
  descricao,
  tipo,   
};

export const wrongValue = {
  valor: '20',
  categoria,
  descricao,
  tipo,   
};

export const lowValue = {
  valor: '0,00',
  categoria,
  descricao,
  tipo,   
};
  
// export default wrongUser;