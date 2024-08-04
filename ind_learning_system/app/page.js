'use client';

import React, { useState, useEffect } from "react";
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { grey, blue, amber } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import StartScreen from "./component/StartScreen";
import Main from "./component/Main";

const theme = createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: blue[500],
            dark: blue[700],
            contrastText: "#fff"
        },
        secondary: {
            light: grey[200],
            main: grey[500],
            dark: grey[700],
            contrastText: "#fff"
        },
		amber: {
			light: amber[200],
            main: amber[400],
            dark: amber[500],
            contrastText: "#000"
		}
    }
});

const MainPaper = styled(Paper)(({ theme }) => ({
	userSelect: "none",
    overflowX: "hidden",
	padding: "2%",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "85%",
	display: "flex",
    flexDirection: "column",
	borderRadius: "16px",
}));

export default function Home() {
	const [hasStarted, setHasStarted] = useState(false); // Track if the quiz has started
	const [isAI, setIsAI] = useState(false);

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		console.log(query);
		const modeQuery = query.get('mode');
		if (modeQuery === 'system2') {
		  setIsAI(true);
		}
	}, []);

	const handleStart = () => {
		setHasStarted(true); // Set the quiz as started
	};

	return (
		<ThemeProvider theme={theme}>
			<MainPaper elevation={3} square={false}>
				<Typography variant="h5" gutterBottom marginBottom={"12px"}>
					Individual Learning System: {isAI ? "True" : "False"}
				</Typography>
				<hr key={"horizontalLine"} width={"100%"} />
				{!hasStarted ? (
					<StartScreen onStart={handleStart} />
				) : (
					<Main isAI={isAI}/>
				)}
			</MainPaper>
		</ThemeProvider>
	);
}
