/* eslint-disable */
// library
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

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
    </div>
  );
};

export default CardDetail;
