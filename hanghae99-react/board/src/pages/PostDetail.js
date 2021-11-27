import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const PostDetail = (props) => {
  const history = useHistory();
  // 스토어에서 상태값 가져오기
  const board_list = useSelector((state) => state.post.list);
  // url 파라미터에서 인덱스 가져오기
  let board_index = parseInt(props.match.params.index);
  // console.log(board_list[board_index].title)

  return (
    <>
      <DetailWrap>
        <PostTitle>
          <h3>{board_list[board_index].title}</h3>
        </PostTitle>
        <PostAuthor>
          <p>{board_list[board_index].author}</p>
        </PostAuthor>
        <Content>{board_list[board_index].content}</Content>
        <Button
          variant="contained"
          color="primary"
          style={{ padding: "8px", marginTop: "12px" }}
          onClick={() => {
            history.goBack();
          }}
        >
          돌아가기
        </Button>
      </DetailWrap>
    </>
  );
};

const DetailWrap = styled.div`
  max-width: 500px;
  min-height: 350px;
  height: 450px;
  padding: 20px;
  margin: 10vh auto 0px auto;
`;

const PostTitle = styled.div`
  & h3 {
    font-size: 24px;
    font-weight: 500;
  }
`;

const PostAuthor = styled.div`
  & p {
    font-size: 15px;
    font-weight: bold;
  }
`;

const Content = styled.div`
  background-color: whitesmoke;
  max-width: 500px;
  min-height: 350px;
  padding: 12px;
  border-radius: 10px;
`;

export default withRouter(PostDetail);
