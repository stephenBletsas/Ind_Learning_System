import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const FeedBox = styled(Paper)(({ theme, correct }) => ({
    padding: theme.spacing(2),
    ...(correct && { backgroundColor: theme.palette.success.light }),
    ...(!correct && { backgroundColor: theme.palette.error.light }),
    ...(!correct && { color: "white" }),
	borderRadius: "16px",
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
	marginTop: "-12px",
    width: '70%'
}));

const Title = styled('div')(({ theme }) => ({
    ...theme.typography.h4,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
}));

const Content = styled('div')(({ theme }) => ({
    ...theme.typography.h5,
    padding: theme.spacing(1),
}));

const FeedbackBox = ({ feedback, isCorrect }) => {
    return (
        <FeedBox correct={isCorrect}>
            {isCorrect && <Title>Great Job!</Title>}
            {!isCorrect && <Title>You'll get in next time!</Title>}
			<Content>{feedback}</Content>
		</FeedBox>
    );
}

export default FeedbackBox;