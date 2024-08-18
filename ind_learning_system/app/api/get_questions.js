import QuestionsData from "@/app/api/data/questionData";

const get_questions = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const questionsLength = QuestionsData.length;
            const questions = [];

            for (let i = 0; i < questionsLength; i++) {
                const question = {
                    question: QuestionsData[i].question,
                    answers: QuestionsData[i].answers,
                    correctAnswerIndex: QuestionsData[i].correctAnswerIndex,
                    explanation: QuestionsData[i].explanation,
                    i
                };

                questions.push(question);
            }

            resolve(
                questions
            );
        }, 1500);
    });
};

export default get_questions;