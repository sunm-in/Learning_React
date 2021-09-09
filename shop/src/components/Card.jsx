// library
import React from 'react';

const Card = (props) => {
  return (
    <div className="col-md-4">
      <img alt="" src={props.place.image} width="100%" />
      <h4>{props.place.title}</h4>
      <p>
        {props.place.content} & {props.place.price}
      </p>
    </div>
  );
};

export default Card;
