import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import successSvg from '@/assets/success.svg';
import failureSvg from '@/assets/failure.svg';


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

const ResetButton = styled(Button)({
    display: "block",
    margin: "60px auto"
});

const Result = ({ result, tryAgainPressed }) => {
    const getSuccessMessage = () => {
        return `Passed!\n ${result.correctAnswers} / ${result.questionsLength} correct`;
    };

    const getFailMessage = () => {
        return `Fail!\n ${result.correctAnswers} / ${result.questionsLength} correct`;
    };

    return (
        <SvgContainer>
            {/* <ResultSVG
                src={result.pass ? successSvg : failureSvg}
                alt="logo"
            /> */}
            <ResultParagraph>
                {result.pass ? getSuccessMessage() : getFailMessage()}
            </ResultParagraph>

            <ResetButton
                variant="contained"
                onClick={tryAgainPressed}
                color="secondary"
            >
                Try Again
            </ResetButton>
        </SvgContainer>
    );
};

export default Result;