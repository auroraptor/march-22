import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getPipelines = async () => {
  const response = await api.get('/pipelines');
  return response.data._embedded.pipelines;
};