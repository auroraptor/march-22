// src/pages/LeadsPage.tsx

import React, { useState, useEffect } from 'react';
import { Layout, Typography, message } from 'antd';
import { ApiResponse, PipelinesApiResponse, Lead, Pipeline } from '../types';
import SearchBar from '../components/SearchBar';
import LeadsTable from '../components/LeadsTable';

const { Header, Content } = Layout;
const { Title } = Typography;

const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);

  useEffect(() => {
    fetchLeads();
    fetchPipelines();
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
      setLeads(data._embedded.leads);
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

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Title level={3} style={{ color: 'white' }}>
          Сделки
        </Title>
      </Header>
      <Content style={{ padding: '24px' }}>
        <SearchBar onSearch={fetchLeads} />
        <LeadsTable leads={leads} pipelines={pipelines} />
      </Content>
    </Layout>
  );
};

export default LeadsPage;
