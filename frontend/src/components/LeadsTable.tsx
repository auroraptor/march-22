// src/components/LeadsTable.tsx

import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { Lead, LeadsTableProps } from '../types';

const LeadsTable: React.FC<LeadsTableProps> = ({ leads, pipelines }) => {
    const getStatusName = (pipelineId: number, statusId: number) => {
        const pipeline = pipelines.find((p) => p.id === pipelineId);
        const status = pipeline?._embedded.statuses.find((s) => s.id === statusId);
        return status?.name || '';
      };

  const columns: ColumnsType<Lead> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Статус',
      dataIndex: 'status_id',
      key: 'status_id',
      render: (statusId: number, lead: Lead) => getStatusName(lead.pipeline_id, statusId),
    },
    {
      title: 'Ответственный',
      dataIndex: 'responsible_user_id',
      key: 'responsible_user_id',
    },
    {
      title: 'Дата создания',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: string) => new Date(date).toLocaleString(),
    },
    {
      title: 'Бюджет',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  return <Table dataSource={leads} columns={columns} rowKey="id" />;
};

export default LeadsTable;
