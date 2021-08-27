화살표 함수는 값을 연산하여 바로 반환해야 할 때 사용하면 가독성을 높일 수 있다.

```jsx
function twice(value) {
  return value \* 2;
}

const triple = (value) => value \* 3;
// 이렇게 따로 { }를 열어 주지 않으면 연산한 값을 그대로 반환한다는 의미
```

<br>

### 🔍 props

- props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소입니다. <br>
  props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(현 상황에서는 App 컴포넌트가 부모 컴포넌트입니다)에서 설정할 수 있습니다.

- 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여 주는 props -> children

<br>

### 🔍 propTypes

```jsx
import PropTypes from 'prop-types';

// . . . .

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
```

<br>

### 🔍 state

- 리액트에서 state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
- props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있다.
- props를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 한다.
