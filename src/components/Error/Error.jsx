import React from "react";
import "./Error.css";

const Error = () => {
    return (
        <div className="error-container">
            <div>
                <p className="error-404">ERROR</p>
                <p className="glitch">
                    <span aria-hidden="true">404</span>
                    404
                    <span aria-hidden="true">404</span>
                </p>
            </div>
        </div>
    );
};

export default Error;
