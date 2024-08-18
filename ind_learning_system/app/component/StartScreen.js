import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UNSWImage from '../../assets/unsw.png';

const WelcomeBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  borderRadius: '16px',
  textAlign: 'center',
  position: 'relative',
  margin: '20px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  height: '65vh'
}));

const WelcomeButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(),
	borderRadius: "16px",
    fontSize: "16px",
    marginTop: "24px",
	padding: "14px",
}));

const StartScreen = ({ onStart }) => {
    return (
        <WelcomeBox elevation={0} >
            <WelcomeBox elevation={0} style={{ justifyContent: 'space-evenly' }}>
                <Box 
                    component="img" 
                    src={UNSWImage.src} // Update the path to your image
                    alt="UNSW Image" 
                    sx={{ 
                        width: '200px', // Adjust the size of the image as needed
                        height: 'auto',
                        marginBottom: 3
                    }}
                />
                <Typography variant="h4" gutterBottom>
                    Welcome to the Individual Learning System!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    The purpose of this study is to evaluate whether a user-driven chatbot learning system can improve high-school students' academic <strong>performance</strong> and <strong>motivation</strong> compared to traditional learning methods, particularly in mathematics.
                </Typography>
                {/* <Typography variant="body1" gutterBottom>
                    In this quiz, you will be answering several questions. Take your time to read each question carefully and provide your best answer.
                    You will receive feedback after each question. Click the button below to start the quiz. Good luck!
                </Typography> */}
                <WelcomeButton variant="contained" color="primary" onClick={onStart}>
                    Start Quiz
                </WelcomeButton>
            </WelcomeBox>
        </WelcomeBox>
    );
};

export default StartScreen;
