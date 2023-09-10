import React from 'react';

const TailwindWarningButton = ({ children, onClick, className }) => {
    return (
        <button
            className={"px-4 py-2 bg-amber-400 hover:bg-amber-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 " + className}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default TailwindWarningButton;
