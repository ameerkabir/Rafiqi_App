import express from 'express';

import { homepage, postData } from '../controllers/index';
const router = express.Router();

export default function api() {
  router.get('/data', homepage);
  router.post('/data', postData);
  return router;
}
