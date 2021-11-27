import React from "react";
import { Grid, Input, Button } from "../elements";

const CommentWrite = () => {
    return(
        <>
            <Grid padding="16px" is_flex>
                <Input palceholder="댓글 내용을 작성해주세요." />
                <Button width="50px" margin="0px 4px">작성</Button>
            </Grid>
        </>
    )
}

export default CommentWrite;