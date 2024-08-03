import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const Progress = styled(CircularProgress)(({ theme }) => ({
	margin: theme.spacing(2)
}));

const ProgressContainer = styled('div')(({ theme }) => ({
	position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
}));

function CircularLoading() {
    return (
        <ProgressContainer>
            <Progress size={200} />
        </ProgressContainer>
    );
}

export default CircularLoading;
