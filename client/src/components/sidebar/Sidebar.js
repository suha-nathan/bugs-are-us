import React from 'react'
import SidebarItemRow from "./SidebarItemRow";
import SidebarTitleRow from "./SidebarTitleRow";

const Sidebar = ({ projectData, allProjects }) => {

    return (
        <div className="sidebar px-3">
            <SidebarTitleRow title="MENU"/>

            <SidebarItemRow iconName="house" title="Home" notificationCount={projectData?.length} url="/"/>
            {/*<SidebarItemRow iconName="share" title="Bug Feed" notificationCount={projectData?.length} />*/}
            <SidebarItemRow iconName="cup" title="Projects" notificationCount={allProjects?.length} url="/projects" />

            <br />
            <SidebarTitleRow title="MY BUGS"/>
            <SidebarItemRow iconName="grid-3x3-gap-fill" title="Bug Reported By Me" notificationCount={0} />
            <SidebarItemRow iconName="grid-3x3-gap-fill" title="Overdue Bugs" notificationCount={3} />
            <SidebarItemRow iconName="grid-3x3-gap-fill" title="Completed Bugs" notificationCount={3} />
            <SidebarItemRow iconName="grid-3x3-gap-fill" title="Settings"  url="/user/edit" notificationCount={0} />

            <br />
            <SidebarTitleRow title="POPULAR SECTION"/>

        </div>
    )
}

export default Sidebar