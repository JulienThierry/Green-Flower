import React from 'react';

const ImageDisplay = ({ imgPath, text }) => {
    return (
        <div className="image-display">
            <div className="img-display" style={{ background: "url(" + imgPath + ") center/cover" }}></div>
            <h3>{text}</h3>

        </div>
    );
};

export default ImageDisplay;