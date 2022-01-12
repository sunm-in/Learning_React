// library
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// antd
import { Card, Avatar, Button } from 'antd';

// redux
import { logoutRequestAction } from '../redux/reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
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
      <Card.Meta avatar={<Avatar>{me?.nickname?.[0]}</Avatar>} title={me?.nickname} />
      <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
