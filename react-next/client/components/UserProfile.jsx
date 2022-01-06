// library
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// antd
import { Card, Avatar, Button } from 'antd';

// redux
import { logout } from '../redux/reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <Card
      actions={[
        <div key='twit'>
          게시글 수 <br />0
        </div>,
        <div key='followings'>
          팔로잉
          <br />0
        </div>,
        <div key='follwers'>
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>SM</Avatar>} title='SunMin' />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
