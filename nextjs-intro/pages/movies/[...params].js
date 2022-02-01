import React from 'react';
import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

const Detail = ({ params }) => {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
};

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}

export default Detail;
