import express from 'express';

import { homepage, resultData } from '../controllers/index';
const router = express.Router();

export default function api() {
  router.get('/data', homepage);
  router.post('/search', resultData);
  return router;
}

