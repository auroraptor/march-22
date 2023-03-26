import axios from 'axios';
import { Lead, Contact, Pipeline, User } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchLeads = async (query?: string): Promise<Lead[]> => {
  const response = await api.get('/leads', { params: { query } });
  return response.data._embedded.leads;
};

export const fetchPipelines = async (): Promise<Pipeline[]> => {
  const response = await api.get('/leads/pipelines');
  return response.data._embedded.pipelines;
};

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get('/users');
  return response.data._embedded.users;
};

export const fetchContactsByIds = async (contactIds: number[]): Promise<Contact[]> => {
  try {
    const response = await axios.get(`/contacts`, { params: { leadId: JSON.stringify(contactIds) } });
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};