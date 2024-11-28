import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for styling

const MessageBox = styled(Paper)(({ theme, isAss }) => ({
    padding: theme.spacing(2),
    ...(isAss && {float: "left", left: "12px", backgroundColor: theme.palette.primary.main}),
    ...(!isAss && {float: "right", right: "12px", backgroundColor: theme.palette.amber.main}),
	borderRadius: "16px",
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    maxWidth: '75%',
    // width: '95%',
    position: 'relative',
    ...theme.typography.body1,
    fontSize: '14px',
    lineHeight: 2,
    color: theme.palette.primary.contrastText
}));

const MessageContainer = styled('div')(({ theme }) => ({
    // width: '100%'
}));

const FormattedPre = styled('pre')(({ theme }) => ({
    // fontFamily: theme.typography.fontFamily,
    ...theme.typography.h6,
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100%",          
    wordWrap: "break-word",
}));

const BoldText = styled('strong')(({ theme }) => ({
    // fontFamily: theme.typography.fontFamily,
    ...theme.typography.body1,
    fontSize: '14px',
    fontWeight: "bold"
}));

const AIMessage = ({ m }) => {
    return (
        <MessageContainer>
            <MessageBox isAss={m.role === 'assistant'}>
                <div key={m.id}>
                    {m.role !== 'data' && 
                        <ReactMarkdown
                            remarkPlugins={[remarkMath]}
                            rehypePlugins={[rehypeKatex]}
                            components={{
                                p: ({ node, ...props }) => <p {...props} />
                            }}
                        >
                            {m.content}
                        </ReactMarkdown>
                    }
                    
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
            </MessageBox>
        </MessageContainer>
    );
}

export default AIMessage;