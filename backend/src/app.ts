// backend/src/app.ts
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { getUsers } from '../controllers/usersController';
import { getLeads } from '../controllers/leadsController'; 
import { getPipelines } from '../controllers/pipelinesController';
import { getContacts } from '../controllers/contactsController';

const app = express();
const port = process.env.PORT || 3000;

// Настройка CORS
app.use(cors());

app.get('/api/leads', getLeads);
app.get('/api/leads/pipelines', getPipelines);
app.get('/api/users', getUsers);
app.get('/api/contacts', getContacts);

app.listen(port, () => {
  console.log(`Слушаем на порту ${port}`);
});
