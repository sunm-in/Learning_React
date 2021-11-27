import React from "react";

import { Grid, Image, Text, Button } from "../elements";
import { HeartButton } from "./index";
import { history } from "../redux/configureStore";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid width="auto" is_flex>
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                width="auto"
                padding="4px"
                margin="6px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
            {props.is_me && (
              <Button
                width="auto"
                margin="4px"
                padding="4px"
                _onClick={(e) => {
                  //  이벤트 캡쳐링과 버블링을 막아요!
                  // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
                  e.preventDefault();
                  e.stopPropagation();

                  // 게시글 삭제하기
                  // 여기에서는 window.confirm 등을 사용해서 진짜 지우냐고 한 번 더 물어봐주면 정말 좋겠죠!
                  // window.confirm("삭제 하시겠습니까?");
                  dispatch(postActions.deletePostFB(props.id));
                }}
              >
                삭제
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>

        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>

        <Grid is_flex padding="16px">
          <Text margin="0px" bold>
            좋아요 {props.like_cnt}개
          </Text>
          <HeartButton
            _onClick={(e) => {
              //  이벤트 캡쳐링과 버블링을 막아요!
              // 이벤트 캡쳐링, 버블링이 뭔지 검색해보기! :)
              e.preventDefault();
              e.stopPropagation();
              dispatch(postActions.toggleLikeFB(props.id));
            }}
            is_like={props.is_like}
          ></HeartButton>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

// 페이지를 그리는데 꼭 필요한 데이터를 defaultProps에 담아두면 데이터가 없어서 나는 오류를 방지할 수 있다.
Post.defaultProps = {
  user_info: {
    user_name: "sunm_n",
    user_profile:
      "https://1.bp.blogspot.com/-1g6Gf_NtiQw/V0ahj_nQgGI/AAAAAAAAPcs/T9wbtXSXaAwo2MccYaTv27QZqFgv4MRvwCLcB/s640/1.png",
  },
  image_url:
    "https://1.bp.blogspot.com/-1g6Gf_NtiQw/V0ahj_nQgGI/AAAAAAAAPcs/T9wbtXSXaAwo2MccYaTv27QZqFgv4MRvwCLcB/s640/1.png",
  contents: "😎",
  like_cnt: 0,
  insert_dt: "2021-03-09 10:00:00",
  is_me: false,
  is_like: false,
};

export default Post;
