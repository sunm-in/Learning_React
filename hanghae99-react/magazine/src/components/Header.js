import React from "react";
import { Grid, Text, Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  // console.log(is_session);

  // // is_login 쿠키를 확인해서 true, false 체크 (useEffect)
  // React.useEffect(() => {
  //     // 쿠키 가져오기           쿠키 이름
  //     let cookie = getCookie("user_id");
  //     // 확인
  //     console.log(cookie);
  //     // 쿠키가 있을 때
  //     if(cookie) {
  //         setIsLogin(true);
  //     } else {
  //         setIsLogin(false);
  //     }
  // })

  // if (is_login && is_session) {
  //   return (

  //   );
  // }

  if (is_login && is_session) {
    return (
      <React.Fragment>
        <Grid is_flex padding="6px 16px">
          <Grid>
            <Text size="24px" margin="0px" bold>
              Magazine
            </Text>
          </Grid>

          <Grid is_flex>
            <Button text="내정보"></Button>
            <Button
              text="알림"
              _onClick={() => {
                history.push("/noti");
              }}
            ></Button>
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logoutFB());
                window.alert("안녕히 가세요!");
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  // <Permit>
  //   <>
  //     <Grid is_flex padding="6px 16px">
  //       <Grid>
  //         <Text size="24px" margin="0px" bold>
  //           Magazine
  //         </Text>
  //       </Grid>

  //       <Grid is_flex>
  //         <Button text="내정보"></Button>
  //         <Button text="알림"></Button>
  //         <Button
  //           text="로그아웃"
  //           _onClick={() => {
  //             dispatch(userActions.logoutFB());
  //           }}
  //         ></Button>
  //       </Grid>
  //     </Grid>
  //   </>
  // </Permit>

  return (
    <React.Fragment>
      <Grid is_flex padding="6px 16px">
        <Grid>
          <Text size="24px" margin="0px" bold>
            Magazine
          </Text>
        </Grid>

        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
