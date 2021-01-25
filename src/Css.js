import React from "react";
import "./css/Css.css";

function Css(props){
    const firstPStyle = {
        color: "green",
        fontFamily: "Arial",
        fontSize: 23,
        padding: "30px",
        textAlign: "center"
    };
    return (
        <>
            <div>
                <h1 style={{color:'mediumspringgreen'}}>CSS inline</h1>
                <p style={firstPStyle}>
                    Also we are allowed to define an object containing all the styles
                </p>
                <p className="firstClass">
                    First Class or ID
                </p>
            </div>
        </>
    );
}

export default Css;