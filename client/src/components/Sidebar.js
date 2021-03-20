import React from 'react'
import {Row , Col} from "react-bootstrap";
import SidebarItemRow from "./SidebarItemRow";

const Sidebar = (props) => {

    return (
        <div className="px-3">
            Menu
            <SidebarItemRow iconName="house" title="Home" notificationCount={3} />
            <SidebarItemRow iconName="share" title="Bug Feed" notificationCount={3} />
            <SidebarItemRow iconName="cup" title="Projects" notificationCount={3} />
            <SidebarItemRow iconName="grid-3x3-gap-fill" title="Bug Reported By Me" notificationCount={0} />
            <SidebarItemRow iconName="grid-3x3-gap-fill" title="Bug Reported By Me" notificationCount={3} />


        </div>
    )
}

export default Sidebar