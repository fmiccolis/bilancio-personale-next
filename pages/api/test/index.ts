// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const fs = require('fs');

type Movement = {
  id: number,
  data: string,
  importo: number,
  descrizione: string,
  categoriaId: number,
  tipologiaId: number,
  sorgente: number,
  destinazione: number,
  codice: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const movements: Movement[] = JSON.parse(fs.readFileSync('data/movements.json', 'utf8'));
  res.status(200).json(movements);
}
