import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'Nice Designer') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <>
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Junaid',
    age: 27,
    address: 'Karachi Pakistan',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Sumair Ali',
    age: 19,
    address: 'Karachi',
    tags: ['Web Develper'],
  },
  {
    key: '3',
    name: 'Zain Ali',
    age: 29,
    address: 'Islamabad No. 1 Lake Park',
    tags: ['AppDev', 'Teacher'],
  },
  {
    key: '4',
    name: 'Samii',
    age: 29,
    address: 'Lahore No 2 garden',
    tags: ['Student'],
  },
];

const Acounts = () => (
  <Table
    style={{margin : "20px"}}
    columns={columns}
    dataSource={data}
    scroll={{ x: true }}
    responsive
  />
);

export default Acounts;
