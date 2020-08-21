import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

const store = ConfigureStore();

    <Provider store={store}>
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
    </Provider>


class App extends Component {
   render() {
        return (
            <Provider vstore={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
