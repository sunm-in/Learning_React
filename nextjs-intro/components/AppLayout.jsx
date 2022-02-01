import React from 'react';
import NavBar from './NavBar';

const AppLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default AppLayout;
