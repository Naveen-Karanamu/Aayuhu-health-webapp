import React from "react";

// icons
import {AiFillHome, AiFillInfoCircle} from "react-icons/ai"
import {FaMicroscope} from "react-icons/fa"
import {BsFillTelephoneOutboundFill} from "react-icons/bs"

const MobileNavigator =()=>{
    return(
        <>
            <div className="md:hidden fixed bottom-0 bg-gray-300 w-full pb-1 pt-2 flex justify-between px-4">
                <span className="flex flex-col items-center text-gray-700"><AiFillHome className="w-7 h-7 "/>Home</span>
                <span className="flex flex-col items-center text-gray-700"><FaMicroscope className="w-7 h-7 "/>Features</span>
                <span className="flex flex-col items-center text-gray-700"><AiFillInfoCircle className="w-7 h-7 "/>About</span>
                <span className="flex flex-col items-center text-gray-700"><BsFillTelephoneOutboundFill className="w-6 h-7 "/>Contact</span>
            </div>
        </>
    )
}

export default MobileNavigator;