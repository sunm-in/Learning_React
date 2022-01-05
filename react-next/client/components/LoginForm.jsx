// library
import React, { useCallback, useState } from 'react';

// link
import Link from 'next/link';

// antd
import { Button, Form, Input } from 'antd';

// style
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  // {} === {}는 false, 인라인 스타일이 적용된 컴포넌트 / 일반태그가 다르다고 판단하여 돔을 새로 그리게 되어 불필요한 리렌더링이 발생
  // 해결 -> 변수로 설정해 사용 or styled-components 사용
  // const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type='primary' htmlType='submit'>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
