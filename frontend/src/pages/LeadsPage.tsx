// src/pages/LeadsPage.tsx

import React, { useState, useEffect } from 'react';
import { Layout, Typography, message } from 'antd';
import { Lead, Pipeline, User,} from '../types';
import { getLeads, getPipelines, getUsers } from '../api/api';
import SearchBar from '../components/SearchBar';
import LeadsTable from '../components/LeadsTable';

const { Header, Content } = Layout;
const { Title } = Typography;

const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchLeads();
    fetchPipelines();
    fetchUsers();
  }, []);

   const fetchLeads = async (query?: string) => {
    if (query && query.length < 3) {
      message.warning('Введите минимум 3 символа для поиска');
      return;
    }
    try {
      const leads: Lead[] = await getLeads(query);
      if (!leads.length) message.warning('Ничего не нашлось');
      setLeads(leads);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const fetchPipelines = async () => {
    try {
      const pipelines: Pipeline[] = await getPipelines();
      setPipelines(pipelines);
    } catch (error) {
      console.error('Error fetching pipelines:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const users:User[] = await getUsers();
      setUsers(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Title level={3} style={{ color: 'white' }}>
          Сделки
        </Title>
      </Header>
      <Content style={{ padding: '24px' }}>
        <SearchBar onSearch={fetchLeads} />
        <LeadsTable leads={leads} pipelines={pipelines} users={users} />
      </Content>
    </Layout>
  );
};

export default LeadsPage;
