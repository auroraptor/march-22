import React from 'react';
import type { FC } from 'react';
import { Table, Input } from 'antd';
import 'antd/dist/reset.css';
import type { ColumnsType } from 'antd/es/table';
import { fetchData } from './utils/Api';
import './App.css';

const {Search} = Input;
const onSearch = (value: string) => console.log(value);

interface DataType {
  key: React.Key;
  name: string;
  status: string;
  manager: string;
  date: string;
  price: number;
}

const columns: ColumnsType<DataType> = [
  { title: 'Название', dataIndex: 'name', key: 'name' },
  { title: 'Статус', dataIndex: 'status', key: 'age' },
  { title: 'Ответственный', dataIndex: 'manager', key: 'manager' },
  { title: 'Дата создания', dataIndex: 'date', key: 'date' },
  { title: 'Бюджет', dataIndex: 'price', key: 'price' },
];

const field = fetchData('http://localhost:4040');
console.log(field);

const data: DataType[] = [
  {
    key: 1,
    name: 'John Brown',
    status: '?',
    manager: '@',
    date: '1',
    price: 1,
  },
];

const App: FC = () => (
  <div className="App">

  <Search placeholder="input search text" onSearch={onSearch} size="middle" enterButton />
  <Table
    columns={columns}
    // expandable={{
    //   expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
    //   rowExpandable: (record) => record.name !== 'Not Expandable',
    // }}
    dataSource={data}
  />
    </div>

);

export default App;
