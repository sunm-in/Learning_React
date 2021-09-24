/*  eslint-disable */
// library
import React, { useState, lazy, Suspense } from 'react';

// component
let CardDetail = lazy(() => import('../components/CardDetail.jsx'));

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
      <Suspense fallback={<div>로딩중!!!!!</div>}>
        <CardDetail place={place} />
      </Suspense>
    </>
  );
};

export default Detail;
