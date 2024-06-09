import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';


const AnswerBody = styled('div')(({ theme }) => ({
    width: "35%",
    margin: "15px 5px 5px 10px",
    userSelect: "none"
}));

const AnswerTypography = styled('div')(({ theme }) => ({
    ...theme.typography.p,
    backgroundColor: theme.palette.background.paper,
    fontSize: "20px",
    display: "inline-block",
    cursor: "pointer"
}));

const FormRadio = ({ answerIndex, isSelected, onAnswerClick }) => {
    return (
        <Radio 
            id={answerIndex.toString()}
            color={"primary"}
            checked={isSelected}
            onClick={onAnswerClick}
        />
    )
}

const Answer = ({ answerIndex, isSelected, answer, onAnswerSelect }) => {
  const onAnswerClick = (e) => {
    e.preventDefault();
    onAnswerSelect(answerIndex);
  };

  return (
    <AnswerBody>
        {/* <Radio
            id={answerIndex.toString()}
            color={"primary"}
            checked={isSelected}
            onClick={onAnswerClick}
            label={answer}
        /> */}
        <FormControlLabel 
            control={
                <FormRadio  
                    answerIndex={answerIndex}
                    isSelected={isSelected}
                    onAnswerClick={onAnswerClick}
                />
            } 
            label={
                <AnswerTypography>
                    {answer}
                </AnswerTypography>
            } 
        />
        {/* <AnswerTypography component="p" onClick={onAnswerClick}>
            {answer}
        </AnswerTypography> */}
    </AnswerBody>
  );
};

export default Answer;