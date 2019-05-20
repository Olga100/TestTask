import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {store} from '../configureStore';

import MainPage from '../containers/MainPage';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <MainPage />
                </div>
            </Provider>

        );
    }
}

export default App;
