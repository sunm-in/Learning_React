// library
import React from 'react';
import { useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

// link
import Link from 'next/link';

// components
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

// antd
import { Menu, Input, Row, Col } from 'antd';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left:  0 !important;
  }

  .ant-col:first-child {
    padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Global />
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'>
            <a>메인페이지</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href='https://github.com/sunm-in' target='_blank' rel='noreferrer noopener'>
            Made by Sunmin
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
