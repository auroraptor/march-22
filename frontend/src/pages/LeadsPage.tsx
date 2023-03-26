// src/pages/LeadsPage.tsx

import React, { useState, useEffect } from 'react';
import { Layout, Typography, message } from 'antd';
import { ApiResponse, PipelinesApiResponse, Lead, Pipeline, User, UserApiResponse } from '../types';
import SearchBar from '../components/SearchBar';
import LeadsTable from '../components/LeadsTable';
import { fetchLeads, fetchPipelines, fetchUsers } from '../api/api';

const { Header, Content } = Layout;
const { Title } = Typography;

const LeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [pipelines, setPipelines] = useState<Pipeline[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchLeads().then((fetchedLeads) => setLeads(fetchedLeads));
    fetchPipelines().then((fetchedPipelines) => setPipelines(fetchedPipelines));
    fetchUsers().then((fetchedUsers) => setUsers(fetchedUsers));
  }, []);

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
