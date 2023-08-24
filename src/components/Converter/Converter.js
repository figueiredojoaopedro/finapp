import React, { useState } from 'react';
import TailwindInput from '../Inputs/TailwindInput/TailwindInput';
import TailwindSelect from '../Inputs/TailwindSelect/TailwindSelect';
import TailwindPrimaryButton from '../Buttons/Primary/PrimaryButton'; 

const Converter = () => {
    const [converterValues, setConverterValues] = useState({
        from: "",
        amount: "",
        to: ""
    });

    const onChangeConverterValues = (event) => {
        let { name, value } = event.target;
        console.log("Teste", converterValues);
        setConverterValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleConvert = (event) => {
        // to do
    }

    return (
        <div className='bg-slate-100 shadow-md text-black rounded-lg p-10'>
            <div className=''>
                <h4 className='text-4xl font-semibold'>Convert</h4>
            </div>
            <div className='py-20'>
                <div className='flex flex-row'>
                    <div>
                        <TailwindInput
                            name="amount"
                            inputValue={converterValues.amount}
                            placeholderText={"How much will you convert?"}
                            handleInputChange={onChangeConverterValues}>
                        </TailwindInput>
                    </div>
                    <div>
                        <TailwindSelect
                            name="from"
                            options={["dolar", "euro", "real"]}
                            selectedOption={converterValues.from}
                            handleSelectChange={onChangeConverterValues}
                            ></TailwindSelect>
                    </div>
                    <div>
                        <TailwindSelect
                            name="to"
                            options={["dolar", "euro", "real"]}
                            selectedOption={converterValues.to}
                            handleSelectChange={onChangeConverterValues}
                        ></TailwindSelect>
                    </div>
                </div>
                <div>
                    <TailwindPrimaryButton onClick={handleConvert}>Convert</TailwindPrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Converter