/* eslint-disable */
// library
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const CardDetail = (props) => {
  const history = useHistory();
  const { id } = useParams();
  const _place = props.place.find((x) => x.id === parseInt(id));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={_place.image} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{_place.title}</h4>
          <p>{_place.content}</p>
          <p>{_place.price}</p>
          <button style={{ margin: '0 2%' }} className="btn btn-danger">
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
