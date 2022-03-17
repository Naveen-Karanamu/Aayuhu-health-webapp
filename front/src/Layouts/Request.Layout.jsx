import React from "react";
import DefaultNavbar from "../Components/Navbar/Default.Navbar";
import MobileNavigator from "../Mobile Navigator/MobileNavigator";

const RequestLayout = (props) => {
    return (
        <>
            <DefaultNavbar />
            {props.children}
            <MobileNavigator />
        </>
    )
}

export default RequestLayout;