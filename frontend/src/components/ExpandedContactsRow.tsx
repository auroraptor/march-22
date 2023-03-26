// src/components/ExpandedContactsRow.tsx

import React from "react";
import { Avatar, Button } from "antd";
import { UserOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { Contact } from "../types";

interface ExpandedContactsRowProps {
  contacts: Contact[];
}

const ExpandedContactsRow: React.FC<ExpandedContactsRowProps> = ({ contacts }) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      {contacts.map((contact) => (
        <li key={contact.id} style={{ marginBottom: "1rem" }}>
          <Avatar
            icon={<UserOutlined />}
            src={contact.avatar}
            style={{ marginRight: "0.5rem" }}
          />
          {contact.name}
          {(
            <Button
              icon={<PhoneOutlined />}
              type="link"
              href={`tel:${contact.phone}`}
              style={{ marginLeft: "0.5rem" }}
            >
              {contact.phone}
            </Button>
          )}
          {(
            <Button
              icon={<MailOutlined />}
              type="link"
              href={`mailto:${contact.email}`}
              style={{ marginLeft: "0.5rem" }}
            >
              {contact.email}
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ExpandedContactsRow;
