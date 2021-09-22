// library
import React from 'react';

// bootstrap
import { Table } from 'react-bootstrap';

// redux
import { connect, useSelector, useDispatch } from 'react-redux';

const Cart = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.reducer);

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

      {props.alertState === true ? (
        <div className="my-alert2">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: 'alertClose' });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

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
