import React from 'react';

const MainImageDisplay = ({ imgPath, text }) => {
    return (
        <div className="image-container">
            <div className="main-image-display" style={{ background: "url(" + imgPath + ") center/cover" }}>
                <h2>{text}</h2>
            </div>
        </div>

    );
};

export default MainImageDisplay;