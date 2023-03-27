import axios from "axios";
import { ApiResponse, PipelinesApiResponse, UserApiResponse, ContactsApiResponse,  Lead, Pipeline, User, Contact } from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const getPipelines = async (): Promise<Pipeline[]> => {
  const response = await api.get<PipelinesApiResponse>("/leads/pipelines");
  return response.data._embedded.pipelines;
};

export const getContactsByLeadId = async (leadId: number): Promise<Contact[]> => {
  const response = await api.get<ContactsApiResponse>(`/contacts?leadId=${leadId}`);
  return response.data._embedded.contacts.filter((i: Contact) =>
    i._embedded.leads.find((j: { id: number }) => j.id === leadId)
  );
};

export const getLeads = async (query?: string): Promise<Lead[]> => {
  const url = query ? `/leads?query=${query}` : "/leads";

  const response = await api.get<ApiResponse>(url);
  return typeof response.data === 'object' ? response.data._embedded.leads : [];
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get<UserApiResponse>('users');
  return response.data._embedded.users;
}