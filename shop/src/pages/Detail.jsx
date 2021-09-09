/*  eslint-disable */
// library
import React, { useState } from 'react';

// component
import { CardDetail } from '../components';

// data
import Data from '../common/Data';

const Detail = () => {
  const [place, setPlace] = useState(Data);

  return (
    <>
      <CardDetail place={place} />
    </>
  );
};

export default Detail;
