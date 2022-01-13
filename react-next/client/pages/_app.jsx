// library
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// antd/css
import 'antd/dist/antd.css';

// store
import wrapper from '../redux/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Sunmin</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
