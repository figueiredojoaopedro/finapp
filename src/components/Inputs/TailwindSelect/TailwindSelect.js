import React, { useState } from 'react';

const TailwindSelect = ({ children, name, selectedOption, handleSelectChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleSelectFocus = () => {
        setIsFocused(true);
    };

    const handleSelectBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="relative w-64">
            <select
                name={name}
                value={selectedOption}
                onChange={handleSelectChange}
                onFocus={handleSelectFocus}
                onBlur={handleSelectBlur}
                className={`w-full h-10 p-2 border-2 border-blue-500 rounded-md ${isFocused || selectedOption !== '' ? 'border-blue-500' : 'border-gray-300'
                    } focus:outline-none focus:border-blue-500`}
            >
                {children}
            </select>
        </div>
    );
};

export default TailwindSelect;
