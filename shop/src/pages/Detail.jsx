/*  eslint-disable */
// library
import React, { useState } from 'react';

// component
import { CardDetail } from '../components';

// data
import Data from '../common/Data';

// Lifecycle Hook
// class Detail2 extends React.Component {
//   componentDidMount() {
//     // Detail2 컴포넌트가 Mount 되었을 때 실행할 코드 (등장)
//   }

//   componentWillUnmount() {
//     // Detail2 컴포넌트가 Unmount 되기 직전에 실행할 코드
//   }
// }

const Detail = () => {
  const [place, setPlace] = useState(Data);

  return (
    <>
      <CardDetail place={place} />
    </>
  );
};

export default Detail;
