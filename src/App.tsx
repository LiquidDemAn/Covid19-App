import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {AllStats} from './modules/stats/all-stats';
import {BrowserRouter, Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {CountryStats} from './modules/stats/country-stats';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<AllStats/>}/>
                    <Route path='/:countryName' element={<CountryStats/>}/>
                </Routes>
            </BrowserRouter>,
        </Provider>
    );
}

export default App;
