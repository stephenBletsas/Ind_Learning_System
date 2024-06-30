import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const SvgContainer = styled('div')({
    width: "90%",
    height: "200px",
    margin: "0 auto",
    border: "1px",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    top: "50%",
    left: "50%",
    userSelect: "none"
});

const ResultSVG = styled('img')({
    height: "100%",
    width: "100%",
    margin: "0 auto"
});

const ResultParagraph = styled('pre')({
    textAlign: "center"
});

const Typo = styled('div')(({ theme }) => ({
    ...theme.typography.h4,
    textAlign: "center",
    marginBottom: "24px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.secondary.dark
}));

const Result = ({ result }) => {
    const getSuccessMessage = () => {
        return `Passed!\n ${result.correctAnswers} / ${result.questionsLength} correct`;
    };

    const getFailMessage = () => {
        return `Fail!\n ${result.correctAnswers} / ${result.questionsLength} correct`;
    };

    return (
        <SvgContainer>
            <Typo>
                Thank you for participating in the experiment!
            </Typo>
            <ResultParagraph>
                {result.pass ? getSuccessMessage() : getFailMessage()}
            </ResultParagraph>
        </SvgContainer>
    );
};

export default Result;