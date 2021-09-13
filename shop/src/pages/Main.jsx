// library
import React, { useState } from 'react';
import styled from 'styled-components';

// component
import { Card } from '../components';

// data
import Data from '../common/Data';

// axios
import axios from 'axios';

const Main = () => {
  const [place, setPlace] = useState(Data);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          {place.map((place, i) => {
            return <Card key={i} place={place} i={i} />;
          })}
        </div>

        {loading === true ? (
          <LoadingBoxStyle>
            <p>로딩중입니다...</p>
          </LoadingBoxStyle>
        ) : null}

        <button
          className="btn btn-primary"
          onClick={() => {
            setLoading(true);

            // axios.post('서버 URL', { id: 'react', pw: 1234 });

            axios
              .get('https://codingapple1.github.io/shop/data2.json')
              .then((res) => {
                setLoading(false);
                console.log(res.data);
                setPlace([...place, ...res.data]);
              })
              .catch(() => {
                console.error('GET 요청 실패');
              });
          }}
        >
          더보기
        </button>
      </div>
    </>
  );
};

const LoadingBoxStyle = styled.div`
  background: whitesmoke;
  padding: 16px;
  max-width: 500px;
  width: 100%;
  margin: 2% auto;

  & p {
    margin-bottom: 0;
  }
`;

export default Main;
