import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const WelcomeBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  borderRadius: '16px',
  textAlign: 'center',
  position: 'relative',
  margin: '20px',
}));

const StartScreen = ({ onStart }) => {
  return (
    <WelcomeBox>
      <Typography variant="h4" gutterBottom>
        Welcome to the Quiz!
      </Typography>
      <Typography variant="body1" gutterBottom>
        In this quiz, you will be answering several questions. Take your time to read each question carefully and provide your best answer.
        You will receive feedback after each question. Click the button below to start the quiz. Good luck!
      </Typography>
      <Button variant="contained" color="primary" onClick={onStart}>
        Start Quiz
      </Button>
    </WelcomeBox>
  );
};

export default StartScreen;
