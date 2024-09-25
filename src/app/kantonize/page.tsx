'use client';

import { useEffect, useState } from "react";

const KantonizePage = () => {
    const [steps] = useState([
        {value: "Start", id: 0},
        {value: "Choose your Sauce", id: 1},
        {value: "Choose your Meat", id: 2},
        {value: "Choose your Vegetable", id: 3},
        {value: "Choose your Toppings", id: 4},
        {value: "Choose your Garnish", id: 5},
        {value: "Choose your Garnish", id: 6},
    ]);
    const [current, setCurrent] = useState(0);
    const [options] = useState([
        [{}],
        // Choose your Sauce
        [ { title: 'Choose your Sauce', id: 0 }, { value: 'Original', id: 1 }, { value: 'Gourmet', id: 2 }, { value: 'Savor Blend', id: 3 }],
        // Choose your Meat
        [ { title: 'Choose your Meat', id: 0 }, {value: 'Pork', id: 1}, {value: 'Shrimp', id: 2}, {value: 'Chicken', id: 3}],
        // Choose your Vegetable
        [ { title: 'Choose your Vegetable', id: 0 }, {value: 'Carrots', id: 1}, {value: 'Bell Peppers', id: 2}, {value: 'Cabbage', id: 3}, {value: 'Green Beans', id: 4}, {value: 'Snow Peas', id: 5}],
        // Choose your Toppings
        [ { title: 'Choose your Toppings', id: 0 }, {value: 'Egg', id: 1}, {value: 'Kikiam', id: 2}, {value: 'Squidball', id: 3}],
        // Choose your Garnish
        [{ title: 'Choose your Garnish', id: 0 }, {value: 'Calamansi', id: 1}, {value: 'Shallots', id: 2}],
        [{ title: 'Choose your Garnish2', id: 0 }, {value: 'Calamansi2', id: 1}, {value: 'Shallots2 ', id: 2}]
    ]);
    const [optionsCounter, setOptionsCounter] = useState(0);
    const [selectedAddOns, setSelectedAddOns] = useState("Original");
    // const [selectedMeat, setSelectedMeat] = useState(options[2][current === 2 ? optionsCounter : 0 ].title);
    // const [selectedVegetable, setSelectedVegetable] = useState(options[3][current === 3 ? optionsCounter : 0 ].title);
    // const [selectedTopppings, setSelectedTopppings] = useState(options[4][current === 4 ? optionsCounter : 0 ].title);
    // const [selectedGarnish, setSelectedGarnish] = useState(options[5][current === 5 ? optionsCounter : 0 ].title);

    useEffect(() => {
        setCurrent(0);
    }, []);

    // Handle option click to select sauce
    const handleSauceClick = (option) => {
        setSelectedAddOns(option.value);
    };

    // Increment/Decrement optionsCounter
    const moveUp = () => {
        console.log(optionsCounter)
        if (optionsCounter > 1) {
            setOptionsCounter(optionsCounter - 1);
            setSelectedAddOns(options[current][optionsCounter - 1]?.value || "");
        }
        console.log(optionsCounter)
    };

    const moveDown = async () => {
        console.log(optionsCounter)
        console.log(current)
        if (optionsCounter < options[current].length - 1) {
            setOptionsCounter(optionsCounter + 1);
            setSelectedAddOns(options[current][optionsCounter + 1]?.value || "");
        }
        console.log(optionsCounter)
    };

    return (
        <div className="text-4xl text-center bg-blue-300 w-full h-[calc(100vh-7rem)] flex items-center px-12 my-4">
            <div className="w-full h-[95%] bg-red-200 rounded-lg rounded-tr-[6rem] rounded-bl-[6rem] flex overflow-hidden">
                <div className={`pr-1/4 relative flex items-center justify-start pl-[4rem]
                    ${ current === 0 ? 'w-1/2' : 'w-[35rem]'}`}>
                    <div className="rounded-full w-[52rem] h-[52rem] bg-red-900 absolute -left-[10rem] -top-[8rem] z-0"></div>

                    {current === 0 && (
                        <div className="z-10 text-6xl font-bold tracking-wide text-white flex flex-col items-start gap-6">
                            <div>Let's</div>
                            <div>Kantonize</div>
                            <div>You</div>
                            <div>Food!</div>
                            <div 
                                onClick={() => setCurrent((prev) => prev + 1)} 
                                className="z-10 text-xl px-8 py-2 bg-red-200 text-red-900 w-fit rounded-full font-semibold cursor-pointer hover:bg-red-100 hover:text-red-950">
                                Kantonan na! &gt;
                            </div>
                        </div>
                    )}

                    {current !== 0 && (
                        <div className="z-10 w-full">
                            <div className="grid gap-[0.5rem] w-full">
                                <div className="text-sm flex gap-2 mb-[2rem]">
                                    {steps.map((step) => (
                                        step.id !== 0 ? <div className={`${step.id === current ? 'text-white' : 'text-gray-400'}`} key={step.id}>{step.id}</div> : false
                                    ))}
                                </div>
                                <div className="text-4xl text-white font-semibold min-w-[25rem] w-fit flex justify-center">{ options[current][0].title}</div>
                                <div className="z-10 flex justify-start relative">
                                    <div className="flex flex-col gap-4 w-[25rem] items-center h-[12rem] justify-center">
                                        {options[current].map((option) => (
                                            <div
                                                className={`${option.value ===  selectedAddOns ? 'text-white scale-95 font-extrabold duration-300 tracking-wider' : 'text-gray-400 text-xl'} cursor-pointer`}
                                                key={option.id}
                                                onClick={() => { handleSauceClick(option) }}
                                            >
                                                {option.value}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center absolute right-[2rem] transform top-1/2 -translate-y-1/2">
                                        <div className="text-base grid gap-8 text-gray-800">
                                            <button className="p-[0.3rem] rounded-full bg-gray-300 hover:bg-white cursor-pointer"
                                                onClick={moveUp}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                </svg>
                                            </button>
                                            <button className="p-[0.3rem] rounded-full bg-gray-300 hover:bg-white cursor-pointer"
                                                onClick={() => {moveDown(); console.log(123)}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[25rem] flex justify-center mt-[2rem]">
                                    <div className="text-xl px-8 py-[0.5rem] bg-red-200 text-red-950 w-fit rounded-full font-semibold cursor-pointer hover:bg-red-100"
                                        style={{ boxShadow: 'inset 0 5px 5px rgba(0, 0, 0, 0.8)' }}
                                        onClick={ () => { 
                                            if (current < steps.length - 1) {
                                                setOptionsCounter(0);
                                                setCurrent((prev) => prev + 1);
                                                current < 6 ? setSelectedAddOns(options[current + 1][1].value) : false
                                            }
                                        }}
                                        >
                                        Add to the mix
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="w-1/2">
                    {current === 0 && (
                        <img src="/assets/kantonize/BOWL_full_gourmet.png" alt="bowl_image" className="w-[50rem]" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default KantonizePage;
