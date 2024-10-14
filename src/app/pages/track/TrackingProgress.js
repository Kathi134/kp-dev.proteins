import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import React from "react";

export default function TrackingProgress({percentage}) {
    return (
        <div className="centered-center">
            <div className="third">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={20}
                    styles={buildStyles({
                        pathColor: "var(--primary-highlight)",
                        trailColor: "var(--secondary-highlight)",
                        textSize: "1rem",
                        textColor: "var(--darkgrey)",
                        x: 25,
                        y: 55,
                    })}
                />
            </div>
        </div>
    );
}