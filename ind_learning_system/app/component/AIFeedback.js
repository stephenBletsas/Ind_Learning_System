import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AIInput from "./AIInput";
import AIMessage from "./AIMessages";

const FeedBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
	borderRadius: "16px",
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
    width: '70%',
    height: '35vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    overflow: 'hidden',
}));

const MessageBox = styled('div')(({ theme }) => ({
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    height: '95%',
    marginBottom: "8px",

    /* Hide scrollbar for Chrome, Safari, and Opera */
    '&::-webkit-scrollbar-track': {
        display: 'none'
    },

    /* Hide scrollbar for IE, Edge, and Firefox */
    '-ms-overflow-style': 'none',  /* IE and Edge */
    scrollbarWidth: 'none',  /* Firefox */
}));

const AIFeedbackBox = ({ status, messages, input, submitMessage, handleInputChange }) => {
    useEffect(() => {
        console.log(messages);
        scrollToBottom("scrollable_div");
    }, [messages]);

    const scrollToBottom = (id) => {
        const element = document.getElementById(id);
        console.log(element.scrollHeight);
        element.scrollTop = element.scrollHeight;
    }

    return (
        <FeedBox>
            <MessageBox id="scrollable_div">
                {messages.map((m, index) => (
                    index !== 0 && <AIMessage m={m} key={index}/>
                ))}
            </MessageBox>
										
            {status === 'in_progress' && <div />}
                        
            <AIInput 
                status={status} 
                input={input} 
                submitMessage={submitMessage} 
                handleInputChange={handleInputChange} 
            />
		</FeedBox>
    );
}

export default AIFeedbackBox;