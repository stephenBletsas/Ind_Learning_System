import QuestionsData from "@/app/api/data/questionData";

const submit_questions = (questions, questionAnswers) => {
    return new Promise(resolve => {
        setTimeout(() => {
            let correctAnswers = 0;

            questions.forEach((question, index) => {
                const validAnswer = QuestionsData[question.i].correctAnswerIndex;
                const userAnswer = questionAnswers[index];

                if (validAnswer === userAnswer) {
                    correctAnswers++;
                }
            });

            const requiredCorrectPercentage = 70;
            const questionsLength = questions.length;
            const pass = correctAnswers >= questionsLength * (requiredCorrectPercentage / 100);
            const result = {
                questionsLength,
                correctAnswers,
                pass
            };

            console.log(result);

            resolve(result);
        }, 1000);
    });
};

export default submit_questions;