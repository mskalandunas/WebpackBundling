import { Request, Response, Router } from 'express';

const controller = (req: Request, res: Response): void => {
  res.send('Hello world');
};

export const baseRouter = Router().get('/', controller);