import React, {useEffect, useState} from 'react';
import './all-stats.scss'
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../store/hooks";
import {getSummary} from "../services/selectors";
import {loadAllStats} from "../services/actions";
import {Map} from "../components/Map";
import ReactTooltip from "react-tooltip";
import {GlobalTable} from "../components/global-table";

export const AllStats = () => {
    const dispatch = useDispatch();
    const summary = useAppSelector(getSummary);

    useEffect(() => {
        dispatch(loadAllStats())
    }, []);

    const [content, setContent] = useState("");

    return (
        <div className='all-stats'>
            <div>
                <GlobalTable/>
            </div>
            <div className='all-stats__map'>
                <Map setTooltipContent={setContent}/>
                <ReactTooltip>{content}</ReactTooltip>
            </div>
        </div>
    );
};

