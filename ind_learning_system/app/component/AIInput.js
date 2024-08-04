import React, { useRef, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const FeedBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.amber.light,
	borderRadius: "16px",
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center', // Center align items vertically
    overflow: 'hidden', // Ensure no overflow
}));

const SubmitButton = styled(Button)(({theme}) => ({
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(),
	borderRadius: "16px",
    backgroundColor: theme.palette.amber.main,
}))

const AIInput = ({ status, input, submitMessage, handleInputChange }) => {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        submitMessage(event);
        if (inputRef.current) {
          inputRef.current.focus(); // Autofocus the input field after submission
        }
    };

    useEffect(() => {
        if (status === 'awaiting_message' && inputRef.current) {
          inputRef.current.focus();
        }
    }, [status]);

    return (
        <FeedBox>      
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexGrow: 1 }}>
                <Input
                    inputRef={inputRef}
                    disabled={status !== 'awaiting_message'}
                    value={input}
                    placeholder="Message Chatbot"
                    onChange={handleInputChange}
                    fullWidth={true}
                />
                <SubmitButton
                    type="submit"
                    variant="contained"
                    color="amber"
                    disabled={status !== 'awaiting_message'}
                >
                    <ArrowUpwardIcon />
                </SubmitButton>
            </form>
		</FeedBox>
    );
}

export default AIInput;