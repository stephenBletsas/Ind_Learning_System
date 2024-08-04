import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for styling


const FeedBox = styled(Paper)(({ theme, correct }) => ({
    padding: theme.spacing(2),
    ...(correct && { backgroundColor: theme.palette.success.light }),
    ...(!correct && { backgroundColor: theme.palette.error.light }),
    ...(!correct && { color: "white" }),
	borderRadius: "16px",
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
    width: '70%'
}));

const Title = styled('div')(({ theme }) => ({
    ...theme.typography.h6,
    padding: theme.spacing(1),
    fontWeight: "bold",
}));

const Content = styled('div')(({ theme }) => ({
    ...theme.typography.body1,
    padding: theme.spacing(1),
}));

const FeedbackBox = ({ feedback, isCorrect }) => {
    return (
        <FeedBox correct={isCorrect ? isCorrect.toString() : undefined}>
            {isCorrect && <Title>{"Great Job!"}</Title>}
            {!isCorrect && <Title>{"You'll get in next time!"}</Title>}
			<Content>
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                >
                    {feedback}
                </ReactMarkdown>
            </Content>
		</FeedBox>
    );
}

export default FeedbackBox;