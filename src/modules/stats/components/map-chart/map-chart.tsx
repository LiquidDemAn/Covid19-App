import React, {useState} from 'react';
import {Map} from "../Map";
import ReactTooltip from "react-tooltip";

export const MapChart = () => {
    const [content, setContent] = useState("");

    return (
        <div>
            <Map setTooltipContent={setContent}/>
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
};
