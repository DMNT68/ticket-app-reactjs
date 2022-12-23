import { useContext, useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Button } from 'antd';
import { SocketContext } from '../context/SocketContext';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography;

export const CrearTicket = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);

  const nuevoTicket = () => {
    console.log('nuevo ticket');
    socket.emit('solicitar-ticket', null, (ticket) => {
      setTicket(ticket);
    });
  };

  return (
    <div>
      <Row>
        <Col span={14} offset={4} align="center">
          <Title level={3}>Presione el botón para un nuevo ticket</Title>
          <Button
            //
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={nuevoTicket}
          >
            Nuevo ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={4} align="center">
            <Text level={2}>Su número:</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {ticket.numero}
            </Text>
          </Col>
        </Row>
      )}
    </div>
  );
};
