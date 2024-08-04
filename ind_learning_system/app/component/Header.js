import React from "react";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const HeaderContainer = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: "12px"
});

const Typo = styled('div')(({ theme }) => ({
    ...theme.typography.subtitle1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    paddingTop: "0px",
    color: theme.palette.secondary.dark
}));

const Title = styled('div')(({ theme }) => ({
    ...theme.typography.h5,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.secondary.dark
}));

const Timer = styled('div')(({ theme }) => ({
    ...theme.typography.h6,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
    color: theme.palette.secondary.dark
}));

const Header = ({ timeRemaining }) => {
    return (
        <HeaderContainer>
            <div>
            <Title>
                Mathematics: Algebra
            </Title>
            <Typo>
                Answer the questions below
            </Typo>
            </div>
            <Timer>
				Time Remaining: {Math.floor(timeRemaining / 60)}:{('0' + timeRemaining % 60).slice(-2)}
			</Timer>
        </HeaderContainer>
    );
}

export default Header;