import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to new fed world!</h2>
                </div>
                <p className="App-intro">
                    Fusce eu magna in quam congue laoreet. In eget felis
                    malesuada, iaculis quam sit amet, cursus justo. Sed et
                    tempus justo, et dictum mauris. Phasellus volutpat ipsum
                    ligula, ac interdum libero commodo eu. Maecenas eleifend
                    massa urna, et sodales tortor consequat eget. Morbi cursus
                    lectus nec ultricies varius. Nam et ex sit amet ipsum
                    consequat tempus. Vivamus dapibus ligula eget faucibus
                    semper. Maecenas mattis augue non ante dignissim rhoncus.
                    Praesent sagittis porta quam, id bibendum mauris ullamcorper
                    quis. Nam eget arcu ultricies, ultricies lorem id, aliquam
                    nulla. Fusce convallis malesuada tellus a mattis. Duis vitae
                    fringilla nulla. Morbi laoreet purus consequat mollis
                    dapibus.
                </p>
            </div>
        );
    }
}

export default App;
