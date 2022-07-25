//@packages
import React from 'react';

const UpIcon = ({width = 8, height = 4, color = '#1EB589'}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M0 4l4-4 4 4z"
            />
        </svg>
    );
};

export default UpIcon;