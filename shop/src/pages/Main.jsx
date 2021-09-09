// library
import React, { useState } from 'react';

// component
import { Card } from '../components';

// data
import Data from '../common/Data';

const Main = () => {
  const [place, setPlace] = useState(Data);

  return (
    <>
      <div className="container">
        <div className="row">
          {place.map((place, i) => {
            return <Card key={i} place={place} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
