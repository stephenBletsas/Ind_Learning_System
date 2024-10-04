import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UNSWImage from '../../assets/unsw.png';
import DemoImage from '../../assets/demo.jpeg';
import Image from 'next/image';

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
	padding: "14px",
}));

const StartScreen = ({ onStart }) => {
    const [isDemo, setIsDemo] = useState(false); // Track if the demo has started

    const handleDemo = () => {
		setIsDemo(true); // Set the demo as started
	};

    return (
        <WelcomeBox elevation={0} >
            <WelcomeBox elevation={0} style={{ justifyContent: 'space-evenly' }}>
                {!isDemo ? 
                <>
                    <Box 
                        component="img" 
                        src={UNSWImage.src}
                        alt="UNSW Image" 
                        sx={{ 
                            width: '200px',
                            height: 'auto',
                            marginBottom: 3
                        }}
                    />
                    <Typography variant="h4" gutterBottom>
                        Welcome to the Individual Learning System!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        The purpose of this study is to evaluate whether a user-driven chatbot learning system can improve high-school students&apos; academic <strong>performance</strong> and <strong>motivation</strong> compared to traditional learning methods, particularly in mathematics.
                    </Typography>
                    <WelcomeButton variant="contained" color="primary" onClick={handleDemo}>
                        Start Demo
                    </WelcomeButton>
                </> :
                <>
                    <Typography variant="h4" gutterBottom>
                        Let&apos;s beign with a quick demo
                    </Typography>
                    <Image 
                        src={DemoImage.src}  // Image tag needed for pre loading image
                        alt="Demo Image" 
                        width={800}
                        height={360}
                        loading="eager"
                        priority
                    />
                    <Typography variant="body1" gutterBottom>
                        In this learning system, you&apos;ll be answering math questions designed to help improve your understanding. 
                        Take your time to carefully read each question and select the best answer. 
                        After each question, you&apos;ll receive feedback to guide your learning. Click the button below to begin. Good luck!
                    </Typography>
                    <WelcomeButton variant="contained" color="primary" onClick={onStart}>
                        Start Quiz
                    </WelcomeButton>
                </> 
            }
                
            </WelcomeBox>
        </WelcomeBox>
    );
};

export default StartScreen;
