import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {GlobalTable} from "../components/global-table";
import {FoundCountries} from "../components/found-countries";
import {SearchInput} from "../components/search-input";
import {MapChart} from "../components/map-chart";
import {loadAllStats} from "../services/actions";

export const AllStats = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(loadAllStats());
    }, []);


    return (
        <div className='d-flex justify-content-center mt-5 gap-3'>
            <div className='d-flex flex-column gap-3'>
                <GlobalTable/>
                <SearchInput/>
                <FoundCountries/>
            </div>
            <div className='w-75'>
                <MapChart/>
            </div>
        </div>
    );
};

