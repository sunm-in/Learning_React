/* eslint-disable */
// library
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

// bootstrap
import { Nav } from 'react-bootstrap';

// component
import { Info } from './index';

// style
import './CardDetail.scss';

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h4`
  font-size: 25px;
  color: ${(props) => props.color};
`;

const CardDetail = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const _place = props.place.find((x) => x.id === parseInt(id));
  const [alert, setAlert] = useState(true);
  const [text, setText] = useState('');
  const [stock, setStock] = useState([10, 11, 12]);

  const [tab, setTab] = useState(0); // 지금 누른 번호
  const [aniSwitch, setAniSwitch] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <Box>
        <Title className="red" color="blue">
          Detail
        </Title>
      </Box>

      <input onChange={onChange} />
      {text}
      {alert === true ? (
        <div className="my-alert2">
          <p>현재 출입이 불가합니다.</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img src={_place.image} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{_place.title}</h4>
          <p>{_place.content}</p>
          <p>{_place.price}</p>

          <Info stock={stock}></Info>

          <button
            onClick={() => {
              setStock([9, 10, 11]);
            }}
            style={{ margin: '0 2%' }}
            className="btn btn-danger"
          >
            주문하기
          </button>
          <button
            onClick={() => {
              history.goBack();
            }}
            className="btn btn-danger"
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav
        style={{ marginBottom: '10%' }}
        className="mt-5"
        variant="tabs"
        defaultActiveKey="link-0"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setAniSwitch(false);
              setTab(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setAniSwitch(false);
              setTab(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={aniSwitch} classNames="wow" timeout={500}>
        <TabContent tab={tab} setAniSwitch={setAniSwitch} />
      </CSSTransition>
    </div>
  );
};

function TabContent(props) {
  useEffect(() => {
    props.setAniSwitch(true);
  });

  if (props.tab === 0) {
    return <div>0번째 내용</div>;
  } else if (props.tab === 1) {
    return <div>1번째 내용</div>;
  } else if (props.tab === 2) {
    <div>2번째 내용</div>;
  }
}

export default CardDetail;
