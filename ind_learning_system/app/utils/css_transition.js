import React from "react";
import { CSSTransition } from "react-transition-group";

export default elem => {
    return (
        <CSSTransition
            appear={true}
            timeout={{
                appear: 5000,
                enter: 5000,
                exit: 5000,
            }}
            exit={false}
        >
            {elem}
        </CSSTransition>
    );
};