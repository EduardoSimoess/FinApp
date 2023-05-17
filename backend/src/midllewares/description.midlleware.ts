import { Request, Response, NextFunction } from 'express';

export default function descriptionNCategorie(req: Request, res: Response, next: NextFunction) {
  const { descricao, categoria } = req.body;

  if (!descricao) {
    return res.status(400)
      .json({ data: 'Propiedade \'descricao\' deve ser inserida', succes: false });
  }

  if (!categoria) {
    return res.status(400)
      .json({ data: 'Propiedade \'categoria\' deve ser inserida', succes: false });
  }

  const categorias = ['Alimetação', 'Diversos', 'Domésticas', 'Lazer', 'Saúde'];
  const bool = categorias.some((categorie) => categorie === categoria);
  if (!bool) return res.status(400).json({ data: '\'categoria\' inválida', succes: false });

  return next();
}