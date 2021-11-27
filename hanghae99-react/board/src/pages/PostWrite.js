import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addBoardFB } from "../redux/modules/post";

const PostWrite = ({ history }) => {
  const dispatch = useDispatch();

  const title_ref = React.useRef();
  const author_ref = React.useRef();
  const content_ref = React.useRef();

  return (
    <>
      <Container>
        <div>
          <input type="text" placeholder="제목을 입력하세요" ref={title_ref} />
          <input
            type="text"
            placeholder="글쓴이를 입력하세요"
            ref={author_ref}
          />
          <input
            ref={content_ref}
            type="text"
            placeholder="내용을 입력하세요"
            style={{ padding: "50px 10px" }}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              let input_text = {
                title: title_ref.current.value,
                author: author_ref.current.value,
                content: content_ref.current.value,
              };
              dispatch(addBoardFB(input_text));
              history.push("/");
              console.log(input_text);
            }}
            variant="contained"
            color="primary"
            style={{
              padding: "8px",
              margin: "10px",
              backgroundColor: "#1e90ff",
            }}
          >
            글쓰기
          </Button>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 500px;
  min-height: 300px;
  margin: auto;
  margin-top: 25vh;
  & input {
    width: 500px;
    padding: 10px;
    margin: 10px;
  }
`;

export default PostWrite;
