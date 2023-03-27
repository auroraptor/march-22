// src/pages/LeadsPage.tsx

import React, { useState, useEffect } from 'react';
import { Layout, Typography, message } from 'antd';
import { ApiResponse, PipelinesApiResponse, Lead, Pipeline, User, UserApiResponse } from '../types';
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
      const url = query
        ? `http://localhost:3000/api/leads?query=${query}`
        : 'http://localhost:3000/api/leads';
      const response = await fetch(url);
      const data: ApiResponse = await response.json();
      if (typeof data === 'string') message.warning('Ничего не нашлось');
      setLeads(typeof data === 'object' ? data._embedded.leads : []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const fetchPipelines = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/leads/pipelines');
      const data: PipelinesApiResponse = await response.json();
      setPipelines(data._embedded.pipelines);
    } catch (error) {
      console.error('Error fetching pipelines:', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const data: UserApiResponse = await response.json();
      setUsers(data._embedded.users);
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
