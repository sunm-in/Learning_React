// library
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
  return (
    <div>
      {postData
        .toString()
        .split(/(#[^\s#]+)/g)
        .map((v) => {
          if (v.match(/(#[^\s#]+)/)) {
            return (
              <Link href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }} key={v}>
                <a>{v}</a>
              </Link>
            );
          }
          return v;
        })}
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
