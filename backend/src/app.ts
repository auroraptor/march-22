require('dotenv').config();
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
const YOUR_SUBDOMAIN = process.env.YOUR_SUBDOMAIN || 'test';
const YOUR_API_KEY = process.env.YOUR_API_KEY || 'secret-key';

// Настройка CORS
app.use(cors());

app.get('/api/leads', async (req, res) => {
    const query = req.query.query as string;
  
    try {
      const params = query && query.length >= 3 ? { filter: { query: query } } : {};
      
      // Выполните запрос к API amoCRM для получения сделок с учетом фильтрации (если есть).
      // Замените YOUR_API_KEY, YOUR_SUBDOMAIN и другие параметры на реальные данные.
      const response = await axios.get(`https://${YOUR_SUBDOMAIN}.amocrm.ru/api/v4/leads`, {
        params: params,
        headers: {
          'Authorization': `Bearer ${YOUR_API_KEY}`
        }
      });

      console.log(response.data);
  
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Произошла ошибка при обработке запроса');
    }
  });

app.listen(port, () => {
  console.log(`Слушаем на порту ${port}`);
});
