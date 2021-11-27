import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";

const Header = ({history}) => {
  return (
    <>
      <HeaderWrap>
        <h1>게시판 만들기</h1>
        <p>아주 간단한 게시판 만들기</p>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#1e90ff",
            padding: "18px",
            width: "85px",
            height: "50px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          onClick={() => {history.push("/write")}}
        >
          글쓰기
        </Button>
      </HeaderWrap>
    </>
  );
};

const HeaderWrap = styled.div`
  max-width: 900px;
  min-height: 260px;
  padding: 20px;
  background-color: #f1f2f6;
  & h1 {
      font-size: 56px;
      font-weight: 300;
      margin-top: 5vh;
      margin-bottom: 0px;
  }
  & p {
    margin: 10px 0px;
    font-size: 22px;
    font-weight: lighter;
  }
`;

export default withRouter(Header);
