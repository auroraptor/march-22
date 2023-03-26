// backend/src/app.ts
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import { fetchLeads, fetchPipelines, fetchContacts } from '../utils/apiClient';
import { getUsers } from '../controllers/usersController';

const app = express();
const port = process.env.PORT || 3000;

// Настройка CORS
app.use(cors());

app.get('/api/leads', async (req, res) => {
  const query = req.query.query as string;

  try {
    const data = await fetchLeads(query);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при обработке запроса');
  }
});

app.get('/api/leads/pipelines', async (_, res) => {
  try {
    const data = await fetchPipelines();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при обработке запроса');
  }
});

app.get('/api/users', getUsers);

app.get('/api/contacts', async (req, res) => {
  const leadId = Number(req.query.leadId);

  if (!leadId) {
    res.status(400).send('Необходимо указать параметр leadId');
    return;
  }

  try {
    const data = await fetchContacts(leadId);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Произошла ошибка при обработке запроса');
  }
});

app.listen(port, () => {
  console.log(`Слушаем на порту ${port}`);
});
