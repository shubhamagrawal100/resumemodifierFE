import React from 'react';
import './Loading.css'; // Create a CSS file for styling

const Loading = () => {
    return (
        <div className="loading-container">
            <img src="./loading-gif.gif" alt="Loading..." />
        </div>
    );
};

export default Loading;
