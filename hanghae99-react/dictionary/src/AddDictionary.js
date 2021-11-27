import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDictFB, createDict } from "./redux/modules/dict";

const AddDictionary = (props) => {
    const dispatch = useDispatch();
    
    const word_ref = React.useRef();
    const desc_ref = React.useRef();
    const exam_ref = React.useRef();

    return (
        <AddWrap>
            <Title>단어 추가하기</Title>

            <div>
                <InputBox>
                    <p>단어</p>
                    <input type="text" placeholder="단어를 입력해주세요" ref={word_ref} />
                </InputBox>

                <InputBox>
                    <p>설명</p>
                    <input type="text" placeholder="설명을 입력해주세요" ref={desc_ref} />
                </InputBox>

                <InputBox>
                    <p>예시</p>
                    <input type="text" placeholder="예시를 입력해주세요" ref={exam_ref} />
                </InputBox>
            </div>

            <AddButton>
                <button onClick={() => {
                    let input_text = {
                        word: word_ref.current.value,
                        meaning: desc_ref.current.value,
                        example: exam_ref.current.value
                    }
                    dispatch(addDictFB(input_text))
                    props.history.push("/");
                    console.log(input_text)
                }}>추가하기</button>
            </AddButton>
        </AddWrap>
    );
}

const AddWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    min-height: 80vh;
    background-color: #ffb142;
    padding: 16px;
    margin: 0 auto;
`;

const Title = styled.h1`
    color: #f7f1e3;
`;

const InputBox = styled.div`
    background-color: white;
    padding: 5px 10px;
    margin-bottom: 12px;
    border: 1px solid #ff793f;
    border-radius: 8px;
    & input{
        display: block;
        margin: 8px auto;
        width: 300px;
        padding: 10px 5px;
        border: 1px solid #ff793f;
        border-radius: 5px;
    }
    & p{
        font-size: 12px;
        font-weight: bold;
        text-decoration: underline;
        // padding: 0 10px;
        margin: 5px 10px;
    }
`;

const AddButton = styled.div`
    & button{
        width: 100%;
        height: 7vh;
        margin-top: 20px;
        color: #f7f1e3;
        background-color: #ff793f;
        border: 1px solid #ff793f;
        font-size: 20px;
        font-weight: bold;
    }
`;

export default AddDictionary;