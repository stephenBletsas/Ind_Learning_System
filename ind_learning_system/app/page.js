'use client';

import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { grey, lightGreen } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

import get_questions from "./api/get_questions";
import Question from "./component/Question";
import Answer from "./component/Answer";

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
    height: "85%"
}));

export default function Home() {
  	const [questions, setQuestions] = useState([]);
    const [result, setResult] = useState(null);
    const [questionAnswers, setQuestionAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

	useEffect(() => {
		get_questions().then(value => {
		  setQuestions(value);
		});
	}, []);

	const onAnswerSelected = answerId => {
		let clickedAnswerIndex = answerId;
		const currentAnswers = [...questionAnswers];
		currentAnswers[currentQuestion] = clickedAnswerIndex;
		console.log(`updating index: ${answerId}`);
	
		setQuestionAnswers(currentAnswers);
	};

	const questionsLoaded = () => questions.length > 0;
    const getCurrentQuestion = () => questions[currentQuestion].question;
    const getCurrentAnswers = () => questions[currentQuestion].answers;
    const isAnswerSelected = answerIndex => questionAnswers[currentQuestion] === answerIndex;
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
						<div>
							<div key={getCurrentQuestion()}>
								<Question
                                    question={getCurrentQuestion()}
                                    questionIndex={currentQuestion + 1}
                                    questionsLength={questions.length}
                                />
							</div>

							<div>
                                {getCurrentAnswers().map((currentAnswer, index) => (
                                    <Answer
                                        answerIndex={index}
                                        key={getCurrentQuestion() + index}
                                        answer={currentAnswer}
                                        isSelected={isAnswerSelected(index)}
                                        onAnswerSelect={onAnswerSelected}
                                    />
                                ))}
                            </div>
						</div>
					) : (
						<div>
							
						</div>
					)
				}
			</MainPaper>
		</ThemeProvider>
	);
}
