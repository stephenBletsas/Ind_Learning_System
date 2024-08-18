'use client';

import React, { useState, useEffect } from "react";
import { useRef } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import get_questions from "../api/get_questions";
import submit_questions from "../api/submit_questions";
import Question from "./Question";
import Answer from "./Answer";
import Result from "./Result";
import FeedbackBox from "./Feedback";
import Header from "./Header";
import CircularLoading from "./CircularLoading";

import { useAssistant } from 'ai/react';
import AIFeedbackBox from "./AIFeedback";

const STARTING_TIME = 15000;
// const STARTING_TIME = 1500;

const ContentContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
    flexGrow: 1,
});

const NextButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(2),
	borderRadius: "16px",
	fontSize: "16px",
    marginTop: "24px",
    marginBottom: "12px",
	padding: "14px 64px",
    // position: "absolute",
    // right: "30px",
	// bottom: "15px"
}));

const SubmitButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(),
	borderRadius: "16px",
	fontSize: "16px",
    marginTop: "24px",
	padding: "14px 64px",
    // position: "absolute",
    // right: "30px",
	// bottom: "15px"
}));

const ButtonsContainer = styled('div')({
	marginTop: 'auto', // Pushes the buttons container to the bottom
	display: 'flex',
	justifyContent: 'flex-end',
	gap: '10px' // Adjust the gap between the buttons as needed
  });

const DivIndex = styled('div')(({ theme }) => ({
    ...theme.typography.h6,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
    paddingTop: "0px",
	color: theme.palette.secondary.dark
}));
  

const Main = ({ isAI }) => {
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

	const { status, messages, input, submitMessage, handleInputChange, setMessages, append } = useAssistant({ api: '/api/assistant' });
	const [storeMessages, setStoreMessages] = useState([]);

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
		if (timeRemaining > 0) {
			timerRef.current = setInterval(() => {
				setTimeRemaining(prev => prev - 1);
		  	}, 1000);

		  	return () => clearInterval(timerRef.current);
		} else {
		  	onSubmitClick();
		}
	}, [timeRemaining]);

	const AIQuestionSubmissionString = () => {
		const correct_index = questions[currentQuestion].correctAnswerIndex;
		return `
			Question: ${getCurrentQuestion()},
			Correct Answer: ${questions[currentQuestion]["answers"][correct_index]},
			User Answer: ${questions[currentQuestion]["answers"][selectedAnswer]}.
			Provide feedback, including hints and explanations to help the student understand their answer and the correct solution without directly giving away the answer.
		`
	}

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

		if (isAI) {
			append({
				role: 'user',
				content: AIQuestionSubmissionString(),
			});
		}		

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

		setStoreMessages(prev => {
			const newMessages = [...prev];
			newMessages.push(...messages);
			return newMessages;
		});
		setMessages([]);
		
		if (shouldShowNext()) {
			console.log(messages);
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
		// setQuestionAnswers([]);
		// setCurrentQuestion(0);

		console.log(questionFeedbackDurations);
		console.log(storeMessages);

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
        <>
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

					<div>
						<div style={{ display: 'flex', alignItems: 'flex-start', height: '90%' }}>
							<div style={{ width: "30%" }}>
								<DivIndex>
									{`Choose Answer`}{" "}
								</DivIndex>
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
							{isSubmitted && !isAI && (
								<FeedbackBox feedback={feedback} isCorrect={isAnswerCorrect()}/>
							)}
							{isSubmitted && isAI && (
								<AIFeedbackBox 
									status={status}
									messages={messages}
									input={input}
									submitMessage={submitMessage}
									handleInputChange={handleInputChange}
								/>
							)}
						</div>
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
									disabled={status !== 'awaiting_message'}
                                >
                                    {currentQuestion < questions.length - 1 ? "Next" : "Complete"}
                                </NextButton>
                            ): null}
					</ButtonsContainer>
				</ContentContainer>
                ) : result !== null ? (
                    <Result 
                        result={result}
                        questionAnswers={questionAnswers}
                        storeMessages={storeMessages}
                        questionFeedbackDurations={questionFeedbackDurations}
                    />
                ) : (
                    <CircularLoading key={"loadingCircle"}/>
                )
            }
        </>
	);
}

export default Main;