import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { firestore } from "./firebase";
import { loadDictFB } from "./redux/modules/dict";

const DictionaryList = (props) => {
    // const word_list = useSelector(state => state.dict.word);
    // const desc_list = useSelector(state => state.dict.desc);
    // const exam_list = useSelector(state => state.dict.exam);

    // console.log(firestore)
    const dispatch = useDispatch();
    const dict_list = useSelector(state => state.dict.list);

    useEffect(() => {
        dispatch(loadDictFB());
    }, [dispatch]);

    return (
        <DictWrap>
            <Title>MY DICTIONARY</Title>

            {dict_list.map((list, index) => {
                return (
                    <DictList key={index}>
                        <p>단어</p>
                        <h3>{list.word}</h3>

                        <p>뜻</p>
                        <h3>
                            {list.meaning}<br/>
                        </h3>

                        <p>예시</p>
                        <h3><span>{list.example}</span></h3>
                    </DictList>
                );
            })}

            <Button onClick={() => {
                props.history.push("/addDict");
            }}>
                +
            </Button>
        </DictWrap>
    );
}

const DictWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 350px;
    min-height: 10vh;
    background-color: #ffb142;
    padding: 30px;
    margin: 0 auto;
`;

const Title = styled.h1`
    color: #f7f1e3;
`;

const DictList = styled.div`
    background-color: #f7f1e3;
    border: 1px solid #ff793f;
    border-radius: 8px;
    margin: 7px 0;
    padding: 0 15px;
    & p{
        text-decoration: underline;
        margin-bottom: -14px;
        font-size: 12px;
        font-weight: bold;
    }
    & span{
        color: #34ace0;
    }
`;

const Button = styled.button`
    width: 70px;
    height: 70px;
    margin-left: 35vh;
    text-align: center;
    border-radius: 50%;
    color: white;
    background-color: #ff793f;
    border: 1px solid #ff793f;
    font-size: 3.5em;
    font-weight: 700;
`;

export default DictionaryList;