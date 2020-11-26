import React from "react";

import classes from "./MessageBox.module.css";
const MessageBox = (props) => {
    let message = "Sorry, something went wrong!";
    if (props.message === "Network Error") {
        message = "No intenet connection";
    }
    return (
        <div className={classes.MessageBox}>
            <p>
                {message}
                <span role="img" aria-label="emoji">
                    💥
                </span>
            </p>
            <p>
                Please try again{" "}
                <span role="img" aria-label="emoji">
                    🙏
                </span>
            </p>
        </div>
    );
};

export default MessageBox;
