import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Paper from '@mui/material/Paper';
import AIInput from "./AIInput";
import AIMessage from "./AIMessages";

const FeedBox = styled(Paper)(({ theme, isDialog }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
	borderRadius: "16px",
    ...(isDialog && {width: '80vw'}),
    ...(!isDialog && {width: '100%'}),
    ...(isDialog && {height: '70vh'}),
    ...(!isDialog && {height: '40vh'}),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    overflow: 'hidden',
}));

const DialogContentBox = styled(DialogContent)(({ theme }) => ({
    // overflow: 'hidden',
    // padding: '20px 50px',
}));

const MessageBox = styled('div')(({ theme }) => ({
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    height: '95%',
    marginBottom: "8px",
    width: "100%",

    /* Hide scrollbar for Chrome, Safari, and Opera */
    '&::-webkit-scrollbar-track': {
        display: 'none'
    },

    /* Hide scrollbar for IE, Edge, and Firefox */
    '-ms-overflow-style': 'none',  /* IE and Edge */
    scrollbarWidth: 'none',  /* Firefox */
}));

const ButtonMessageBox = styled('div')(({ theme }) => ({
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    height: '95%',
}));



const AIFeedbackBox = ({ status, messages, input, submitMessage, handleInputChange }) => {
    const [open, setOpen] = useState(false);
    const [stateCount, setStateCount] = useState(0);

    const handleClickOpen = () => {
        console.log("Open");
        setOpen(true);
    };
    
    const handleClose = () => {
        console.log("Close");
        setOpen(false);
    };

    useEffect(() => {
        scrollToBottom(messageBoxId(open));
    }, [open, messages, stateCount]);

    const scrollToBottom = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollTop = element.scrollHeight;
        } else {
            const update_count = stateCount + 1;
            setStateCount(update_count);
        }
    }

    const messageBoxId = (open) => {
        return `scrollable_div_${open}`
    }

    return (
        <FeedBox isDialog={false}>
            <ButtonMessageBox>
                <MessageBox id={messageBoxId("false")}>
                    {messages.map((m, index) => (
                        index !== 0 && <AIMessage m={m} key={index}/>
                    ))}
                </MessageBox>
                                                
                {status === 'in_progress' && <div />}

                <Stack direction="column" spacing={1}>
                    <IconButton aria-label="open_dialog" onClick={handleClickOpen}>
                        <OpenInFullIcon />
                    </IconButton>
                </Stack>
            </ButtonMessageBox>

            <AIInput 
                status={status} 
                input={input} 
                submitMessage={submitMessage} 
                handleInputChange={handleInputChange} 
            />

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={'xl'}
                PaperProps={{
                    style: {
                      borderRadius: '16px',
                    },
                    elevation: 3,
                }}
            >
                <DialogContentBox>
                    {/* <AIFeedbackBox 
                        status={status}
                        messages={messages}
                        input={input}
                        submitMessage={submitMessage}
                        handleInputChange={handleInputChange}
                        isDialog={true}
                    /> */}
                    <FeedBox isDialog={true}>
                        <ButtonMessageBox>
                            <MessageBox id={messageBoxId("true")}>
                                {messages.map((m, index) => (
                                    index !== 0 && <AIMessage m={m} key={index}/>
                                ))}
                            </MessageBox>
                                                            
                            {status === 'in_progress' && <div />}

                            <Stack direction="column" spacing={1}>
                                <IconButton aria-label="close_dialog" onClick={handleClose}>
                                    <CloseFullscreenIcon />
                                </IconButton>
                            </Stack>
                        </ButtonMessageBox>

                        <AIInput 
                            status={status} 
                            input={input} 
                            submitMessage={submitMessage} 
                            handleInputChange={handleInputChange} 
                        />
                    </FeedBox>
                </DialogContentBox>
            </Dialog>
		</FeedBox>
    );
}

export default AIFeedbackBox;