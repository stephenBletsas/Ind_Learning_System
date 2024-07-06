import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const MessageBox = styled(Paper)(({ theme, isAss }) => ({
    padding: theme.spacing(2),
    ...(isAss && {float: "left", left: "12px", backgroundColor: theme.palette.primary.main}),
    ...(!isAss && {float: "right", right: "12px", backgroundColor: theme.palette.amber.main}),
	borderRadius: "16px",
    marginLeft: theme.spacing(2),
	marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    // maxWidth: '55%',
    width: '50%',
    position: 'relative'
}));

const MessageContainer = styled('div')(({ theme }) => ({
    width: '100%'
}));

const AIMessage = ({ m }) => {
    return (
        <MessageContainer>
            <MessageBox isAss={m.role === 'assistant'}>
                <div key={m.id}>
                    <strong>{`${m.role}: `}</strong>
                    {m.role !== 'data' && m.content}
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