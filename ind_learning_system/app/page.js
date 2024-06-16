'use client';

import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { grey, lightGreen } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

import get_questions from "./api/get_questions";
import submit_questions from "./api/submit_questions";
import Question from "./component/Question";
import Answer from "./component/Answer";
import Result from "./component/Result";

const theme = createTheme({
    palette: {
        primary: {
            light: lightGreen[200],
            main: lightGreen[400],
            dark: lightGreen[600],
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

const FeedbackBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: grey[200],
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
    width: '70%'
}));

const NextButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(),
	fontSize: "18px",
    marginTop: "20px",
    position: "absolute",
    right: "30px",
	bottom: "30px"
}));

const SubmitButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(),
	fontSize: "18px",
    marginTop: "20px",
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

	useEffect(() => {
		get_questions().then(value => {
			console.log(value);
		  setQuestions(value);
		});
	}, []);

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

        setFeedback(isCorrect ? `Correct! ${explanation}` : `Incorrect. ${explanation}`);
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
        setQuestionAnswers([]);
        setCurrentQuestion(0);
        setResult(null);

        get_questions().then(value => {
			setQuestions(value);
		});
    };

	const questionsLoaded = () => questions.length > 0;
    const getCurrentQuestion = () => questions[currentQuestion].question;
    const getCurrentAnswers = () => questions[currentQuestion].answers;
    const isAnswerSelected = answerIndex => selectedAnswer === answerIndex;
    const shouldShowSubmit = () =>
        currentQuestion === questions.length - 1 &&
		questionAnswers[questions.length - 1] !== undefined;
    const shouldShowNext = () =>
        currentQuestion !== questions.length - 1 &&
		questionAnswers[currentQuestion] !== undefined;

	return (
		<ThemeProvider theme={theme}>
			<MainPaper elevation={3} square={false}>
				<Typography variant="h4" gutterBottom>
					Individual Learning System
				</Typography>
				<hr key={"horizontalLine"} width={"100%"} />
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
									<FeedbackBox>
										<Typography variant="body1">{feedback}</Typography>
									</FeedbackBox>
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
