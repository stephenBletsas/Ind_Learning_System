import React from "react";
import { styled } from '@mui/material/styles';

const DivIndex = styled('div')(({ theme }) => ({
    ...theme.typography.h5,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
    paddingTop: "12px"
}));

const QuestionBody = styled('div')(({ theme }) => ({
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: "22px",
    marginBottom: "50px",
    overflowX: "auto",
    overflowY: "hidden",
    marginTop: "0px"
}));

const QuestionContainer = styled('div')(({ theme }) => ({
    // marginTop: "24px"
}));

const Question = ({ questionIndex, questionsLength, question }) => {
    return (
        <QuestionContainer>
            <DivIndex>
                {`Question ${questionIndex}/${questionsLength}`}{" "}
            </DivIndex>
            <QuestionBody>{question}</QuestionBody>
        </QuestionContainer>
    );
}

export default Question;