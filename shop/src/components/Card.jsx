// library
import React from 'react';
import { useHistory } from 'react-router';

const Card = (props) => {
  const history = useHistory();

  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push('/detail/' + props.place.id);
      }}
    >
      <img alt="" src={props.place.image} width="100%" />
      <h4>{props.place.title}</h4>
      <p>
        {props.place.content} & {props.place.price}
      </p>
    </div>
  );
};

export default Card;
