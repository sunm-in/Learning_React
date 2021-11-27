import React from "react";
import { Grid, Text, Button, Input } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const login = () => {

    console.log(id);

    if(id === "" || pw === "") {
      window.alert("모두 입력해주세요!");
      return;
    }

    if(!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }

    window.alert("로그인 성공");

    dispatch(userActions.loginFB(id, pw));
  };

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text bold size="32px">
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid padding="16px 0px 20px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            _onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </Grid>
        <Button
          text="로그인하기"
          _onClick={() => {
            console.log("로그인 성공");
            login();
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
