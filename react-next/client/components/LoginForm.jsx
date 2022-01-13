// library
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// custom hook
import useInput from '../hooks/useInput';

// link
import Link from 'next/link';

// antd
import { Button, Form, Input } from 'antd';

// redux
import { loginRequestAction } from '../redux/reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  // {} === {}는 false, 인라인 스타일이 적용된 컴포넌트 / 일반태그가 다르다고 판단하여 돔을 새로 그리게 되어 불필요한 리렌더링이 발생
  // 해결 -> 변수로 설정해 사용 or styled-components 사용
  // const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-email'>이메일</label>
        <br />
        <Input name='user-email' type='email' value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input name='user-password' type='password' value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type='primary' htmlType='submit' loading={logInLoading}>
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
