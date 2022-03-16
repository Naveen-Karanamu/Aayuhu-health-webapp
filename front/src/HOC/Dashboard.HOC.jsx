import React from 'react'
import { Route } from "react-router-dom"
import HomeLayout from '../Layouts/Home.layout'

export const DashboardHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route {...rest} component={(props) => (
                <HomeLayout>
                    <Component {...props} />
                </HomeLayout>
            )}>

            </Route>
        </>
    )
}

export default DashboardHOC