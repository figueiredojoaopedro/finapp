import React, { useState } from 'react';

const TailwindInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="relative w-64">
            <input
                type="text"
                name={props.name}
                value={props.inputValue}
                onChange={props.handleInputChange}
                placeholder={props.placeholderText}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className={`w-full p-2 border-2 border-blue-500 rounded-md ${isFocused || props.inputValue !== '' ? 'border-blue-500' : 'border-gray-300'
                    } focus:outline-none focus:border-blue-500`}
            />
        </div>
    );
};

export default TailwindInput;
