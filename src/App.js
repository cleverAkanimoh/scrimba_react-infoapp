import React, { Component } from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

class App extends Component {
    state = { loading: 'loading' };

    render() {
        return (
            <main>
                <Header />
                <MainContent />
            </main>
        );
    }
}

export default App;
