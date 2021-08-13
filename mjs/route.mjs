import { Router } from 'express';

const controller = (req, res) => {
  res.send('Hello world');
};

export const baseRouter = Router().get('/', controller);