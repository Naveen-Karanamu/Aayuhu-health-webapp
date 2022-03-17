import React from "react";
import DefaultNavbar from "../Components/Navbar/Default.Navbar";
import MobileNavigator from "../Mobile Navigator/MobileNavigator";

// Icons
import { FaChevronDown } from "react-icons/fa"

const RequestLayout = (props) => {
    return (
        <>
            <DefaultNavbar />
            <div className="lg:container lg:mx-auto lg:px-40 lg:pb-8 pt-20 lg:pt-24 md:pt-20 px-4 ">
                <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                        <p className="text-xl">Past</p>
                        <FaChevronDown />
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-xl">Upcoming</p>
                        <FaChevronDown />
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-xl">Requests</p>
                        <FaChevronDown />
                    </div>
                </div>
            </div>
            {props.children}
            <MobileNavigator />
        </>
    )
}

export default RequestLayout;