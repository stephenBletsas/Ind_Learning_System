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

import { Message, useAssistant } from 'ai/react';

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
  	const [questions, setQuestions] = useState([]);	// Question objects
    const [result, setResult] = useState(null);	// Displays the final "results" page
    const [questionAnswers, setQuestionAnswers] = useState([]);	// Stored set of user's answers to questions
    const [currentQuestion, setCurrentQuestion] = useState(0);	// Index of current question
	const [selectedAnswer, setSelectedAnswer] = useState(null);	// Answer user has currently selected
    const [isSubmitted, setIsSubmitted] = useState(false);	// Has the user submitted an answer. i.e., are they in feedback mode
    const [feedback, setFeedback] = useState(null);	// Feedback text to be displayed
	const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME); // Time remaining for session. e.g., 5 minutes
	const timerRef = useRef(null);
	const [questionStartTime, setQuestionStartTime] = useState(null);	// Measures duration to answer question
	const [feedbackStartTime, setFeedbackStartTime] = useState(null);	// Measures duration to feedback for each question
	const [questionFeedbackDurations, setQuestionFeedbackDurations] = useState([]);

	const [mode, setMode] = useState('system1');

	const { status, messages, input, submitMessage, handleInputChange } = useAssistant({ api: '/api/assistant' });

	useEffect(() => {
		get_questions().then(value => {
			console.log(value);
		  setQuestions(value);
		});
	}, []);

	useEffect(() => {
		if (questionsLoaded()) {
		  setQuestionStartTime(Date.now());
		}
	  }, [currentQuestion, questions]);

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		console.log(query);
		const modeQuery = query.get('mode');
		if (modeQuery === 'system1' || modeQuery === 'system2') {
		  setMode(modeQuery);
		}
	}, []);

	useEffect(() => {
		if (timeRemaining > 0) {
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

		// Calculate the time taken for the current question
		const timeTaken = (Date.now() - questionStartTime) / 1000;
		// Update the durations array with the question duration
		setQuestionFeedbackDurations(prev => {
			const newDurations = [...prev];
			newDurations[currentQuestion] = { questionDuration: timeTaken, feedbackDuration: null };
			return newDurations;
		});

		// Start the feedback timer
		setFeedbackStartTime(Date.now());

        setQuestionAnswers(prev => {
            const newAnswers = [...prev];
            newAnswers[currentQuestion] = selectedAnswer;
            return newAnswers;
        });

        setFeedback(explanation);
        setIsSubmitted(true);
	}

	const onNextClick = e => {
		// Calculate the time taken for feedback
		const feedbackTimeTaken = (Date.now() - feedbackStartTime) / 1000;
		// Update the durations array with the feedback duration
		setQuestionFeedbackDurations(prev => {
			const newDurations = [...prev];
			newDurations[currentQuestion].feedbackDuration = feedbackTimeTaken;
			return newDurations;
		});
		
		if (shouldShowNext()) {
			setCurrentQuestion(prev => prev + 1);
			setSelectedAnswer(null);
			setIsSubmitted(false);
			setFeedback(null);

			setQuestionStartTime(Date.now()); // Restart the timer for the next question
			setFeedbackStartTime(null); // Reset feedback start time
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

		console.log(questionFeedbackDurations);

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
					Individual Learning System: {mode}
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
						<Result result={result}/>
					) : (
						<div>

						</div>
					)
				}
				<div>
					{messages.map((m) => (
						<div key={m.id}>
						<strong>{`${m.role}: `}</strong>
						{m.role !== 'data' && m.content}
						{m.role === 'data' && (
							<>
							{(m.data).description}
							<br />
							<pre className={'bg-gray-200'}>
								{JSON.stringify(m.data, null, 2)}
							</pre>
							</>
						)}
						</div>
					))}
					
					{status === 'in_progress' && <div />}

					<form onSubmit={submitMessage}>
						<input
						disabled={status !== 'awaiting_message'}
						value={input}
						placeholder="What is the temperature in the living room?"
						onChange={handleInputChange}
						/>
					</form>
				</div>
			</MainPaper>
		</ThemeProvider>
	);
}
