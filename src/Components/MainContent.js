import React from 'react';
import logo from '../reactjs-icon-2.svg';

const MainContent = () => (
    <div className="main-content">
        <h2>Fun facts about React</h2>

        <ul>
            <li>It was first released in 2013</li>
            <li>It was originally created by Jordan Walke</li>
            <li>It has well over 100k stars on GitHub</li>
            <li>It is maintained by Facebok</li>
            <li>It powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        <img src={logo} className="watermark" alt="watermark" />
    </div>
    );

export default MainContent;
