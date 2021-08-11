import React from 'react';
import { connect } from 'react-redux';

const ToDo = ({ text }) => {
  return (
    <li>
      {text} <button>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps);
}

export default connect(mapDispatchToProps)(ToDo);
