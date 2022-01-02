import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {AllStats} from "./modules/stats/all-stats";

function App() {
    return (
        <Provider store={store}>
            <AllStats/>
        </Provider>
    );
}

export default App;
