import axios from 'axios';

const YOUR_SUBDOMAIN = process.env.YOUR_SUBDOMAIN || 'test';
const YOUR_API_KEY = process.env.YOUR_API_KEY || 'secret-key';

export const fetchLeads = async (query?: string) => {
  const params = query && query.length >= 3 ? { filter: { query: query } } : {};

  const response = await axios.get(`https://${YOUR_SUBDOMAIN}.amocrm.ru/api/v4/leads`, {
    params: params,
    headers: {
      'Authorization': `Bearer ${YOUR_API_KEY}`,
    },
  });

  return response.data;
};

export const fetchPipelines = async () => {
  const response = await axios.get(`https://${YOUR_SUBDOMAIN}.amocrm.ru/api/v4/leads/pipelines`, {
    headers: {
      'Authorization': `Bearer ${YOUR_API_KEY}`,
    },
  });

  return response.data;
};