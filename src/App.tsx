import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {AllStats} from './modules/stats/all-stats';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {CountryPage} from './modules/stats/country-page';

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<AllStats/>}/>
                <Route path='/country/:countryName' element={<CountryPage/>}/>
            </Routes>
        </Provider>
    );
}

export default App;
