'use client';

import React, { useState, useEffect } from "react";
import { useRef } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { grey, lightGreen, blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

import get_questions from "./api/get_questions";
import submit_questions from "./api/submit_questions";
import Question from "./component/Question";
import Answer from "./component/Answer";
import Result from "./component/Result";
import FeedbackBox from "./component/Feedback";
import Header from "./component/Header";

const STARTING_TIME = 300000;

const theme = createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
            contrastText: "#fff"
        },
        secondary: {
            light: grey[200],
            main: grey[500],
            dark: grey[700],
            contrastText: "#fff"
        }
    }
});

const MainPaper = styled(Paper)(({ theme }) => ({
	userSelect: "none",
    overflowX: "hidden",
    paddingTop: theme.spacing(4),
    paddingBottom: "70px",
	paddingLeft: "24px",
	paddingRight: "24px",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "85%",
	display: "flex",
    flexDirection: "column"
}));

const ContentContainer = styled('div')({
    flexGrow: 1,
});

const NextButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(),
	borderRadius: "16px",
	fontSize: "18px",
    marginTop: "20px",
	padding: "14px 64px",
    position: "absolute",
    right: "30px",
	bottom: "30px"
}));

const SubmitButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(),
	borderRadius: "16px",
	fontSize: "18px",
    marginTop: "20px",
	padding: "14px 64px",
    position: "absolute",
    right: "30px",
	bottom: "30px"
}));

const ButtonsContainer = styled('div')({
	marginTop: 'auto', // Pushes the buttons container to the bottom
	display: 'flex',
	justifyContent: 'flex-end',
	gap: '10px' // Adjust the gap between the buttons as needed
  });
  

export default function Home() {
  	const [questions, setQuestions] = useState([]);
    const [result, setResult] = useState(null);
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME); // e.g., 5 minutes
	const [timerExpired, setTimerExpired] = useState(false);
	const timerRef = useRef(null);

	useEffect(() => {
		get_questions().then(value => {
			console.log(value);
		  setQuestions(value);
		});
	}, []);

	useEffect(() => {
		if (timeRemaining > 0) {
			console.log(timeRemaining)
			timerRef.current = setInterval(() => {
				setTimeRemaining(prev => prev - 1);
		  	}, 1000);

		  	return () => clearInterval(timerRef.current);
		} else {
		  	setTimerExpired(true);
		  	onSubmitClick();
		}
	}, [timeRemaining]);

	const onAnswerSelected = answerId => {
		setSelectedAnswer(answerId);
	};

	const onAnswerSubmit = () => {
		const correctAnswerIndex = questions[currentQuestion].correctAnswerIndex;
        const explanation = questions[currentQuestion].explanation;
        const isCorrect = selectedAnswer === correctAnswerIndex;

        setQuestionAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestion] = selectedAnswer;
            return newAnswers;
        });

        setFeedback(explanation);
        setIsSubmitted(true);
	}

	const onNextClick = e => {
		if (shouldShowNext()) {
			setCurrentQuestion(prev => prev + 1);
			setSelectedAnswer(null);
			setIsSubmitted(false);
			setFeedback(null);
		} else if (shouldShowSubmit()) {
			onSubmitClick();
			setSelectedAnswer(null);
			setIsSubmitted(false);
			setFeedback(null);
		}  
    };

	const onSubmitClick = async () => {
		// Clear the timer
		clearInterval(timerRef.current);

		const current_questions = questions;
		const current_questionAnswers = questionAnswers;

		setQuestions([]);
		setQuestionAnswers([]);
		setCurrentQuestion(0);

		// Perform the async operation
		submit_questions(current_questions, current_questionAnswers).then(value => {
			setResult(value);
		});
	};

	const onTryAgainPressed = async () => {
        // Reset state
        setQuestions([]);
		setResult(null);
        setQuestionAnswers([]);
        setCurrentQuestion(0);
		setSelectedAnswer(null);
		setIsSubmitted(false);
		setFeedback(null);

        get_questions().then(value => {
			setQuestions(value);
		});

		setTimeRemaining(STARTING_TIME);
    };

	const questionsLoaded = () => questions.length > 0;
    const getCurrentQuestion = () => questions[currentQuestion].question;
    const getCurrentAnswers = () => questions[currentQuestion].answers;
    const isAnswerSelected = answerIndex => selectedAnswer === answerIndex;
	const isAnswerCorrect = () => isSubmitted && selectedAnswer === questions[currentQuestion].correctAnswerIndex;
    const shouldShowSubmit = () =>
        currentQuestion === questions.length - 1 &&
		questionAnswers[questions.length - 1] !== undefined;
    const shouldShowNext = () =>
        currentQuestion !== questions.length - 1 &&
		questionAnswers[currentQuestion] !== undefined;

	return (
		<ThemeProvider theme={theme}>
			<MainPaper elevation={3} square={false}>
				<Typography variant="h4" gutterBottom marginBottom={"24px"}>
					Individual Learning System
				</Typography>
				<hr key={"horizontalLine"} width={"100%"} />
				<Header timeRemaining={timeRemaining} />
				{questionsLoaded() && result == null ? (
						<ContentContainer>
							<div key={getCurrentQuestion()}>
								<Question
                                    question={getCurrentQuestion()}
                                    questionIndex={currentQuestion + 1}
                                    questionsLength={questions.length}
                                />
							</div>

							<div style={{ display: 'flex', alignItems: 'flex-start' }}>
								<div style={{ width: "30%" }}>
									{getCurrentAnswers().map((currentAnswer, index) => (
										<Answer
											answerIndex={index}
											key={getCurrentQuestion() + index}
											answer={currentAnswer}
											isSelected={isAnswerSelected(index)}
											onAnswerSelect={onAnswerSelected}
											isSubmitted={isSubmitted}
      										isCorrect={index === questions[currentQuestion].correctAnswerIndex}
										/>
									))}
								</div>
								{isSubmitted && (
									<FeedbackBox feedback={feedback} isCorrect={isAnswerCorrect()}/>
								)}
							</div>

							<ButtonsContainer>
								{!isSubmitted && selectedAnswer !== null ? 
									(
										<SubmitButton
											variant="contained"
											onClick={onAnswerSubmit}
											color="primary"
										>
											Submit
										</SubmitButton>
									): null}
                                {isSubmitted && currentQuestion < questions.length ? 
									(
                                    	<NextButton
                                            variant="contained"
                                            onClick={onNextClick}
                                            color="primary"
                                        >
                                            {currentQuestion < questions.length - 1 ? "Next" : "Complete"}
                                        </NextButton>
                                    ): null}
							</ButtonsContainer>
						</ContentContainer>
					) : result !== null ? (
						<Result result={result} tryAgainPressed={onTryAgainPressed} />
					) : (
						<div>

						</div>
					)
				}
			</MainPaper>
		</ThemeProvider>
	);
}
