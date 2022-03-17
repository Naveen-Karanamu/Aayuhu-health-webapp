import React from 'react'
import { useLocation, Link, useParams } from 'react-router-dom';

// Icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const RequestNavigator = (props) => {
    const { id } = useParams();
    return (
        <Link to={`/request/${id}/${props.route}`}>
            <div className={props.isActive ? "flex items-center gap-1 text-blue-700 font-bold " : "flex items-center gap-1"}>
                <p className={props.isActive?" text-xl border-b-2 border-blue-800 pb-1":" text-xl"}>{props.title}</p>
                {
                    props.isActive?<FaChevronUp />:<FaChevronDown />
                }
            </div>
        </Link>
    )
}

export const RequestContainer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Past",
            route: "past",
            isActive: currentPath.includes("past")
        },
        {
            title: "Upcoming",
            route: "upcoming",
            isActive: currentPath.includes("upcoming")
        },
        {
            title: "Requests",
            route: "requests",
            isActive: currentPath.includes("requests")
        },
    ]

    return (
        <>
            <div className="lg:container lg:mx-auto lg:px-72 lg:pb-8 pt-20 lg:pt-24 md:pt-20 px-4 md:px-8 pb-6">
                <div className="flex justify-between">
                    {
                        tabs.map((tab) => (
                            <RequestNavigator {...tab} key={`3000${tab.route}`}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RequestContainer;