import React, { useState, useEffect } from 'react';
import TailwindInput from '../Inputs/TailwindInput/TailwindInput';
import TailwindSelect from '../Inputs/TailwindSelect/TailwindSelect';
import TailwindPrimaryButton from '../Buttons/Primary/PrimaryButton';
import TailwindWarningButton from '../Buttons/Warning/WarningButton'; 
import axios from 'axios';

const Converter = () => {
    const [listCurrenciesNames, setListCurrenciesNames] = useState([]);
    const [converterValues, setConverterValues] = useState({
        from: "",
        amount: "",
        to: ""
    });


    useEffect(() => {
        loadCurrenciesNames();
    }, []);

    const loadCurrenciesNames = async () => {
        const currenciesUrl = `https://gist.githubusercontent.com/figueiredojoaopedro/8c11314c64cfbe35d4504210f25e818a/raw/0f61a5172e7fa16482329293a6b77ad68197260b/currencies.json`;

        await axios.get(currenciesUrl)
            .then(response => {
                const currencies = Object.keys(response.data).map(abrev => `${abrev}-${response.data[abrev]}`);
                setListCurrenciesNames(currencies);
            })
            .catch(error => {
                console.error("El error", error);
            })
    }


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
        <div className='bg-slate-100 shadow-md text-black w-full flex flex-col justify-center items-center px-14 py-10 md:w-fit md:justify-start md:items-start md:rounded-lg md:py-10 md:px-24'>
            <div className=''>
                <h4 className='text-3xl font-semibold'>Convert</h4>
            </div>
            <div className='py-20 w-fit'>
                <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-end'>
                    <div className='lg:pe-10 pb-4'>
                        <label>Amount:</label>
                        <TailwindInput
                            name="amount"
                            inputValue={converterValues.amount}
                            placeholderText={"How much will you convert?"}
                            handleInputChange={onChangeConverterValues}
                            >
                        </TailwindInput>
                    </div>
                    <div className='lg:pe-10 pb-4'>
                        <label>From::</label>
                        <TailwindSelect
                            name="from"
                            options={["dolar", "euro", "real"]}
                            selectedOption={converterValues.from}
                            handleSelectChange={onChangeConverterValues}
                            >   
                                <option value="">Select an option</option>
                                {listCurrenciesNames.map(currency => (<option value={currency.split("-")[0]}>{currency}</option>))}   
                        </TailwindSelect>
                    </div>
                    <div className='pb-4'>
                        <label>To:</label>
                        <TailwindSelect
                            name="to"
                            options={["dolar", "euro", "real"]}
                            selectedOption={converterValues.to}
                            handleSelectChange={onChangeConverterValues}
                        >
                            <option value="">Select an option</option>
                            {listCurrenciesNames.map(currency => (<option value={currency.split("-")[0]}>{currency}</option>))}  
                        </TailwindSelect>
                    </div>
                </div>
                <div className='flex flex-row justify-end items-end mt-6'>
                    <TailwindPrimaryButton className="me-4" onClick={handleConvert}>Convert</TailwindPrimaryButton>
                    <TailwindWarningButton onClick={handleConvert}>Clear</TailwindWarningButton>
                </div>
            </div>
        </div>
    )
}

export default Converter