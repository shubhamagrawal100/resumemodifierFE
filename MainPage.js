import React from 'react';
import './style.css'; // Import the CSS file

const MainPage = ({ onLogout, onUploadClick, onModifyClick }) => {
    return (
        <div className="container">
            <button className="logout-button" onClick={onLogout}>Logout</button>
            <h2>Welcome to Resume Modifier</h2>
            <div style={{ textAlign: 'center' }}>
                <button onClick={onUploadClick} style={{ margin: '20px', padding: '15px 30px' }}>
                    Upload Resume
                </button>
                <button onClick={onModifyClick} style={{ margin: '20px', padding: '15px 30px' }}>
                    Modify Resume
                </button>
            </div>
        </div>
    );
};

export default MainPage;
