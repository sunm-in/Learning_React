// library
import React, { useEffect, memo } from 'react';

// bootstrap
import { Table } from 'react-bootstrap';

// redux
import { useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const alertClose = () => {
    dispatch({ type: 'alertClose' });
  };

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.reducer.map((p, i) => {
            return (
              <tr key={i}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.quan}</td>
                <td>
                  <button
                    style={{ marginRight: '3%' }}
                    onClick={() => {
                      dispatch({ type: 'INCREASE_QUAN', payload: p.id });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: 'DECREASE_QUAN', payload: p.id });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {state.reducer2 === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button className="alert-button" onClick={alertClose}>
            X
          </button>
        </div>
      ) : null}

      <Parent name="sm" age="10"></Parent>
    </div>
  );
};

function Parent(props) {
  return (
    <div>
      <Child1 name={props.name}></Child1>
      <Child2 age={props.age}></Child2>
    </div>
  );
}

function Child1() {
  useEffect(() => {
    console.log('렌더링완료 1');
  });
  return <div>1111</div>;
}
let Child2 = memo(function () {
  useEffect(() => {
    console.log('렌더링완료 2');
  });
  return <div>2222</div>;
});

// state를 props화 해주는 과정
// function product(state) {
//   console.log(state);
//   return {
//     state: state.reducer,
//     alertState: state.reducer2,
//   };
// }

// export default connect(product)(Cart);

export default Cart;
