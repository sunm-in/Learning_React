import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  sun: {
    name: '이름1',
    age: 20,
  },
  min: {
    name: '이름2',
    age: 30,
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.age}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
