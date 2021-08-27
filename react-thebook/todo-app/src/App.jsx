// library
import React, { useState, useRef, useCallback } from 'react';

// components
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // useState를 사용해서 todos라는 상태를 정의하고, todos를 TodoList의 props로 전달하기
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'React',
      checked: true,
    },
    {
      id: 2,
      text: 'React-2',
      checked: true,
    },
    {
      id: 3,
      text: 'React-3',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id -> ref를 사용해서 변수에 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = { id: nextId.current, text, checked: false };
      setTodos(todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [todos],
  );

  // 삭제
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // 수정
  // 불변성을 유지하면서 특정 배열 원소를 업데이트해야 할 때 이렇게 map을 사용하면 짧은 코드로 쉽게 작성할 수 있다
  // map 함수는 배열을 전체적으로 새로운 형태로 변환하여 새로운 배열을 생성해야 할 때 사용한다
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
