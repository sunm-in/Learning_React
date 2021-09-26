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

// redux
import { connect } from 'react-redux';

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

  const [stock, setStock] = useState([10, 11, 12]);

  const [tab, setTab] = useState(0); // 지금 누른 번호
  const [aniSwitch, setAniSwitch] = useState(false);

  useEffect(() => {
    let arr = localStorage.getItem('watched');
    if (arr === null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }

    arr.push(id);
    arr = new Set(arr);
    arr = [...arr];

    localStorage.setItem('watched', JSON.stringify(arr));
  }, []);

  // const [alert, setAlert] = useState(true);
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  // const onChange = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <div className="container">
      {/* <Box>
        <Title className="red" color="blue">
          Detail
        </Title>
      </Box> */}

      {/* <input onChange={onChange} />
      {text}
      {alert === true ? (
        <div className="my-alert2">
          <p>현재 출입이 불가합니다.</p>
        </div>
      ) : null} */}

      <div className="row" style={{ marginTop: '6%' }}>
        <div className="col-md-6">
          <img src={_place.image} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{_place.title}</h4>
          <p>{_place.content}</p>
          <p>{_place.price}</p>
          <Info stock={stock}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              setStock([9, 10, 11]);
              props.dispatch({
                type: 'ADD_PRODUCT',
                payload: { id: _place.id, name: _place.title, quan: 1 },
              });
              history.push('/cart');
            }}
          >
            주문하기
          </button>
          &nbsp;
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

      <CSSTransition in={false} classNames="wow" timeout={500}>
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

// state를 props화 해주는 과정
function product(state) {
  console.log(state);
  return {
    state: state.reducer,
    alertState: state.reducer2,
  };
}

export default connect(product)(CardDetail);

// export default CardDetail;
