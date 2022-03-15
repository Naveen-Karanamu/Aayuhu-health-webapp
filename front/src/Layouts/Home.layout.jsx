import React from "react";
import DefaultNavbar from "../Components/Navbar/Default.Navbar";

const HomeLayout = (props) => {
    return (
        <>
        <DefaultNavbar />
            {props.children}
        </>
    )
}

export default HomeLayout;