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

app.get('/contacts', async (req, res) => {
  const { leadId } = req.query;
  if (leadId) {
    try {
      const contactIds = JSON.parse(leadId as string);
      const data = await fetchContacts(contactIds);
      res.json(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      res.status(500).json({ error: 'Failed to fetch contacts' });
    }
  } else {
    res.status(400).json({ error: 'Missing leadId query parameter' });
  }
});

app.listen(port, () => {
  console.log(`Слушаем на порту ${port}`);
});
