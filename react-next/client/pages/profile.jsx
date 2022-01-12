// library
import React from 'react';

// head
import Head from 'next/head';

// components
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: '닉네임1' }, { nickname: '닉네임1-2' }, { nickname: '닉네임1-3' }];
  const followingList = [{ nickname: '닉네임2' }, { nickname: '닉네임2-2' }, { nickname: '닉네임2-3' }];

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
