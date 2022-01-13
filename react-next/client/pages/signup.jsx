// library
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// head
import Head from 'next/head';

// hooks
import useInput from '../hooks/useInput';

// components
import AppLayout from '../components/AppLayout';

// antd
import { Form, Input, Checkbox, Button } from 'antd';

// redux
import { SIGN_UP_REQUEST } from '../redux/reducers/user';

const ErrorMessage = styled.div`
  color: red;
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | Sunmin</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor='user-email'>이메일</label>
          <br />
          <Input name='user-email' type='email' value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor='user-nick'>닉네임</label>
          <br />
          <Input name='user-nick' value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor='user-password'>비밀번호</label>
          <br />
          <Input name='user-password' type='password' value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor='user-password-check'>비밀번호 체크</label>
          <br />
          <Input
            name='user-password-check'
            type='password'
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
            약관에 동의해 주세요.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: '10px' }}>
          <Button type='primary' htmlType='submit' loading={signUpLoading}>
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default SignUp;
