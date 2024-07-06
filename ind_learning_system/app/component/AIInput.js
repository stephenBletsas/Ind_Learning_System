import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';


const FeedBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.amber.light,
	borderRadius: "16px",
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
	// marginTop: "-10px",
    position: 'relative',
}));

const AIInput = ({ status, input, submitMessage, handleInputChange }) => {
    return (
        <FeedBox>      
            <form onSubmit={submitMessage}>
                <Input
                    disabled={status !== 'awaiting_message'}
                    value={input}
                    placeholder="Message Chatbot"
                    onChange={handleInputChange}
                    fullWidth={true}
                />
            </form>
		</FeedBox>
    );
}

export default AIInput;