import React from "react";
import { Grid, Text, Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const Signup = (props) => {
    const dispatch = useDispatch();

    const [id, setId] = React.useState("");
    const [pw, setPw] = React.useState("");
    const [pw_check, setPwCheck] = React.useState("");
    const [user_name, setUserName] = React.useState("");

    const signup = () => {
        
        if(id === '' || pw === '' || user_name === '') {
            window.alert("빈칸을 모두 입력해주세요.");
            return;
        }

        if(!emailCheck(id)) {
            window.alert("이메일 형식이 맞지 않습니다.");
            return;
        }

        if(pw !== pw_check) {
            window.alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        window.alert("회원가입 완료");

        dispatch(userActions.signupFB(id, pw, user_name));
    }
    
    return (
        <>
            <Grid padding="16px">
                <Text size="32px" bold>회원가입</Text>

                <Grid padding="12px 0px">
                    <Input type="email" label="아이디" placeholder= "아이디를 입력해주세요" _onChange={(e) => {setId(e.target.value);}} />
                </Grid>

                <Grid padding="12px 0px">
                    <Input label="닉네임" placeholder= "닉네임을 입력해주세요" _onChange={(e) => {setUserName(e.target.value);}} />
                </Grid>

                <Grid padding="12px 0px">
                    <Input type="password" label="비밀번호" placeholder= "비밀번호를 입력해주세요" _onChange={(e) => {setPw(e.target.value);}} />
                </Grid>

                <Grid padding="12px 0px 20px 0px">
                    <Input type="password" label="비밀번호 확인" placeholder= "비밀번호를 다시 입력해주세요" _onChange={(e) => {setPwCheck(e.target.value);}} />
                </Grid>

                <Button text="회원가입하기" _onClick={signup} ></Button>
            </Grid>
        </>
    )
}

Signup.defaultProps = {

}

export default Signup;