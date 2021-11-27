import React, { useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { loadBoardFB } from "../redux/modules/post";
import Header from "./Header";
// redux hook
import { useDispatch, useSelector } from "react-redux";

const PostList = ({ history }) => {
  // 게시판 모록을 리덕스 훅으로 가져오기
  const dispatch = useDispatch();
  const board_list = useSelector((state) => state.post.list);

  useEffect(() => {
    dispatch(loadBoardFB());
  }, [dispatch]);

  // console.log(board_list);

  return (
    <>
      <Header></Header>
      <BoardList>
        <thead>
          <BoardItem>
            <th style={{ borderBottom: "2px solid lightgray" }}>글번호</th>
            <th style={{ borderBottom: "2px solid lightgray" }}>글쓴이</th>
            <th style={{ borderBottom: "2px solid lightgray" }}>글제목</th>
          </BoardItem>
          {board_list.map((list, idx) => {
            return (
              <BoardItem
                key={idx}
                onClick={() => {
                  history.push("/detail/" + idx);
                }}
              >
                <th>{idx + 1}</th>
                <td>{list.author}</td>
                <td>{list.title}</td>
              </BoardItem>
            );
          })}

          {/* <BoardItem>
            <th>1</th>
            <td>쓴이쓴이쓴이2</td>
            <td>제목제목제목2</td>
          </BoardItem> */}
        </thead>
      </BoardList>
    </>
  );
};

const BoardList = styled.table`
  width: 900px;
  height: 100%;
  margin-top: 30px;
  border-top: 1px solid lightgray;
`;

const BoardItem = styled.tr`
  :hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
  & th {
    border-bottom: 1px solid lightgray;
    padding: 10px 0px;
  }
  & td {
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid lightgray;
  }
`;

export default withRouter(PostList);
