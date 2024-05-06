import { Layout, Row, Col, Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Line, Bullet, Column, DualAxes } from '@ant-design/charts';
import LayoutRes from '../components/Layout';
import React, { useState } from 'react';
import Acounts from './Acounts';
const { Content } = Layout;

const Dashboard = () => {
  const [activeUsers, setActiveUsers] = useState(14.28);
  const [idlePercentage, setIdlePercentage] = useState(5.3);

  const lineConfig = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/line-connect-nulls.json',
      transform: [
        {
          type: 'map',
          callback: (d) => ({
            ...d,
            close: new Date(d.date).getUTCMonth() < 3 ? NaN : d.close,
          }),
        },
      ],
    },
    xField: (d) => new Date(d.date),
    yField: 'close',
    connectNulls: {
      connect: true,
      connectStroke: '#aaa',
    },
    width: 600,
    height: 400,
  };

  const columnConfig = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
    },
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
    group: true,
    style: {
      inset: 5,
    },
    width: 1000,
    height: 400,
  };

  const teamConfig = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/weather.json',
      transform: [{ type: 'filter', callback: (d) => d.location === 'Seattle' }],
    },
    children: [
      {
        type: 'area',
        xField: (d) => new Date(d.date).getUTCMonth(),
        yField: ['temp_max', 'temp_min'],
        transform: [{ type: 'groupX', y: 'mean', y1: 'mean' }],
        style: { fill: '#85c5A6', fillOpacity: 0.3 },
        axis: { y: { title: 'Avg. Temperature (°C)', titleFill: '#85C5A6' } },
        tooltip: {
          items: [
            { channel: 'y', valueFormatter: '.1f' },
            { channel: 'y1', valueFormatter: '.1f' },
          ],
        },
      },
      {
        type: 'line',
        xField: (d) => new Date(d.date).getMonth(),
        yField: 'precipitation',
        shapeField: 'smooth',
        transform: [{ type: 'groupX', y: 'mean' }],
        style: { stroke: 'steelblue' },
        scale: { y: { nice: false } },
        axis: {
          y: {
            position: 'right',
            title: 'Precipitation (inches)',
            titleFill: 'steelblue',
          },
        },
        tooltip: { items: [{ channel: 'y', valueFormatter: '.1f' }] },
      },
    ],
    width: 1000,
    height: 370,
  };

  const bulletData = [
    {
      title: '5🌟',
      ranges: 100,
      measures: 40,
      targets: 85,
    },
    {
      title: '4🌟',
      ranges: 100,
      measures: 80,
      targets: 40,
    },
    {
      title: '3🌟',
      ranges: 100,
      measures: 20,
      targets: 22,
    },
    {
      title: '0-2🌟',
      ranges: 100,
      measures: 30,
      targets: 10,
    },
  ];

  const bulletColor = {
    targets: 'red',
  };

  const bulletConfig = {
    data: bulletData,
    color: bulletColor,
  };

  return (
    <LayoutRes> 
      <Content style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto', margin:"25px" }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Card bordered={false}>
              <Statistic
                title="Active Users"
                value={activeUsers}
                precision={3}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={idlePercentage}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <h2>Recent Workflow</h2>
            <Line {...lineConfig} />
          </Col>
          <Col xs={24} sm={12}>
            <h2>Recent Marketing</h2>
            <Bullet {...bulletConfig} />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12}>
            <h2>Users Last Month</h2>
            <Column {...columnConfig} />
          </Col>
          <Col xs={24} sm={24} md={12}>
            <DualAxes {...teamConfig} />
          </Col>
        </Row>
        
      </Content>
      <Acounts />
    </LayoutRes>
  );
};

export default Dashboard;
