import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getPipelines = async () => {
  const response = await api.get('/pipelines');
  return response.data._embedded.pipelines;
};

export const getContactsByLeadId = async (leadId: number) => {
  const response = await api.get(`/contacts?leadId=${leadId}`);
  return response.data._embedded.contacts.filter((i: { _embedded: any; }) => i._embedded.leads.find((j: { id: any; }) => j.id === leadId));
};