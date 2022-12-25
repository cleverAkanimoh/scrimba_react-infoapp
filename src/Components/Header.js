import React from 'react';
import logo from '../reactjs-icon.svg';

const Header = () => (
    <header>
        <div>
            <img src={logo} className="logo" alt="logo" />
            <h3>RealFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
    </header>
    );

export default Header;
