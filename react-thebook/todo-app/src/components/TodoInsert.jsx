// library
import React, { useState, useCallback } from 'react';

// icons
import { MdAdd } from 'react-icons/md';

// style
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(''); // value 상태를 정의하기

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onInsert 함수에 현재 useState를 통해 관리하고 있는 value 값을 파라미터로 넣어서 호출하기
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킨다. -> 이를 방지하기 위해 preventDefault() 함수 호출
      e.preventDefault();
    },
    [onInsert, value],
  );

  // onSubmit 대신에 버튼의 onClick 이벤트로 처리하기
  const onClick = useCallback(() => {
    onInsert(value);
    setValue(''); // value 값 초기화
  }, [onInsert, value]);

  // onSubmit, onClick 차이
  // -> onSubmit 이벤트의 경우 인풋에서 'Enter'를 눌렀을 때도 발생한다.
  // -> 반면 버튼에서 onClick만 사용했다면 인풋에서 onKeyPress 이벤트를 통해 'Enter'를 감시하는 로직을 따록 작성해야 한다.

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
