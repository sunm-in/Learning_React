// library
import React from 'react';

// head
import Head from 'next/head';

// components
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: '이선민' }, { nickname: '선민' }, { nickname: '민' }];
  const followingList = [{ nickname: '이선민' }, { nickname: '선민' }, { nickname: '민' }];

  return (
    <>
      <Head>
        <title>내 프로필 | Sunmin</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header='팔로잉 목록' data={followingList} />
        <FollowList header='팔로워 목록' data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
