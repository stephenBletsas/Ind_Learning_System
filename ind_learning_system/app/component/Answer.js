import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for styling


const AnswerBody = styled('div')(({ theme }) => ({
    // width: "80%",
    margin: "15px 5px 5px 10px",
    userSelect: "none"
}));

const AnswerTypography = styled('div')(({ theme, correct, incorrect }) => ({
    ...theme.typography.p,
    ...(correct && { color: theme.palette.success.light }),
    ...(incorrect && { color: theme.palette.error.light }),
    backgroundColor: theme.palette.background.paper,
    fontSize: "20px",
    display: "inline-block",
    cursor: "pointer"
}));

const FormRadio = ({ answerIndex, isSelected, onAnswerClick, disabled }) => {
    return (
        <Radio 
            id={answerIndex.toString()}
            color={"primary"}
            checked={isSelected}
            onClick={onAnswerClick}
            disabled={disabled}
        />
    )
}

const Answer = ({ answerIndex, isSelected, answer, onAnswerSelect, isSubmitted, isCorrect }) => {
  const onAnswerClick = (e) => {
    e.preventDefault();
    onAnswerSelect(answerIndex);
  };

  return (
    <AnswerBody>
        <FormControlLabel 
            control={
                <FormRadio  
                    answerIndex={answerIndex}
                    isSelected={isSelected}
                    onAnswerClick={onAnswerClick}
                    disabled={isSubmitted}
                />
            } 
            label={
                <AnswerTypography correct={isSelected && isSubmitted && isCorrect} incorrect={isSelected && isSubmitted && !isCorrect}>
                    <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                    >
                        {answer}
                    </ReactMarkdown>
                </AnswerTypography>
            } 
        />
    </AnswerBody>
  );
};

export default Answer;