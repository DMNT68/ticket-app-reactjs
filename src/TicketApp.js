import React, { useContext } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { UiContext } from './context/UiContext';

const { Sider, Content } = Layout;

export const TicketApp = () => {
  const navigate = useNavigate();
  const { ocultarMenu } = useContext(UiContext);

  return (
    <Layout>
      <Sider
        hidden={ocultarMenu}
        style={{
          //
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        collapsedWidth={0}
        breakpoint="md"
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Ingresar',
              onClick: () => navigate('/ingresar'),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Cola',
              onClick: () => navigate('/cola'),
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: `Crear Ticket`,
              onClick: () => navigate('/crear'),
            },
          ]}
        />
      </Sider>
      <Layout className={`site-layout ${ocultarMenu ? '' : 'content'}`}>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: 'white',
            overflow: 'initial',
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
