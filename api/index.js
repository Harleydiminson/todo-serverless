import { getHandler } from './handlers/getHandler.js';
import { postHandler } from './handlers/postHandler.js';
import { putHandler } from './handlers/putHadler.js';
import { deleteHandler } from './handlers/deleteHandler.js';

export default async function handler(req, res) {
  console.log(`Request received, method: ${req.method}, url: ${req.url}`);
  res.setHeader('Content-Type', 'application/json');
  switch (req.method) {
    case 'GET':
      getHandler(req, res);
      break;
    case 'POST':
      postHandler(req, res);
      break;
    case 'PUT':
      putHandler(req, res);
      break;
    case 'DELETE':
      deleteHandler(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}