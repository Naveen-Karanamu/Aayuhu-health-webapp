import React from "react";

// Icons
import { IoLocationSharp } from "react-icons/io5"
import { RiArrowDropDownFill } from "react-icons/ri"

const HomePage = () => {
    return (
        <>
            <div className="lg:container lg:mx-auto lg:px-40 lg:py-8">
                <div className="lg:flex lg:justify-center lg:m-0 -mx-6 py-6">
                    <div className="flex md:gap-6  gap-2 justify-center bg-gray-300 lg:w-3/4 lg:py-2 lg:px-8 items-center rounded-lg mx-10 px-2 py-2 ">
                        <div className="flex items-center gap-2 lg:gap-4 w-1/3 border-r-2 border-black">
                            <span><IoLocationSharp className="md:w-6 md:h-6" /></span>
                            <span>Chennai</span>
                            <span className="md:pl-20 "><RiArrowDropDownFill className="md:w-8 md:h-8 " /></span>
                        </div>
                        <div className="w-2/3">
                            <input type="search" placeholder="Search your requirements" className=" bg-white text-white w-full lg:p-3 rounded-lg text-center p-2" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default HomePage