import React from 'react';

const DownIcon = ({width = 8, height = 4, color = "#DC414C"}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M0 0l4 4 4-4z"/>
        </svg>
    );
};

export default DownIcon;