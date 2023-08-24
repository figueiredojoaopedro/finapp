import React, { useState } from 'react';

const TailwindSelect = (props) => {
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
                name={props.name}
                value={props.selectedOption}
                onChange={props.handleSelectChange}
                onFocus={handleSelectFocus}
                onBlur={handleSelectBlur}
                className={`w-full p-2 border-2 border-blue-500 rounded-md ${isFocused || props.selectedOption !== '' ? 'border-blue-500' : 'border-gray-300'
                    } focus:outline-none focus:border-blue-500`}
            >   
                <option value="">Select one option</option>
                {props.options.map(item => {
                    return(<option value={item}>{item}</option>)
                })}
            </select>
        </div>
    );
};

export default TailwindSelect;
