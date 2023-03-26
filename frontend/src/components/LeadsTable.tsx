import React, { useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { Lead, LeadsTableProps, Contact } from "../types";
import { getContactsByLeadId } from "../api/api";
import ExpandedContactsRow from "./ExpandedContactsRow";

const LeadsTable: React.FC<LeadsTableProps> = ({ leads, pipelines, users }) => {
  const [contactsData, setContactsData] = useState<Map<number, Contact[]>>(new Map());

  const getStatusName = (pipelineId: number, statusId: number) => {
    const pipeline = pipelines.find((p) => p.id === pipelineId);
    const status = pipeline?._embedded.statuses.find((s) => s.id === statusId);
    return status?.name || "";
  };

  const getResponsibleUser = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Не назначен";
  };

  const getContacts = async (leadId: number) => {
    if (!contactsData.has(leadId)) {
      const contacts = await getContactsByLeadId(leadId);
      setContactsData((prevData) => new Map(prevData).set(leadId, contacts));
    }
  };

    const columns: ColumnsType<Lead> = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Название",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Статус",
        dataIndex: "status_id",
        key: "status_id",
        render: (statusId: number, lead: Lead) =>
          getStatusName(lead.pipeline_id, statusId),
      },
      {
        title: "Ответственный",
        dataIndex: "responsible_user_id",
        key: "responsible_user_id",
        render: (responsible_user_id: number) => (
          <span>{getResponsibleUser(responsible_user_id)}</span>
        ),
      },
      {
        title: "Дата создания",
        dataIndex: "created_at",
        key: "created_at",
        render: (date: string) => new Date(date).toLocaleString(),
      },
      {
        title: "Бюджет",
        dataIndex: "price",
        key: "price",
      },
    ];

    return (
      <Table
        dataSource={leads}
        columns={columns}
        rowKey="id"
        expandable={{
          expandedRowRender: (record) => {
            const contacts = contactsData.get(record.id) || [];
            return <ExpandedContactsRow contacts={contacts} />;
          },
          onExpand: async (expanded, record) => {
            if (expanded) {
              const contacts = contactsData.get(record.id);
              if (!contacts) {
                await getContacts(record.id);
              }
            }
          },
        }}
      />
    );
};

export default LeadsTable;
