import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';
import { getUsuarioStorage } from '../helpers/getUsuarios';
import { useHideMenu } from '../hooks/useHideMenu';
const { Title, Text } = Typography;

export const Escritorio = () => {
  useHideMenu(false);
  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);

  const [usuario] = useState(getUsuarioStorage());

  const salir = () => {
    localStorage.removeItem('agente');
    localStorage.removeItem('escritorio');
    navigate('/ingresar', { replace: true });
  };

  const siguienteTicket = () => {
    socket.emit('siguiente-ticket-trabajar', usuario, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!usuario.agente || !usuario.escritorio) return <Navigate to="/ingresar" />;

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success">{usuario.escritorio}</Text>
        </Col>
        <Col span={4}>
          <Button type="primary" danger onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text>Está atendiendo el ticket número: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.numero}
            </Text>
          </Col>
        </Row>
      )}

      <Row>
        <Col offset={18} span={6}>
          <Button onClick={siguienteTicket} type="primary">
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
