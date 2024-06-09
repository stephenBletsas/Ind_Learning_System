import React from "react";
import { styled } from '@mui/material/styles';

const DivIndex = styled('div')(({ theme }) => ({
    ...theme.typography.h6,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
}));

const QuestionBody = styled('div')(({ theme }) => ({
    ...theme.typography.body1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: "22px",
    marginBottom: "0px",
    overflowX: "auto",
    overflowY: "hidden",
    marginTop: "0px"
}));

const Question = ({ questionIndex, questionsLength, question }) => {
    return (
        <div>
            <DivIndex>
                {`Question ${questionIndex}/${questionsLength}`}{" "}
            </DivIndex>
            <DivIndex>
                Answer the question below
            </DivIndex>
            <QuestionBody>{question}</QuestionBody>
        </div>
    );
}

export default Question;