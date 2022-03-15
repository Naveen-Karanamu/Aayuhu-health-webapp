import React from "react";

// Icons
import { IoLocationSharp } from "react-icons/io5"
import { RiArrowDropDownFill } from "react-icons/ri"

const HomePage = () => {
    return (
        <>
            <div className="lg:container lg:mx-auto lg:px-40 lg:pb-8 pt-16 lg:pt-24 md:pt-20">
                <div className="lg:flex lg:justify-center lg:m-0  py-6">
                    <div className="flex md:gap-6  gap-2 justify-center bg-blue-100 lg:w-3/4 lg:py-2 lg:px-8 items-center rounded-lg lg:mx-10 px-2 py-2 mx-4">
                        <div className="flex items-center gap-2 lg:gap-4 w-1/3 border-r-2 border-black">
                            <span><IoLocationSharp className="md:w-6 md:h-6 w-4 h-4" /></span>
                            <span>Chennai</span>
                            <span className="md:pl-20 "><RiArrowDropDownFill className="md:w-8 md:h-8 w-8 h-8" /></span>
                        </div>
                        <div className="w-2/3">
                            <input type="search" placeholder="Search your requirements" className=" bg-white text-blue-800 w-full lg:p-3 rounded-lg text-center p-2 focus:outline-none" />
                        </div>
                    </div>

                </div>

                <div className=" md:flex md:px-8 md:justify-between md:items-center lg:container lg:mx-auto lg:px-16 lg:gap-10 lg:py-6 ">
                    <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-10">
                        <div className="flex items-center flex-col gap-1 md:items-start lg:gap-3">
                            <h1 className="text-2xl lg:text-4xl md:font-bold font-semibold">ONE INDIA MANY HOSPITAL'S</h1>
                            <h5 className="text-xl font-normal lg:font-semibold lg:text-2xl">Choose your Hospital</h5>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start lg:gap-6 px-6 md:px-0">
                            <button className="bg-blue-400 px-4 py-2 rounded-lg font-bold text-white text-md lg:text-xl lg:px-6 lg:py-3 w-full">Book Slot</button>
                            <button className="bg-blue-400 px-4 py-2 rounded-lg font-bold text-white text-md lg:text-xl lg:px-6 lg:py-3 w-full">Fix Slot</button>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg md:p-0 md:w-80 lg:w-1/2">
                        <img src="https://t4.ftcdn.net/jpg/02/74/73/01/360_F_274730119_ht4FXz4R6RnIJgPk7WeNALxxaf524Jrb.jpg" alt="doctors" className="w-full h-full rounded-lg" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage