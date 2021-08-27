// library
import React from 'react';

// style
import './TodoList.scss';

// components
import TodoListItem from './TodoListItem';

// props로 받아 온 todos 배열을 배열 내장 함수 map을 통해 TodoListItem으로 이루어진 배열로 변환하여 렌더링하기
// map을 사용하여 컴포넌트로 변환할 때는 key props를 전달해 줘야 한다.
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
