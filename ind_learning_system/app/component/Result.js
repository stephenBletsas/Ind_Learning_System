import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { saveToFile } from '../utils/save_file';


const SvgContainer = styled('div')({
    width: "90%",
    height: "200px",
    margin: "0 auto",
    border: "1px",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    top: "50%",
    left: "50%",
    userSelect: "none"
});

const ResultParagraph = styled('div')(({ theme }) => ({
    ...theme.typography.h6,
    textAlign: "center",
    marginBottom: "24px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

const Typo = styled('div')(({ theme }) => ({
    ...theme.typography.h5,
    textAlign: "center",
    marginBottom: "24px",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.secondary.dark
}));

const SaveButton = styled(Button)(({ theme }) => ({
	margin: theme.spacing(),
	borderRadius: "16px",
	fontSize: "14px",
    marginTop: "20px",
	padding: "14px 24px",
}));

const Result = ({ result, questionAnswers, storeMessages, questionFeedbackDurations }) => {
    const getMessage = () => {
        return `${result.correctAnswers} / ${result.questionsLength} questions answered correctly`;
    };

    const generateTimestamp = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `test_results_${year}${month}${day}_${hours}${minutes}.json`;
    };

    return (
        <SvgContainer>
            <Typo>
                Thank you for participating in the experiment!
            </Typo>
            <ResultParagraph>
                {getMessage()}
            </ResultParagraph>
            <Stack direction="row" sx={{justifyContent: 'center'}}>
                <SaveButton
                    variant="contained"
                    onClick={() => saveToFile({
                        questionAnswers,
                        questionFeedbackDurations,
                        storeMessages,
                    }, generateTimestamp())}
                    color="primary"
                >
                    Save Results
                </SaveButton>
            </Stack>
        </SvgContainer>
    );
};

export default Result;